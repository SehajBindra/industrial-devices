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
      id: "pressure-type",
      heading: "Chlorine Dioxide Generator- Pressure Type",
      imageSrc: productImage("chlorine-dioxside-generator.png"),
      imageAlt: "Chlorine dioxide generator pressure type",
      descriptionPoints: [
        "**Advanced Disinfection for Superior Water Treatment**",
        "INDEVICE Chlorine Dioxide Pressure Generators produce chlorine dioxide efficiently and safely for superior water disinfection and oxidation. It eliminates bacteria, viruses, algae, biofilm, and odours while minimizing harmful disinfection by-products.",
        "On-site production uses two precursors — Sodium Chlorite (NaClO₂) and Hydrochloric Acid (HCl). These generators use metering pumps to deliver precursors under positive pressure into the reactor. Systems can be manually controlled or automatic PLC controlled.",
        "Reactors where the precursors mix and react can be underwater or overground.",
        "Advanced controls and corrosion-resistant materials ensure safe operation, high conversion efficiency, and consistent performance.",
        "Ideal for municipal, industrial, and process water treatment — an effective, environmentally responsible solution for water quality and process safety.",
      ],
      specs: [],
    },
    {
      id: "vacuum-type",
      heading: "Chlorine Dioxide Generator- Vacuum Type",
      imageSrc: productImage(
        "chlorine-dioxide-generator-vacuum-type-bg-white.png",
      ),
      imageAlt: "Chlorine dioxide generator vacuum type",
      descriptionPoints: [
        "**Advanced Disinfection for Superior Water Treatment**",
        "INDEVICE Chlorine Dioxide Vacuum Generators produce chlorine dioxide efficiently and safely for superior water disinfection and oxidation.",
        "It eliminates bacteria, viruses, algae, biofilm, and odours while minimizing harmful disinfection by-products.",
        "On-site production uses two precursors — Sodium Chlorite (NaClO₂) and Hydrochloric Acid (HCl).",
        "These Generators use an injector to develop required vacuum to precisely suck the precursors. This reactor can be manual controlled or automatic PLC controlled.",
        "The main advantage of this type is that it eliminates the chances of any leak of the chemicals, because these chemicals are under vacuum.",
        "Reactors (Injector) where the precursors mix and react can be underwater or overground.",
        "Advanced controls and corrosion-resistant materials ensure safe operation, high conversion efficiency, and consistent performance.",
        "Ideal for municipal, industrial, and process water treatment — an effective, environmentally responsible solution for water quality and process safety.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
