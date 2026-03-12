export const SlideTemplate = ({
  title,
  descriptives,
  sentence,
}: {
  title: string;
  descriptives: string;
  sentence: string;
}) => {
  return (
    <article className="mx-auto flex min-h-[340px] w-full flex-col justify-between rounded-xl border border-white/20 bg-slate-900/55 p-5 shadow-lg sm:min-h-[440px] sm:rounded-2xl sm:p-8">
      <header className="ml-auto max-w-[24rem] text-right">
        <h3 className="text-2xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h3>
        <p className="mt-2 text-xs tracking-wide text-slate-200 sm:mt-3 sm:text-base">
          {descriptives}
        </p>
      </header>
      <p className="max-w-xl text-sm leading-relaxed text-slate-100 sm:text-lg">
        {sentence}
      </p>
    </article>
  );
};
