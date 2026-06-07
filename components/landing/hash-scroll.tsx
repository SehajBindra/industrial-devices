"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => scrollToHash(window.location.hash);

    const frame = requestAnimationFrame(run);
    window.addEventListener("hashchange", run);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", run);
    };
  }, [pathname]);

  return null;
}
