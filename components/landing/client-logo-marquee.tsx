import Image from "next/image";

import { clientLogos } from "@/lib/data";
import { cn } from "@/lib/utils";

type ClientLogoMarqueeProps = {
  className?: string;
};

export function ClientLogoMarquee({ className }: ClientLogoMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-neutral-200 bg-white py-5",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
      aria-label="Client logos"
    >
      <div className="flex w-max animate-marquee-l items-center gap-4 pr-4 will-change-transform motion-reduce:animate-none">
        {[0, 1].map((setIndex) =>
          clientLogos.map((client) => (
            <div
              key={`${client.id}-${setIndex}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white px-5 shadow-[0_12px_30px_rgba(15,23,42,0.045)] sm:h-28 sm:w-52"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={180}
                height={88}
                sizes="(max-width: 640px) 176px, 208px"
                className="max-h-16 w-auto max-w-full object-contain sm:max-h-20"
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
