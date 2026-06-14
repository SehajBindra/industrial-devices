import Link from "next/link";

import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found | Industrial Devices (India)",
  description:
    "The page you requested could not be found. Browse our chlorination systems and water treatment products.",
});

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="max-w-md space-y-2">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
          Page not found
        </h1>
        <p className="text-sm leading-relaxed text-neutral-600">
          The page you are looking for may have moved or no longer exists.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
