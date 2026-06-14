const glassClipPath = "polygon(12% 0%, 88% 0%, 76% 100%, 24% 100%)";
const waterClipPath = "polygon(4% 0%, 96% 0%, 86% 100%, 14% 100%)";

const impurities = [
  { left: "32%", top: "30%", size: "0.048em", delay: "0s" },
  { left: "56%", top: "45%", size: "0.038em", delay: "0.3s" },
  { left: "44%", top: "60%", size: "0.042em", delay: "0.6s" },
  { left: "62%", top: "70%", size: "0.032em", delay: "0.9s" },
] as const;

const bubbles = [
  { left: "30%", bottom: "10%", size: "0.055em", delay: "0s" },
  { left: "55%", bottom: "6%", size: "0.042em", delay: "1.2s" },
  { left: "65%", bottom: "16%", size: "0.034em", delay: "2.1s" },
  { left: "40%", bottom: "22%", size: "0.028em", delay: "0.7s" },
] as const;

export function HeroDisinfectionGlass() {
  return (
    <span
      aria-hidden="true"
      className="relative hidden h-[0.94em] w-[0.66em] shrink-0 translate-y-[0.07em] items-end justify-center align-baseline md:ml-[0.16em] md:inline-flex"
    >
      {/* Outer glow */}
      <span className="absolute inset-[-0.18em] rounded-full bg-sky-400/25 blur-[0.18em]" />
      <span className="animate-hero-glass-glow absolute inset-[-0.14em] rounded-full bg-cyan-300/20" />

      {/* Glass body */}
      <span
        className="absolute inset-x-[0.03em] bottom-0 h-[0.9em] overflow-hidden border border-sky-200/60 bg-sky-50/40 shadow-[inset_0_0.04em_0.1em_rgba(255,255,255,0.7),0_0.1em_0.25em_rgba(0,119,182,0.12)]"
        style={{ clipPath: glassClipPath }}
      >
        {/* Water */}
        <span
          className="absolute inset-x-[6%] bottom-[5%] h-[75%] overflow-hidden"
          style={{ clipPath: waterClipPath }}
        >
          {/* Water gradient */}
          <span className="absolute inset-0 bg-linear-to-b from-cyan-200/80 via-sky-300/85 to-sky-500/70" />
          <span className="absolute inset-0 bg-linear-to-r from-sky-400/20 via-transparent to-sky-400/20" />
          <span className="absolute inset-0 bg-linear-to-t from-sky-600/20 via-transparent to-transparent" />

          {/* Impurities */}
          {impurities.map((impurity, i) => (
            <span
              key={`imp-${i}`}
              className="animate-hero-glass-impurity absolute rounded-full bg-neutral-500/40"
              style={{
                left: impurity.left,
                top: impurity.top,
                width: impurity.size,
                height: impurity.size,
                animationDelay: impurity.delay,
              }}
            />
          ))}

          {/* Bubbles */}
          {bubbles.map((bubble, i) => (
            <span
              key={`bub-${i}`}
              className="animate-hero-glass-bubble absolute rounded-full border border-white/60 bg-white/30"
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

        {/* Glass highlight - left edge */}
        <span className="absolute inset-y-[8%] left-[14%] w-[0.02em] rounded-full bg-white/50" />

        {/* Animated shimmer */}
        <span className="animate-hero-glass-shimmer pointer-events-none absolute bottom-[10%] h-[65%] w-[0.08em] rounded-full bg-linear-to-b from-white/70 via-white/30 to-transparent" />
      </span>

      {/* Shadow */}
      <span className="absolute bottom-[-0.04em] h-[0.05em] w-[0.36em] rounded-full bg-sky-900/15 blur-[0.012em]" />
    </span>
  );
}
