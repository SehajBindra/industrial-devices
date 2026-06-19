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
  "Hot Water Heated Vaporizer": productAnchor(
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
  "Chlorine Leak Detector": productAnchor("safety-system", "leak-detector"),
  "Emergency Repair Kits": productAnchor(
    "safety-system",
    "emergency-repair-kit",
  ),
  "Chlorine Leak Absorption Systems": productAnchor(
    "safety-system",
    "leak-absorption",
  ),
  "Protective Clothing": productAnchor("safety-system", "protective-clothing"),
  "Gas Mask & Air Breathing Apparatus": productAnchor(
    "safety-system",
    "canister-gas-mask",
  ),
};

export function hrefForProductLabel(label: string): string {
  return productHrefByLabel[label] ?? "#products";
}
