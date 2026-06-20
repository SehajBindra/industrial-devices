const GLASS_CLIP_ID = "hero-disinfection-glass-clip";
const glassPath =
  "M 24 100 L 76 100 L 87.4 5 Q 88 0 83 0 L 17 0 Q 12 0 12.6 5 Z";
const glassClipPathNormalized =
  "M 0.24 1 L 0.76 1 L 0.874 0.05 Q 0.88 0 0.83 0 L 0.17 0 Q 0.12 0 0.126 0.05 Z";
const waterClipPath = "polygon(4% 0%, 96% 0%, 86% 100%, 14% 100%)";

const impurities = [
  { left: "32%", top: "30%", size: "0.048em", delay: "0s" },
  { left: "56%", top: "45%", size: "0.038em", delay: "0.3s" },
  { left: "44%", top: "60%", size: "0.042em", delay: "0.6s" },
  { left: "62%", top: "70%", size: "0.032em", delay: "0.9s" },
] as const;

const bubbles = [
  { left: "26%", bottom: "6%", size: "0.050em", delay: "0s" },
  { left: "34%", bottom: "11%", size: "0.038em", delay: "0.35s" },
  { left: "42%", bottom: "4%", size: "0.054em", delay: "0.7s" },
  { left: "48%", bottom: "16%", size: "0.032em", delay: "1.05s" },
  { left: "52%", bottom: "8%", size: "0.044em", delay: "1.4s" },
  { left: "58%", bottom: "13%", size: "0.036em", delay: "1.75s" },
  { left: "36%", bottom: "19%", size: "0.028em", delay: "2.1s" },
  { left: "44%", bottom: "24%", size: "0.034em", delay: "0.55s" },
  { left: "54%", bottom: "22%", size: "0.026em", delay: "2.45s" },
  { left: "62%", bottom: "7%", size: "0.042em", delay: "0.9s" },
  { left: "66%", bottom: "17%", size: "0.030em", delay: "1.25s" },
  { left: "30%", bottom: "14%", size: "0.024em", delay: "1.6s" },
  { left: "50%", bottom: "28%", size: "0.022em", delay: "2.8s" },
  { left: "38%", bottom: "26%", size: "0.026em", delay: "3.15s" },
  { left: "60%", bottom: "25%", size: "0.028em", delay: "3.5s" },
  { left: "46%", bottom: "2%", size: "0.040em", delay: "2.2s" },
] as const;

export function HeroDisinfectionGlass() {
  return (
    <span
      aria-hidden="true"
      className="relative hidden h-[1.08em] w-[0.76em] shrink-0 translate-y-[0.09em] items-end justify-center align-baseline md:ml-[0.18em] md:inline-flex"
    >
      {/* Glass body */}
      <span className="absolute inset-x-[0.03em] bottom-0 h-[1.04em]">
        <span
          className="absolute inset-0 overflow-hidden bg-white/6 shadow-[inset_0_0.08em_0.14em_rgba(255,255,255,0.85),inset_-0.03em_0_0.1em_rgba(255,255,255,0.35),inset_0.03em_0_0.08em_rgba(0,0,0,0.05),0_0.08em_0.18em_rgba(0,0,0,0.07)] backdrop-blur-[0.015em]"
          style={{ clipPath: `url(#${GLASS_CLIP_ID})` }}
        >
          {/* Water */}
          <span
            className="absolute inset-x-[6%] bottom-[5%] h-[75%] overflow-hidden"
            style={{ clipPath: waterClipPath }}
          >
            {/* Murky yellow water */}
            <span className="animate-hero-glass-water-yellow absolute inset-0">
              <span className="absolute inset-0 bg-linear-to-b from-amber-50/90 via-yellow-200/80 to-amber-500/70" />
              <span className="absolute inset-0 bg-linear-to-r from-yellow-600/15 via-transparent to-yellow-600/15" />
              <span className="absolute inset-0 bg-linear-to-t from-amber-700/20 via-transparent to-transparent" />
            </span>

            {/* Clean blue water */}
            <span className="animate-hero-glass-water-blue absolute inset-0">
              <span className="absolute inset-0 bg-linear-to-b from-cyan-100/85 via-sky-300/70 to-sky-500/60" />
              <span className="absolute inset-0 bg-linear-to-r from-sky-400/15 via-transparent to-sky-400/15" />
              <span className="absolute inset-0 bg-linear-to-t from-sky-600/15 via-transparent to-transparent" />
            </span>

            {/* Water surface meniscus */}
            <span className="absolute inset-x-[8%] top-0 z-10 h-[0.025em] rounded-full bg-linear-to-r from-white/30 via-white/65 to-white/30" />

            <span className="animate-hero-glass-impurities-fade absolute inset-0">
              {impurities.map((impurity, i) => (
                <span
                  key={`imp-${i}`}
                  className="animate-hero-glass-impurity absolute rounded-full bg-neutral-200/40"
                  style={{
                    left: impurity.left,
                    top: impurity.top,
                    width: impurity.size,
                    height: impurity.size,
                    animationDelay: impurity.delay,
                  }}
                />
              ))}
            </span>

            {bubbles.map((bubble, i) => (
              <span
                key={`bub-${i}`}
                className="animate-hero-glass-bubble absolute rounded-full border border-white/75 bg-white/15 shadow-[inset_0_0.012em_0.02em_rgba(255,255,255,0.6)]"
                style={{
                  left: bubble.left,
                  bottom: bubble.bottom,
                  width: bubble.size,
                  height: bubble.size,
                  animationDelay: bubble.delay,
                }}
              />
            ))}
          </span>

          {/* Glass rim */}
          <span className="absolute inset-x-[12%] top-0 h-[0.03em] rounded-full bg-linear-to-r from-white/20 via-white/80 to-white/20" />

          {/* Primary highlight — left edge */}
          <span className="absolute inset-y-[6%] left-[12%] w-[0.028em] rounded-full bg-linear-to-b from-white/95 via-white/55 to-white/20" />

          {/* Secondary highlight — inner reflection */}
          <span className="absolute inset-y-[18%] left-[22%] w-[0.012em] rounded-full bg-white/25" />

          {/* Right-edge refraction */}
          <span className="absolute inset-y-[10%] right-[16%] w-[0.014em] rounded-full bg-linear-to-b from-white/30 via-white/15 to-transparent" />

          {/* Animated shimmer */}
          <span className="animate-hero-glass-shimmer pointer-events-none absolute bottom-[10%] h-[65%] w-[0.08em] rounded-full bg-linear-to-b from-white/80 via-white/35 to-transparent" />
        </span>

        {/* Full glass outline with rounded top corners */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-gray-300"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={GLASS_CLIP_ID} clipPathUnits="objectBoundingBox">
              <path d={glassClipPathNormalized} />
            </clipPath>
          </defs>
          <path
            d={glassPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>

      {/* Ground shadow */}
      <span className="absolute bottom-[-0.05em] h-[0.06em] w-[0.44em] rounded-full bg-neutral-900/10 blur-[0.012em]" />
    </span>
  );
}
