import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorineDioxideGeneratorProduct = {
  slug: "chlorine-dioxide-generator",
  metadata: {
    title:
      "Chlorine Dioxide Generator | Chlorine Dioxide Systems | INDEVICE India",
    description:
      "INDEVICE chlorine dioxide generators for superior water disinfection and oxidation. On-site production using sodium chlorite and hydrochloric acid for municipal, industrial, and process water treatment.",
  },
  seoHeadings: [
    { level: 1, text: "Chlorine Dioxide Generator Manufacturers in India" },
    { level: 2, text: "Chlorine Dioxide Systems" },
    { level: 3, text: "Water Disinfection Systems" },
    { level: 4, text: "On-Site Chlorine Dioxide Production" },
    { level: 5, text: "Vacuum Type Chlorine Dioxide Generator" },
    { level: 6, text: "Pressure Type Chlorine Dioxide Generator" },
  ],
  sectionHeadingId: "chlorine-dioxide-generator",
  sectionTitle: "Chlorine dioxide",
  sectionTitleHighlight: "generator",
  models: [
    {
      id: "chlorine-dioxide-generator",
      heading: "Chlorine Dioxide Generator",
      imageSrc: productImage("chlorine-dioxside-generator.png"),
      imageAlt: "Chlorine dioxide generator",
      descriptionPoints: [
        "Advanced Disinfection for Superior Water Treatment",
        "The INDEVICE Chlorine Dioxide Generator is designed to produce chlorine dioxide efficiently and safely for superior water disinfection and oxidation applications. Recognized for its powerful biocidal properties, chlorine dioxide effectively eliminates bacteria, viruses, algae, biofilm, and odour-causing compounds while minimizing the formation of harmful disinfection by-products.",
        "Engineered for reliable and precise dosing, the generator delivers on-site chlorine dioxide production, using two precursors , Sodium Chlorite (NaClO2) and Hydrochloric Acid (HCl).",
        "The generators are available in Vacuum Type and Pressure Type with Manual or Automatic PLC control. The reactor can either be underwater or overground.",
        "Built with advanced control systems and high-quality corrosion-resistant materials, the unit ensures safe operation, high conversion efficiency, and consistent performance across varying treatment requirements.",
        "Ideal for municipal, industrial, and process water treatment applications, the Chlorine Dioxide Generator provides an effective and environmentally responsible solution for maintaining water quality and process safety.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
