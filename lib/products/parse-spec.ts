import type { ProductSpec } from "@/lib/products/types";

/** Parses legacy bullet strings into label + verbatim value. */
export function parseProductSpec(bullet: string): ProductSpec {
  const capacitiesMatch = bullet.match(/^For capacities\s+(.+)$/i);
  if (capacitiesMatch) {
    return { label: "Capacity", value: capacitiesMatch[1] };
  }

  const mocMatch = bullet.match(/^MOC:\s*(.+)$/i);
  if (mocMatch) {
    return { label: "MOC", value: mocMatch[1] };
  }

  const suitableMatch = bullet.match(/^Suitable for\s*[–-]?\s*:?\s*(.+)$/i);
  if (suitableMatch) {
    return { label: "Applications", value: suitableMatch[1] };
  }

  const autoFlowMatch = bullet.match(/^Auto Flow\s+(.+)$/i);
  if (autoFlowMatch) {
    return { label: "Features", value: autoFlowMatch[1] };
  }

  return { label: "Capacity", value: bullet };
}
