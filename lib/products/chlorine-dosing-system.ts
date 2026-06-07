import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorineDosingSystemProduct = {
  slug: "chlorine-dosing-system",
  metadata: {
    title:
      "Electrochlorinator | On-Site Sodium Hypochlorite | Chlorination India",
    description:
      "INDEVICE electrochlorinator systems for economical and sustainable on-site sodium hypochlorite generation. User-friendly disinfection for swimming pools, drinking water, industrial, marine, and wastewater applications.",
  },
  seoHeadings: [
    { level: 1, text: "Electrochlorinator Manufacturers in India" },
    { level: 2, text: "On-Site Sodium Hypochlorite Generation" },
    { level: 3, text: "Water Chlorination Systems Manufacturers" },
    { level: 4, text: "Chlorine Dosing System Manufacturers India" },
    { level: 5, text: "Chlorination System Manufacturers" },
    { level: 6, text: "Sustainable Disinfection Systems" },
  ],
  sectionHeadingId: "electrochlorinator",
  sectionTitle: "Electrochlorinator",
  sectionTitleHighlight: "systems",
  models: [
    {
      id: "electrochlorinator",
      heading: "Electrochlorinator",
      imageSrc: "/client-list/gas-chlorinator-dual-pt.webp",
      imageAlt: "Electrochlorinator system",
      descriptionPoints: [
        "**Most user-friendly, economical and sustainable disinfection system**",
        "An electrochlorinator uses electrolysis to convert salt (NaCl) and water into on-site sodium hypochlorite (NaOCl). It eliminates transporting and storing hazardous concentrated chlorine gas or commercial bleach.",
        "**The Process:** Saltwater or seawater passes through an electrolytic cell. DC current generates sodium hypochlorite and hydrogen gas, which is safely vented, leaving a diluted solution ready for dosing.",
        "**Key Benefits:** On-demand chlorine production avoids handling dangerous chemicals. Cost-effective — requires only water, salt, and electricity. Environmentally sustainable with zero toxic byproducts.",
        "**Applications**",
        "**Swimming Pools** — Sanitizes pool water without harsh chemical handling of traditional chlorine tablets.",
        "**Drinking Water** — Municipal and residential systems kill pathogens and maintain safe residual chlorine in distribution networks.",
        "**Industrial & Marine** — Controls slime, algae, and biofouling in cooling towers, power plants, and shipboard ballast water tanks.",
        "**Wastewater** — Disinfects final effluents and controls odours.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
