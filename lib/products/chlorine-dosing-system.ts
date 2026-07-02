import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorineDosingSystemProduct = {
  slug: "chlorine-dosing-system",
  metadata: {
    title:
      "Electrochlorination Systems | On-Site Sodium Hypochlorite | Chlorination India",
    description:
      "INDEVICE electrochlorination systems for economical and sustainable on-site sodium hypochlorite generation. Batch and continuous electrochlorinators for swimming pools, drinking water, industrial, and wastewater applications.",
  },
  seoHeadings: [
    { level: 1, text: "Electrochlorination System Manufacturers in India" },
    { level: 2, text: "On-Site Sodium Hypochlorite Generation" },
    { level: 3, text: "Water Chlorination Systems Manufacturers" },
    { level: 4, text: "Chlorine Dosing System Manufacturers India" },
    { level: 5, text: "Chlorination System Manufacturers" },
    { level: 6, text: "Sustainable Disinfection Systems" },
  ],
  sectionHeadingId: "electrochlorination-systems",
  sectionTitle: "Electrochlorination",
  sectionTitleHighlight: "Systems",
  intro:
    "Most user-friendly, economical and sustainable disinfection system. An electrochlorinator uses electrolysis to convert salt (NaCl) and water into on-site sodium hypochlorite (NaOCl). It eliminates transporting and storing hazardous concentrated chlorine gas or commercial bleach.",
  models: [
    {
      id: "batch-type",
      heading: "Batch Type Electrochlorinators",
      imageSrc: productImage("batch-type-electrochlorinator-no-pristine.png"),
      imageAlt: "Batch type electrochlorinator system",
      imageWidth: 1188,
      imageHeight: 1324,
      descriptionPoints: [
        "These are simple to operate manual systems and the most economical.",
        "Just add the required Salt (NaCl) and water and switch on. Within the given batch time it produces Sodium Hypochlorite with the right concentration.",
        "Being manually operated, it's easy to maintain.",
        "The Solar Model uses Sunlight to operate the system in areas where grid power is scarce.",
        "**Key Benefits:**",
        "On-demand chlorine production avoids handling dangerous chemicals.",
        "Cost-effective — requires only water, salt, and electricity.",
        "Environmentally sustainable with zero toxic byproducts.",
      ],
      specs: [
        { label: "Capacity", value: "5 grams/hr to 400 grams/hr" },
        {
          label: "Applications",
          value: [
            "**Swimming pools:** Sanitizes pool water without harsh chemical handling of traditional chlorine tablets.",
            "**Drinking water:** Municipal and residential systems kill pathogens and maintain safe residual chlorine in distribution networks.",
          ],
        },
      ],
    },
    {
      id: "continuous-type",
      heading: "Continuous Type Electrochlorinators",
      imageSrc: productImage("electrochlorinator-bg-white.png"),
      imageAlt: "Continuous type electrochlorinator system",
      descriptionPoints: [
        "The system operates automatically, and requires least human intervention.",
        "Just dump the salt required for a week or a month, it takes care of itself.",
        "Provided with high quality continuous production Titanium Electrolyser.",
        "Control panel is either relay based or PLC based.",
        "Provided with Transformer / Rectifier which are Air or Oil cooled type for trouble free service.",
        "The system produces Sodium Hypochlorite as per demand.",
        "**Key Benefits:**",
        "On-demand chlorine production avoids storage.",
        "Automatic and cost-effective, does not require constant manpower.",
        "Environmentally sustainable with no toxic emission.",
      ],
      specs: [
        {
          label: "Capacity",
          value:
            "500 grams/hr to 10 kgs/hr; higher capacities are designed as per specifications.",
        },
        {
          label: "Applications",
          value: [
            "**Drinking water:** Municipal and large water treatment facilities kill pathogens and maintain safe residual chlorine in distribution networks.",
            "**Industrial:** Controls slime, algae, and biofouling in cooling towers, power plants, and other cooling applications.",
            "**Wastewater:** Disinfects final effluents and controls odours in ETPs and STPs.",
          ],
        },
      ],
    },
  ],
} satisfies ProductPage;
