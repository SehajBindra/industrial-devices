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
        "**Advanced Disinfection for Superior Water Treatment**",
        "INDEVICE Chlorine Dioxide Generators produce chlorine dioxide efficiently and safely for superior water disinfection and oxidation. It eliminates bacteria, viruses, algae, biofilm, and odours while minimizing harmful disinfection by-products.",
        "On-site production uses two precursors — Sodium Chlorite (NaClO₂) and Hydrochloric Acid (HCl). Generators are available in vacuum and pressure types with manual or automatic PLC control.",
        "Reactors can be underwater or overground. Advanced controls and corrosion-resistant materials ensure safe operation, high conversion efficiency, and consistent performance.",
        "Ideal for municipal, industrial, and process water treatment — an effective, environmentally responsible solution for water quality and process safety.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
