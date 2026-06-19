import { HeroCtaButtons } from "@/components/landing/hero-cta-buttons";
import { HeroDisinfectionGlass } from "@/components/landing/hero-disinfection-glass";
import { HeroSafariCarousel } from "@/components/landing/hero-safari-carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-neutral-200 bg-white px-4 pt-40 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden min-h-0 w-[min(62%,38rem)] md:block lg:w-[min(56%,42rem)]"
        aria-hidden
      >
        <DottedGlowBackground
          className="[mask-image:linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.12)_18%,rgba(255,255,255,0.55)_48%,white_72%),radial-gradient(ellipse_110%_100%_at_78%_38%,white_0%,white_42%,transparent_78%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.12)_18%,rgba(255,255,255,0.55)_48%,white_72%),radial-gradient(ellipse_110%_100%_at_78%_38%,white_0%,white_42%,transparent_78%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
          colorLightVar="--color-sky-300"
          glowColorLightVar="--color-sky-500"
          colorDarkVar="--color-sky-300"
          glowColorDarkVar="--color-sky-400"
          color="rgb(125 211 252)"
          glowColor="rgb(14 165 233)"
          opacity={2.4}
          gap={8}
          radius={1.7}
          backgroundOpacity={0.07}
          speedMin={0.35}
          speedMax={1.45}
          speedScale={1}
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <div className="max-w-5xl">
          <BlurFade
            delay={0.25}
            inView
            direction="up"
            blur="28px"
            duration={0.8}
            className="w-full"
          >
            <h1 className="text-balance text-5xl tracking-tight text-neutral-800 sm:text-6xl sm:leading-[1.08] lg:text-7xl lg:leading-[1.05]">
              Gas chlorination systems &{" "}
              <span className="text-primary">water </span>
              <span className="inline-flex items-baseline">
                <span className="text-primary">treatment</span>
                <HeroDisinfectionGlass />
              </span>{" "}
              equipment.
            </h1>
          </BlurFade>
          <BlurFade
            delay={0.25 * 2}
            inView
            direction="up"
            blur="24px"
            duration={1}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            <p>
              Welcome to Industrial Devices (India) Pvt. Ltd., a trusted Indian
              manufacturer of gas chlorination systems, chlorine dosing
              equipment, gas chlorine safety systems, and water treatment
              solutions for municipal, industrial, and process applications.
            </p>
          </BlurFade>
          <BlurFade
            delay={0.25 * 3}
            inView
            direction="up"
            blur="20px"
            duration={0.8}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <HeroCtaButtons />
          </BlurFade>
        </div>
        <BlurFade
          delay={0.25 * 4}
          inView
          direction="up"
          blur="24px"
          duration={1}
          className="mx-auto mt-14 w-full max-w-[1203px]"
        >
          <HeroSafariCarousel />
        </BlurFade>
      </div>
      {/* <HeroClientGrid /> */}
    </section>
  );
}
