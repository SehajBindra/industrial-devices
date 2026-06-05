import { parseProductSpec } from "@/lib/products/parse-spec";
import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

const electricBullets = [
  "For capacities from 50 kgs/hr to 1000 kgs/hr.",
  "Suitable for – Cooling Water & Raw Water gas chlorination in power plants, bigger capacity Water treatment and sewage treatment plants.",
] as const;

export const chlorineVaporizerProduct = {
  slug: "chlorine-vaporizer",
  metadata: {
    title:
      "Chlorine Vaporizer | Chlorine Evaporator | Chlorine doser in India | Delhi",
    description:
      "Chlorine vaporizer and evaporator manufacturers in India. Electrically heated and steam heated vaporizers for high-capacity gas chlorination in power plants, water treatment, and pulp mills.",
  },
  seoHeadings: [
    { level: 1, text: "Chlorine Vaporizer Manufacturers in India" },
    { level: 2, text: "Water Chlorination Systems Manufacturers" },
    { level: 3, text: "Chlorine Doser" },
    { level: 4, text: "Chlorine Evaporator" },
    { level: 5, text: "Vacuum Chlorinator" },
    { level: 6, text: "Leak Absorption" },
  ],
  sectionHeadingId: "chlorine-vaporizer-models",
  sectionTitle: "Chlorine vaporizer",
  sectionTitleHighlight: "models",
  intro:
    "As per International Specification it is not safe to manifold more than 5 tonners together. Hence to meet the requirement of more than 50 Kg/Hr we recommend an electrically heated or steam heated evaporator. Using these evaporators we can draw liquid chlorine from chlorine ton containers and convert it into gas chlorine.",
  models: [
    {
      id: "electrically-heated",
      heading: "Electrically Heated Vaporizer",
      imageSrc: productImage("gas-chlorination-system-with-vaporiser.jpg"),
      imageAlt: "Electrically heated chlorine vaporizer",
      descriptionPoints: [
        "The evaporator or vaporizer is used where chlorine requirement is large in quantity. We offer electrically heated evaporator up to a capacity of 1000 kg/hr.",
        "The material used for the evaporator is of very good quality and is highly resistant to chlorine corrosion. The design of the evaporator and its accessories ensure safe and accurate operation.",
        "The evaporator is designed and fabricated to meet the standards of The Chlorine Institute Inc. The electrically heated evaporator incorporates inter locks for level and temperature controls.",
      ],
      specs: electricBullets.map(parseProductSpec),
    },
    {
      id: "steam-heated",
      heading: "Steam Heated Vaporizer",
      imageSrc: productImage("filter.jpg"),
      imageAlt: "Steam heated chlorine vaporizer",
      descriptionPoints: [
        "Chlorine Vaporizer can also be powered by steam. Steam is abundantly available in Paper & Pulp Mills, where steam is used to evaporate liquid Chlorine to form gas Chlorine.",
        "A temperature controller opens or closes a steam valve, thus maintaining a constant temperature in the steam chamber.",
      ],
      specs: [
        {
          label: "Applications",
          value:
            "Paper and pulp mills and other facilities with abundant process steam.",
        },
      ],
    },
  ],
} satisfies ProductPage;
