"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const frame = requestAnimationFrame(() => {
      setTimeout(handleHashScroll, 100);
    });

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return null;
}
