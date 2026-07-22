"use client";

import { useEffect } from "react";

function isImageTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest("img, picture, [data-protect-image], .protect-image"),
  );
}

/** Blocks right-click and drag-to-save on images. */
export function ImageProtection() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      if (isImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    const onDragStart = (event: DragEvent) => {
      if (isImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu, true);
    document.addEventListener("dragstart", onDragStart, true);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu, true);
      document.removeEventListener("dragstart", onDragStart, true);
    };
  }, []);

  return null;
}
