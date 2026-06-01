"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import { ClientCell, clientCells } from "@/lib/data";
import { cn } from "@/lib/utils";

const ROTATION_INTERVAL_MS = 2400;
const TOTAL_VISIBLE_CELLS = 8;
const CELLS_TO_REPLACE_PER_TICK = 2;

type RotatingCell = Extract<ClientCell, { kind: "image" }>;

function getRotatingCellIdentity(cell: RotatingCell): string {
  return cell.label ?? cell.src;
}

const copyCell = clientCells.find((cell) => cell.kind === "copy");
const rotatingCells = clientCells.filter(
  (cell): cell is RotatingCell => cell.kind === "image",
);
const rotatingCellCount = copyCell
  ? TOTAL_VISIBLE_CELLS - 1
  : TOTAL_VISIBLE_CELLS;
const logoSwapTransition = {
  duration: 0.92,
  ease: [0.23, 1, 0.32, 1],
} as const;

function shuffleCells<T>(cells: T[]) {
  const shuffled = [...cells];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function getInitialVisibleCells(): ClientCell[] {
  const nextCells = rotatingCells.slice(
    0,
    Math.min(rotatingCellCount, rotatingCells.length),
  );

  return copyCell ? [copyCell, ...nextCells] : nextCells;
}

function rotateVisibleCells(currentCells: ClientCell[]): ClientCell[] {
  if (rotatingCells.length <= rotatingCellCount) {
    return currentCells;
  }

  const currentRotatingCells = (
    copyCell ? currentCells.slice(1) : currentCells
  ).filter((cell): cell is RotatingCell => cell.kind === "image");
  const availableCells = rotatingCells.filter(
    (candidate) =>
      !currentRotatingCells.some(
        (cell) =>
          getRotatingCellIdentity(cell) === getRotatingCellIdentity(candidate),
      ),
  );

  if (availableCells.length === 0) {
    return currentCells;
  }

  const nextRotatingCells = [...currentRotatingCells];
  const replacementCount = Math.min(
    CELLS_TO_REPLACE_PER_TICK,
    nextRotatingCells.length,
    availableCells.length,
  );
  const indicesToReplace = shuffleCells(
    Array.from({ length: nextRotatingCells.length }, (_, index) => index),
  ).slice(0, replacementCount);
  const replacementCells = shuffleCells(availableCells).slice(
    0,
    replacementCount,
  );

  indicesToReplace.forEach((targetIndex, replacementIndex) => {
    nextRotatingCells[targetIndex] = replacementCells[replacementIndex];
  });

  return copyCell ? [copyCell, ...nextRotatingCells] : nextRotatingCells;
}

function getCellKey(cell: RotatingCell) {
  return `${cell.kind}-${getRotatingCellIdentity(cell)}`;
}

function ClientLogo({ cell }: { cell: RotatingCell }) {
  const imageAccessibleName = cell.label ?? "";
  const imgAlt = imageAccessibleName || "Client logo";

  const logoImage = (
    // Client logos vary in format (JPG / PNG); a plain `img` works consistently.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cell.src}
      alt={imgAlt}
      decoding="async"
      draggable={false}
      loading="lazy"
      className={cn(
        "w-auto shrink-0 select-none object-contain",
        !cell.preserveColor && "grayscale brightness-0 contrast-125",
        cell.className,
      )}
    />
  );

  const textParts = Boolean(cell.label);

  if (textParts) {
    return (
      <div
        aria-label={imageAccessibleName || undefined}
        className={cn(
          "flex max-w-[12rem] items-center justify-center gap-3 text-neutral-950",
          cell.lockupClassName,
        )}
      >
        {logoImage}
        <span
          className={cn(
            "text-left text-[0.95rem] font-medium leading-tight tracking-[-0.03em] text-neutral-900 sm:text-base",
            cell.labelClassName,
          )}
        >
          {cell.label}
        </span>
      </div>
    );
  }

  return (
    <div
      aria-label={imageAccessibleName || undefined}
      className="flex items-center justify-center"
    >
      {logoImage}
    </div>
  );
}

function RotatingClientLogo({
  cell,
  shouldReduceMotion,
}: {
  cell: RotatingCell;
  shouldReduceMotion: boolean;
}) {
  return (
    <div className="relative flex min-h-14 w-full items-center justify-center">
      <AnimatePresence initial={false} mode="sync">
        <m.div
          key={getCellKey(cell)}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px) scale(1)",
          }}
          className="absolute inset-0 flex items-center justify-center"
          exit={{
            opacity: 0,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
            transform: shouldReduceMotion
              ? "translateY(0px) scale(1)"
              : "translateY(-6px) scale(1.04)",
          }}
          initial={{
            opacity: 0,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(14px)",
            transform: shouldReduceMotion
              ? "translateY(0px) scale(1)"
              : "translateY(8px) scale(0.96)",
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2, ease: "easeOut" }
              : logoSwapTransition
          }
        >
          <ClientLogo cell={cell} />
        </m.div>
      </AnimatePresence>
    </div>
  );
}

export function HeroClientGrid() {
  const [visibleCells, setVisibleCells] = useState<ClientCell[]>(() => {
    return getInitialVisibleCells();
  });
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setVisibleCells((currentCells) => rotateVisibleCells(currentCells));
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const mobileColumnCount = 2;
  const desktopColumnCount = 4;
  const mobileRowCount = Math.ceil(visibleCells.length / mobileColumnCount);
  const desktopRowCount = Math.ceil(visibleCells.length / desktopColumnCount);

  const getRowLength = (index: number, columnCount: number) => {
    const rowStart = Math.floor(index / columnCount) * columnCount;
    return Math.min(columnCount, visibleCells.length - rowStart);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full overflow-hidden rounded-md border-y mt-10 border-neutral-200/80 bg-white/65 backdrop-blur-[2px] sm:border-x">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {visibleCells.map((cell, index) => {
            const mobileRow = Math.floor(index / mobileColumnCount);
            const desktopRow = Math.floor(index / desktopColumnCount);
            const isMobileLastInRow =
              index % mobileColumnCount ===
              getRowLength(index, mobileColumnCount) - 1;
            const isDesktopLastInRow =
              index % desktopColumnCount ===
              getRowLength(index, desktopColumnCount) - 1;

            return (
              <div
                key={cell.kind === "copy" ? "copy" : `client-cell-${index}`}
                className={cn(
                  "flex min-h-28 items-center justify-center px-5 py-8 text-neutral-900 sm:min-h-32 md:min-h-36",
                  !isMobileLastInRow &&
                    "border-r border-neutral-200/80 sm:border-r-0",
                  !isDesktopLastInRow && "sm:border-r sm:border-neutral-200/80",
                  mobileRow < mobileRowCount - 1 &&
                    "border-b border-neutral-200/80 sm:border-b-0",
                  desktopRow < desktopRowCount - 1 && "sm:border-b",
                )}
              >
                {cell.kind === "copy" ? (
                  <p className="max-w-48 text-left text-lg font-medium leading-snug tracking-[-0.03em] text-neutral-900 sm:text-xl md:text-2xl">
                    {cell.text}
                  </p>
                ) : (
                  <RotatingClientLogo
                    cell={cell}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}
