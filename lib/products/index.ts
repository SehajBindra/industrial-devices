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
  "Gas Chlorinators": productPath("gas-chlorination"),
  "Vacuum Operated Chlorinators": productPath("gas-chlorination"),
  "Cylinder Mounted Chlorinators": productPath("gas-chlorination"),
  "Wall Mounted Chlorinators": productPath("gas-chlorination"),
  "Floor Mounted Chlorinators": productPath("gas-chlorination"),
  "Chlorine Vaporizers": productPath("chlorine-vaporizer"),
  "Steam Heated Vaporizers": productPath("chlorine-vaporizer"),
  "Electro Chlorination Systems": productPath("chlorine-dosing-system"),
  "Chlorine Leak Detection": productPath("safety-system"),
  "Leak Absorption Systems": productPath("safety-system"),
  "Emergency Safety Kits": productPath("safety-system"),
};

export function hrefForProductLabel(label: string): string {
  return productHrefByLabel[label] ?? "#products";
}
