import { chlorineDosingSystemProduct } from "@/lib/products/chlorine-dosing-system";
import { chlorineVaporizerProduct } from "@/lib/products/chlorine-vaporizer";
import { gasChlorinationProduct } from "@/lib/products/gas-chlorination";
import { safetySystemProduct } from "@/lib/products/safety-system";
import type { ProductPage } from "@/lib/products/types";

export const productPages = {
  "gas-chlorination": gasChlorinationProduct,
  "chlorine-vaporizer": chlorineVaporizerProduct,
  "chlorine-dosing-system": chlorineDosingSystemProduct,
  "safety-system": safetySystemProduct,
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
  return `/${slug}`;
}

/** Maps mega-menu / bento labels to product detail routes. */
export const productHrefByLabel: Partial<Record<string, string>> = {
  "Cylinder Mounted Chlorinators": productPath("gas-chlorination"),
  "Wall Mounted Chlorinators": productPath("gas-chlorination"),
  "Floor Mounted Chlorinators": productPath("gas-chlorination"),
  "Steam Heated Vaporizer": productPath("chlorine-vaporizer"),
  "Electrically Heated Vaporizer": productPath("chlorine-vaporizer"),
  "Hot Water Heated Vaporizer": productPath("chlorine-vaporizer"),
  "Chlorination System Accessories & Spares": "/#products",
  "Chlorine Dioxide Generators": "/#products",
  Electrochlorinators: productPath("chlorine-dosing-system"),
  "Chemical Dosing Systems": "/#products",
  "Chlorine Leak Detector": productPath("safety-system"),
  "Emergency Repair Kits": productPath("safety-system"),
  "Chlorine Leak Absorption Systems": productPath("safety-system"),
  "Protective Clothing": productPath("safety-system"),
  "Gas Mask & Air Breathing Apparatus": productPath("safety-system"),
};

export function hrefForProductLabel(label: string): string {
  return productHrefByLabel[label] ?? "#products";
}
