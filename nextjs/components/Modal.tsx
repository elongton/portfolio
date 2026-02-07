"use client";

import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  trigger: ReactElement;
  content: ReactNode;
  title?: string;
  className?: string;
  overlayClassName?: string;
  panelClassName?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
};

const mergeHandlers =
  (first?: () => void, second?: () => void) => () => {
    first?.();
    second?.();
  };

export const Modal = ({
  trigger,
  content,
  title,
  className = "",
  overlayClassName = "bg-black/60",
  panelClassName = "bg-slate-800",
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   if (!isOpen) return;
  //   const previousOverflow = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = previousOverflow;
  //   };
  // }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, isOpen]);

  const triggerWithHandler = useMemo(() => {
    if (!isValidElement(trigger)) return null;
    return cloneElement(trigger, {
      onClick: mergeHandlers(trigger.props?.onClick, () => setIsOpen(true)),
    });
  }, [trigger]);

  if (!triggerWithHandler) return null;

  const modal = isOpen ? (
    <div className={`fixed inset-0 z-50 ${className}`} role="dialog" aria-modal="true">
      <div
        className={`absolute inset-0 ${overlayClassName}`}
        onClick={closeOnOverlayClick ? () => setIsOpen(false) : undefined}
      />
      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10">
        <div className={`relative w-full rounded-md shadow-2xl ${panelClassName}`}>
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h3 className="text-lg font-semibold">{title ?? "Details"}</h3>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:text-slate-900"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          <div className="px-5 py-6">{content}</div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {triggerWithHandler}
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
};
