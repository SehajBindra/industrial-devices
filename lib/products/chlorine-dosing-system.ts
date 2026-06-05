import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorineDosingSystemProduct = {
  slug: "chlorine-dosing-system",
  metadata: {
    title:
      "Chlorine Dosing System Manufacturers | Chlorine Doser | Chlorination India",
    description:
      "Water chlorination systems and on-site sodium hypochlorite generation. Electrochlorinator systems for municipal and industrial disinfection across India.",
  },
  seoHeadings: [
    { level: 1, text: "Water Chlorination Systems Manufacturers in India" },
    { level: 2, text: "Chlorine Dosing System Manufacturers India" },
    { level: 3, text: "Chlorine Vaporizer" },
    { level: 4, text: "Gas Chlorinator India" },
    { level: 5, text: "Chlorination System Manufacturers" },
    { level: 6, text: "Chlorine Leak Absorption system" },
  ],
  sectionHeadingId: "chlorine-dosing-system-models",
  sectionTitle: "Electrolytic chlorination",
  sectionTitleHighlight: "systems",
  models: [
    {
      id: "on-site-hypo",
      heading: "On-Site Sodium Hypochlorite Generation",
      imageSrc: productImage("gas-chlorination-system-with-vaporiser.jpg"),
      imageAlt: "On-site sodium hypochlorite generation system",
      descriptionPoints: [
        "Requires only salt, water and electricity.",
        "Provides the power of chlorine without the danger of storing or handling hazardous materials.",
        "Sodium hypochlorite generated on-site does not degrade like commercial sodium hypochlorite.",
        "The total operating cost is less than conventional chlorination methods.",
        "On-site generation allows operators to produce only what is needed, when it is needed.",
        "Induclor Electrochlorinator is a cost-effective disinfection alternative for small water systems.",
        "It is easy to produce and eliminates dangerous handling and storage problems.",
        "Unlike conventional 12–15% purchased hypochlorite, on-site generation maintains its strength.",
        "Solar grade salt is dissolved in water to form a concentrated brine solution.",
        "The brine is diluted and passed through an electrolytic cell.",
        "Electrolysis converts salt and water to sodium hypochlorite: NaCl + H₂O + 2e → NaOCl + H₂.",
        "1 kg of equivalent chlorine requires 4.5 kg of salt and 4 kWh of electricity (AC).",
        "The final solution is approximately 0.8% sodium hypochlorite.",
      ],
      specs: [],
    },
    {
      id: "available-models",
      heading: "Available Models",
      imageSrc: "/client-list/gas-chlorinator-dual-pt.webp",
      imageAlt: "Indichlor electrochlorination skid",
      descriptionPoints: [
        "Indichlor 100 is a batch process system that is simple to operate and maintain.",
        "In eight hours it produces approximately 1.3 kg of active chlorine.",
        "140 liters of water and 4.5 kg of salt are added to the brine tank.",
        "The portable electrolyzer is placed inside the tank and the power supply is switched on.",
        "A timer on the power supply panel is set to 8 hours or as required.",
        "An electronic pump is provided to dose the hypochlorite.",
        "The electrolyzer can be cleaned easily by dipping it in a mild acid solution.",
        "Indichlor 500, 1000 and 2000 are continuous process systems.",
        "They contain all equipment required for continuous production of 8% sodium hypochlorite.",
        "Saturated salt solution (~30% sodium chloride) is diluted with water via a rotameter.",
        "Salt solution is diluted to 3% concentration and fed into the electrolyzer.",
        "In the electrolyzer chamber, the salt solution is converted to sodium hypochlorite.",
        "A cooler dissipates heat generated during the process.",
        "Sodium hypochlorite is stored in a tank and transported to the dosing point by a metering pump.",
      ],
      specs: [
        {
          label: "Models",
          value: "Indichlor 100 (batch), Indichlor 500, 1000, and 2000 (continuous).",
        },
      ],
    },
  ],
} satisfies ProductPage;
