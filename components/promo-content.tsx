/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import Link from "next/link";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/product/IDI LOGO.JPG"
            alt="Magic UI"
            className="w-8 h-8 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
              Industrial Devices
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Gas chlorination systems & water treatment equipment.
            </p>
          </div>
          <a
            href="#"
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(event) => event.stopPropagation()}
          >
            Learn more
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/product/IDI LOGO.JPG"
          alt="Magic UI"
          className="w-full h-40 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Industrial Devices
          </h3>
          <p className="text-sm text-muted-foreground">
            Gas chlorination systems & water treatment equipment.
          </p>
          <Link
            href="/request-quote"
            className="text-xs text-primary hover:text-primary/80 font-medium"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
