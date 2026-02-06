import type { CSSProperties } from "react";

type WordcloudProps = {
  text: string;
  links?: Record<string, string>;
  maxWords?: number;
  minFontPx?: number;
  maxFontPx?: number;
  className?: string;
};

type PlacedWord = {
  word: string;
  count: number;
  x: number;
  y: number;
  fontSize: number;
  href?: string;
};

type Rect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type Zone = {
  name: "body" | "leftPanel" | "rightPanel" | "dish" | "antenna";
  centerX: number;
  centerY: number;
  maxRadius: number;
  bounds: { left: number; right: number; top: number; bottom: number };
};

const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 400;
const GOLDEN_ANGLE = 2.399963229728653;

const SATELLITE_ZONES: Zone[] = [
  {
    name: "body",
    centerX: 0.5,
    centerY: 0.5,
    maxRadius: 0.24,
    bounds: { left: 0.32, right: 0.68, top: 0.30, bottom: 0.70 },
  },
  {
    name: "leftPanel",
    centerX: 0.19,
    centerY: 0.5,
    maxRadius: 0.24,
    bounds: { left: 0.04, right: 0.32, top: 0.24, bottom: 0.76 },
  },
  {
    name: "rightPanel",
    centerX: 0.81,
    centerY: 0.5,
    maxRadius: 0.24,
    bounds: { left: 0.68, right: 0.96, top: 0.24, bottom: 0.76 },
  },
  {
    name: "dish",
    centerX: 0.5,
    centerY: 0.80,
    maxRadius: 0.12,
    bounds: { left: 0.43, right: 0.57, top: 0.72, bottom: 0.90 },
  },
  {
    name: "antenna",
    centerX: 0.5,
    centerY: 0.68,
    maxRadius: 0.08,
    bounds: { left: 0.47, right: 0.53, top: 0.60, bottom: 0.78 },
  },
];

const SATELLITE_Y_MIN = Math.min(...SATELLITE_ZONES.map((zone) => zone.bounds.top));
const SATELLITE_Y_MAX = Math.max(
  ...SATELLITE_ZONES.map((zone) => zone.bounds.bottom)
);
const SATELLITE_VIEWBOX_TOP = Math.floor(VIEWBOX_HEIGHT * SATELLITE_Y_MIN);
const SATELLITE_VIEWBOX_HEIGHT = Math.ceil(
  VIEWBOX_HEIGHT * (SATELLITE_Y_MAX - SATELLITE_Y_MIN)
);

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "if",
  "then",
  "than",
  "so",
  "for",
  "nor",
  "yet",
  "to",
  "of",
  "in",
  "on",
  "at",
  "by",
  "with",
  "from",
  "as",
  "into",
  "over",
  "under",
  "about",
  "between",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "up",
  "down",
  "out",
  "off",
  "again",
  "further",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "not",
  "only",
  "own",
  "same",
  "too",
  "very",
  "can",
  "will",
  "just",
  "is",
  "am",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "i",
  "me",
  "my",
  "mine",
  "we",
  "our",
  "ours",
  "you",
  "your",
  "yours",
  "he",
  "him",
  "his",
  "she",
  "her",
  "hers",
  "it",
  "its",
  "they",
  "them",
  "their",
  "theirs",
]);

const normalizeWord = (value: string) =>
  value.toLowerCase().replace(/['\u2019]/g, "").trim();

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .split(/[^a-z0-9]+/g)
    .map((word) => word.trim())
    .filter((word) => word && !STOPWORDS.has(word));

const rectsOverlap = (a: Rect, b: Rect) =>
  a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

const isPointInSatellite = (x: number, y: number, width: number, height: number) => {
  const nx = x / width;
  const ny = y / height;

  const inPanelLeft = nx >= 0.05 && nx <= 0.30 && ny >= 0.28 && ny <= 0.72;
  const inPanelRight = nx >= 0.70 && nx <= 0.95 && ny >= 0.28 && ny <= 0.72;
  const inBody = nx >= 0.34 && nx <= 0.66 && ny >= 0.34 && ny <= 0.66;

  const dx = nx - 0.5;
  const dy = ny - 0.5;
  const inCore = dx * dx + dy * dy <= 0.11 * 0.11;

  const dishDx = (nx - 0.5) / 0.09;
  const dishDy = (ny - 0.80) / 0.05;
  const inDish = dishDx * dishDx + dishDy * dishDy <= 1;

  const inAntenna = nx >= 0.49 && nx <= 0.51 && ny >= 0.64 && ny <= 0.80;

  return inPanelLeft || inPanelRight || inBody || inCore || inDish || inAntenna;
};

const rectFitsSatellite = (rect: Rect, width: number, height: number) => {
  const midX = (rect.left + rect.right) / 2;
  const midY = (rect.top + rect.bottom) / 2;
  const points: Array<[number, number]> = [
    [rect.left, rect.top],
    [rect.right, rect.top],
    [rect.left, rect.bottom],
    [rect.right, rect.bottom],
    [midX, rect.top],
    [midX, rect.bottom],
    [rect.left, midY],
    [rect.right, midY],
    [midX, midY],
  ];

  return points.every(([px, py]) => isPointInSatellite(px, py, width, height));
};

const estimateWordSize = (word: string, fontSize: number) => {
  const width = Math.max(1, word.length) * fontSize * 0.58;
  return {
    width,
    height: fontSize * 1.2,
  };
};

const buildLayout = (
  words: Array<[string, number]>,
  width: number,
  height: number,
  minFontPx: number,
  maxFontPx: number
): PlacedWord[] => {
  if (!words.length || width <= 0 || height <= 0) {
    return [];
  }

  const counts = words.map(([, count]) => count);
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);
  const spread = Math.max(maxCount - minCount, 1);

  const placed: Array<PlacedWord & { rect: Rect }> = [];
//   const minAllowed = Math.max(6, minFontPx * 0.45);
  const minAllowed = Math.max(6, minFontPx * 0.45);

  const zoneByName = new Map(SATELLITE_ZONES.map((zone) => [zone.name, zone]));

  const zoneOrderForIndex = (index: number, total: number) => {
    const ratio = index / Math.max(total, 1);
    const panelFirst = index % 2 === 0 ? "leftPanel" : "rightPanel";
    const panelSecond = panelFirst === "leftPanel" ? "rightPanel" : "leftPanel";
    if (ratio < 0.22) {
      return ["body", panelFirst, panelSecond, "dish", "antenna"] as const;
    }
    if (ratio < 0.55) {
      return [panelFirst, panelSecond, "body", "dish", "antenna"] as const;
    }
    return ["dish", panelFirst, panelSecond, "body", "antenna"] as const;
  };

  for (const [index, [word, count]] of words.entries()) {
    const scale = Math.pow((count - minCount) / spread, 1.45);
    const baseSize = minFontPx + scale * (maxFontPx - minFontPx);

    let fontSize = baseSize;
    let placedWord: PlacedWord | null = null;
    const maxAttempts = 1100;

    while (!placedWord && fontSize >= minAllowed) {
      const padding = Math.max(2, Math.round(fontSize * 0.12));
      const { width: wordWidth, height: wordHeight } = estimateWordSize(word, fontSize);
      const zoneNames = zoneOrderForIndex(index, words.length);

      for (const zoneName of zoneNames) {
        const zone = zoneByName.get(zoneName);
        if (!zone) {
          continue;
        }

        const zoneCenterX = zone.centerX * width;
        const zoneCenterY = zone.centerY * height;
        const zoneRadius = zone.maxRadius * Math.min(width, height);
        const zoneBounds = {
          left: zone.bounds.left * width,
          right: zone.bounds.right * width,
          top: zone.bounds.top * height,
          bottom: zone.bounds.bottom * height,
        };

        for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
          const t = Math.sqrt((attempt + 1) / maxAttempts);
          const angle = (attempt + index * 37) * GOLDEN_ANGLE;
          const radius = zoneRadius * t;
          const x = zoneCenterX + radius * Math.cos(angle);
          const y = zoneCenterY + radius * Math.sin(angle);

          if (
            x < zoneBounds.left ||
            x > zoneBounds.right ||
            y < zoneBounds.top ||
            y > zoneBounds.bottom
          ) {
            continue;
          }

          const rect: Rect = {
            left: x - wordWidth / 2 - padding,
            right: x + wordWidth / 2 + padding,
            top: y - wordHeight / 2 - padding,
            bottom: y + wordHeight / 2 + padding,
          };

          if (rect.left < 0 || rect.top < 0 || rect.right > width || rect.bottom > height) {
            continue;
          }

          if (!rectFitsSatellite(rect, width, height)) {
            continue;
          }

          if (placed.some((other) => rectsOverlap(rect, other.rect))) {
            continue;
          }

          placedWord = { word, count, x, y, fontSize };
          placed.push({ ...placedWord, rect });
          break;
        }

        if (placedWord) {
          break;
        }
      }

      if (!placedWord) {
        fontSize *= 0.88;
      }
    }

    if (!placedWord) {
      const fallbackSize = minAllowed;
      const padding = Math.max(2, Math.round(fallbackSize * 0.12));
      const { width: wordWidth, height: wordHeight } = estimateWordSize(word, fallbackSize);

      for (const zone of SATELLITE_ZONES) {
        const zoneCenterX = zone.centerX * width;
        const zoneCenterY = zone.centerY * height;
        const zoneRadius = zone.maxRadius * Math.min(width, height);
        const zoneBounds = {
          left: zone.bounds.left * width,
          right: zone.bounds.right * width,
          top: zone.bounds.top * height,
          bottom: zone.bounds.bottom * height,
        };

        for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
          const t = Math.sqrt((attempt + 1) / maxAttempts);
          const angle = (attempt + index * 53) * GOLDEN_ANGLE;
          const radius = zoneRadius * t;
          const x = zoneCenterX + radius * Math.cos(angle);
          const y = zoneCenterY + radius * Math.sin(angle);

          if (
            x < zoneBounds.left ||
            x > zoneBounds.right ||
            y < zoneBounds.top ||
            y > zoneBounds.bottom
          ) {
            continue;
          }

          const rect: Rect = {
            left: x - wordWidth / 2 - padding,
            right: x + wordWidth / 2 + padding,
            top: y - wordHeight / 2 - padding,
            bottom: y + wordHeight / 2 + padding,
          };

          if (rect.left < 0 || rect.top < 0 || rect.right > width || rect.bottom > height) {
            continue;
          }

          if (!rectFitsSatellite(rect, width, height)) {
            continue;
          }

          if (placed.some((other) => rectsOverlap(rect, other.rect))) {
            continue;
          }

          placedWord = { word, count, x, y, fontSize: fallbackSize };
          placed.push({ ...placedWord, rect });
          break;
        }

        if (placedWord) {
          break;
        }
      }
    }
  }

  return placed.map(({ rect: _rect, ...word }) => word);
};

export const WordcloudSatellite = ({
  text,
  links,
  maxWords = 180,
  minFontPx = 14,
  maxFontPx = 46,
  className,
}: WordcloudProps) => {
  const frequency = new Map<string, number>();
  for (const word of tokenize(text)) {
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  const words = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxWords);

  if (!words.length) {
    return null;
  }

  const layout = buildLayout(words, VIEWBOX_WIDTH, VIEWBOX_HEIGHT, minFontPx, maxFontPx);
  const linkLookup = new Map<string, string>();
  if (links) {
    for (const [word, href] of Object.entries(links)) {
      linkLookup.set(normalizeWord(word), href);
    }
  }

  return (
    <svg
      viewBox={`0 ${SATELLITE_VIEWBOX_TOP} ${VIEWBOX_WIDTH} ${SATELLITE_VIEWBOX_HEIGHT}`}
      className={`mx-auto w-full max-w-4xl ${className ?? ""}`}
      role="img"
      aria-label="Word cloud in the shape of a satellite"
      preserveAspectRatio="xMidYMid meet"
    >
      {layout.map(({ word, count, x, y, fontSize }) => {
        const normalized = normalizeWord(word);
        const href = linkLookup.get(normalized);
        const style: CSSProperties = {
          fontSize: `${fontSize}px`,
        //   fontWeight: 600,
        };

        if (!href) {
          return (
            <text
              key={`${word}-${count}-${x}-${y}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              style={style}
            >
              {word}
            </text>
          );
        }

        const isExternal = /^https?:\/\//i.test(href);
        return (
          <a
            key={`${word}-${count}-${x}-${y}`}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#38bdf8"
              style={{ ...style, textDecoration: "none", cursor: "pointer" }}
            >
              {word}
            </text>
          </a>
        );
      })}
    </svg>
  );
};
