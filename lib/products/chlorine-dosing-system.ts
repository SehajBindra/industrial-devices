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
        "Most user-friendly economical and sustainable disinfection system",
        "An electrochlorinator is a water treatment device that uses electrolysis to convert ordinary salt (NaCl) and water into a powerful, on-site disinfectant known as sodium hypochlorite (NaOCl). It eliminates the need to transport and store hazardous, concentrated chlorine gas or commercial bleach.",
        "The Process: A mixture of saltwater (brine) or seawater is passed through an electrolytic cell. Direct electrical current (DC) forces a chemical reaction that generates sodium hypochlorite and hydrogen gas. The hydrogen gas is safely ventilated out, leaving a diluted, safe hypochlorite solution ready for dosing.",
        "Key Benefits electrochlorinator is that it produces chlorine on-demand, completely avoiding the risks of handling and storing dangerous commercial chemicals, its cost-effective, it requires only basic raw materials, water, salt, and electricity. Environmentally sustainable with zero toxic byproducts",
        "Applications",
        "Swimming Pools: Safely sanitizes pool water without the harsh chemical handling of traditional chlorine tablets.",
        "Drinking Water: Used by municipalities and residential areas to kill pathogens and maintain safe residual chlorine levels in distribution networks.",
        "Industrial & Marine: Controls slime, algae, and biofouling in cooling towers, power plants, and shipboard ballast water tanks.",
        "Wastewater: Disinfects final effluents and controls odours.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
