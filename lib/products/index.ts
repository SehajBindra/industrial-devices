import { chlorinationAccessoriesProduct } from "@/lib/products/chlorination-accessories";
import { chemicalDosingSystemProduct } from "@/lib/products/chemical-dosing-system";
import { chlorineDioxideGeneratorProduct } from "@/lib/products/chlorine-dioxide-generator";
import { chlorineDosingSystemProduct } from "@/lib/products/chlorine-dosing-system";
import { chlorineVaporizerProduct } from "@/lib/products/chlorine-vaporizer";
import { gasChlorinationProduct } from "@/lib/products/gas-chlorination";
import { safetySystemProduct } from "@/lib/products/safety-system";
import type { ProductPage } from "@/lib/products/types";

export const productPages = {
  "gas-chlorination": gasChlorinationProduct,
  "chlorine-vaporizer": chlorineVaporizerProduct,
  "chlorine-dioxide-generator": chlorineDioxideGeneratorProduct,
  "chlorine-dosing-system": chlorineDosingSystemProduct,
  "chemical-dosing-system": chemicalDosingSystemProduct,
  "safety-system": safetySystemProduct,
  "chlorination-accessories": chlorinationAccessoriesProduct,
} as const satisfies Record<string, ProductPage>;

export type ProductSlug = keyof typeof productPages;

export const productSlugs = Object.keys(productPages) as ProductSlug[];

export function getProductPage(slug: string): ProductPage | undefined {
  if (slug in productPages) {
    return productPages[slug as ProductSlug];
  }
  return undefined;
}

export function productPath(slug: ProductSlug): string {
  return `/product/${slug}`;
}

function productAnchor(slug: ProductSlug, anchor: string): string {
  return `${productPath(slug)}#${anchor}`;
}

/** Maps mega-menu / bento labels to product detail routes. */
export const productHrefByLabel: Partial<Record<string, string>> = {
  "Cylinder/ Tonner Mounted Chlorinators": productAnchor(
    "gas-chlorination",
    "cylinder-tonner",
  ),
  "Wall Mounted Chlorinators": productAnchor(
    "gas-chlorination",
    "wall-mounted",
  ),
  "Floor Mounted Vacuum Chlorinator": productAnchor(
    "gas-chlorination",
    "floor-mounted",
  ),
  "Steam Heated Vaporizer": productAnchor("chlorine-vaporizer", "steam-heated"),
  "Electrically Heated Vaporizer": productAnchor(
    "chlorine-vaporizer",
    "electrically-heated",
  ),
  "Hot Water Circulated Vaporizer": productAnchor(
    "chlorine-vaporizer",
    "hot-water-heated",
  ),
  "Chlorination System Accessories & Spares": productPath(
    "chlorination-accessories",
  ),
  "Chlorine Dioxide Generators": productAnchor(
    "chlorine-dioxide-generator",
    "pressure-type",
  ),
  Electrochlorinators: productAnchor(
    "chlorine-dosing-system",
    "batch-type",
  ),
  "Chemical Dosing Systems": productPath("chemical-dosing-system"),
  "Leak Absorption System": productAnchor("safety-system", "leak-absorption"),
  "Full Tonner Hood": productAnchor("safety-system", "full-tonner-hood"),
  "Frontal Tonner Hood": productAnchor("safety-system", "frontal-tonner-hood"),
  "Chlorine Leak Detector": productAnchor("safety-system", "leak-detector"),
  "Emergency Repair Kit for Tonners": productAnchor(
    "safety-system",
    "emergency-repair-kit-tonners",
  ),
  "Emergency Repair Kit for Cylinders": productAnchor(
    "safety-system",
    "emergency-repair-kit-cylinders",
  ),
  "Self-Contained Breathing Apparatus (SCBA)": productAnchor(
    "safety-system",
    "breathing-apparatus",
  ),
  "Emergency Eye Wash & Safety Shower": productAnchor(
    "safety-system",
    "eyewash-shower",
  ),
  "Instant Manual Resuscitator": productAnchor(
    "safety-system",
    "instant-resuscitator",
  ),
  "Canister Type Gas Mask": productAnchor(
    "safety-system",
    "canister-gas-mask",
  ),
  "Protective Clothing": productAnchor("safety-system", "protective-clothing"),
  "Auxiliary Container Valve": productAnchor(
    "chlorination-accessories",
    "auxiliary-container-valve",
  ),
  "Flexible Copper Connector": productAnchor(
    "chlorination-accessories",
    "flexible-copper-connector",
  ),
  "Manifold Valve": productAnchor(
    "chlorination-accessories",
    "chlorine-gas-manifold",
  ),
  "Gas Filter": productAnchor(
    "chlorination-accessories",
    "chlorine-gas-filter",
  ),
  "Pressure Reducing Valve": productAnchor(
    "chlorination-accessories",
    "pressure-reducing-valve",
  ),
  "Pressure Gauge": productAnchor(
    "chlorination-accessories",
    "pressure-gauge",
  ),
  "Ball Valve": productAnchor(
    "chlorination-accessories",
    "chlorine-ball-valve",
  ),
  "Motorized Valve": productAnchor(
    "chlorination-accessories",
    "motorized-ball-valve",
  ),
  "Trunnion Roller Support": productAnchor(
    "chlorination-accessories",
    "trunnion-roller-support",
  ),
  "Lifting Beam": productAnchor("chlorination-accessories", "lifting-beam"),
  "Load Indicator": productAnchor("chlorination-accessories", "load-indicator"),
  "Residual Chlorine Analyzer": productAnchor(
    "chlorination-accessories",
    "online-residual-chlorine-analyzer",
  ),
};

export function hrefForProductLabel(label: string): string {
  return productHrefByLabel[label] ?? "#products";
}
