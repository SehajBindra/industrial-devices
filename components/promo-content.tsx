"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
          <Image
            src="/product/IDI LOGO.JPG"
            alt="Industrial Devices (India) logo"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-foreground/90">
              Industrial Devices
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Gas chlorination systems & water treatment equipment.
            </p>
          </div>
          <Link
            href="/request-quote"
            className="text-xs font-medium text-primary hover:text-primary/80"
            onClick={(event) => event.stopPropagation()}
          >
            Learn more
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("rounded-lg border border-border bg-card p-4", className)}
    >
      <div className="flex flex-col gap-4">
        <Image
          src="/product/IDI LOGO.JPG"
          alt="Industrial Devices (India) logo"
          width={320}
          height={160}
          className="h-40 w-full rounded-md object-cover"
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
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
