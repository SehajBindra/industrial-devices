import { legacyUpload } from "@/lib/products/site-images";
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
      imageSrc: legacyUpload("Sodium%20Hypochlorite%20Generation.jpg"),
      imageAlt: "On-site sodium hypochlorite generation system",
      descriptionPoints: [
        "Requires only salt, water and electricity.",
        "Provides the power of chlorine without the danger of storing or handling hazardous materials.",
        "Sodium hypochlorite generated on-site does not degrade like commercial sodium hypochlorite.",
        "The total operating cost is less than conventional Chlorination methods.",
        "On-site generation of sodium hypochlorite allows the operator to produce only what is needed and when it is needed.",
        "Induclor Electrochlorinator is a dis-infection alternative that small water systems will find beneficial because it is cost-effective, easy to produce and eliminates potentially dangerous handling and storage problems associated with other types of dis-infection practices.",
        "On-site sodium Hypochlorite (NaOCL) generation requires only salt, water and electricity to produce sodium hypochlorite actually needed. Unlike conventional 12 to 15 percent purchased hypochlorite, which will degrade over time, sodium Hypochlorite generated on-site will maintain its strength.",
        "The process of generating sodium hypochlorite involves dissolving solar grade salt with water to form a concentrated brine solution. The concentrated brine solution is then diluted and passed through an electrolytic cell where electrolysis takes place: NaCL (salt) + H2O (water) + 2e → NaOCL (Hypo) + Hydrogen.",
        "In the process of on-site sodium hypochlorite generation 1 kg of equivalent chlorine can be generated from 4.5 kg of salt and 4 kilowatt hours of electricity (AC). The final solution consists of approximately 0.8 percent sodium hypochlorite.",
      ],
      specs: [],
    },
    {
      id: "available-models",
      heading: "Available Models",
      imageSrc: "/client-list/gas-chlorinator-dual-pt.webp",
      imageAlt: "Indichlor electrochlorination skid",
      descriptionPoints: [
        "Batch Process Model: Indichlor 100 is a batch process system. This is very simple to operate and maintain. In eight hours the system produces approximately 1.3 kgs of active chlorine. 140 liters of water is filled in the brine tank and 4.5 kgs of salt is dissolved. The portable electrolyzer is placed inside the tank and the power supply is switched on. The power supply panel is provided with a timer which is set at 8 hour or as required. After the present time the system stops after productivity required quantity of sodium hypochlorite. A electronic pump is provided to dose the hypo. The electorlyzer can be cleared easily by dipping it is a mild acid solution.",
        "Continuous Process: Indichlor 500, 1000 and 2000 are a continuous process system. The system contains all the equipment required for continuous production of 8% sodium hypochlorite. Saturated salt solution having nearly 30% of sodium chlorite is diluted by water flowing through a rotameter. Salt solution is diluted to a concentration of 3% and fed into the electrolyzer. In the electrolyzer chamber the salt solution gets converted to sodium hypochlorite.",
        "During the process some heat is generated. A cooler is provided to dissipate the heat. Sodium Hypochlorite is then stored in a tank. A metering pump is used to transport the hypo to the dosing point.",
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
