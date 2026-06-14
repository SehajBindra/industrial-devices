"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="max-w-md space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Something went wrong
        </h1>
        <p className="text-sm leading-relaxed text-neutral-600">
          We could not load this page. Please try again or return to the home
          page.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
