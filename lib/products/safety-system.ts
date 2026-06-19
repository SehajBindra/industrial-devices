import { productImage } from "@/lib/products/site-images";
import type { ProductModel, ProductPage } from "@/lib/products/types";

const safetyModels = [
  {
    id: "leak-absorption",
    heading: "Leak Absorption System",
    imageSrc: productImage("leak-absorption-system.jpg"),
    imageAlt: "Chlorine leak absorption system",
    descriptionPoints: [
      "The INDEVICE Leak Absorption System is designed to safely neutralize chlorine gas released during accidental leaks. The system effectively absorbs and scrubs chlorine gas before it is discharged into the atmosphere, ensuring personnel safety, environmental protection, and compliance with safety standards.",
    ],
    specs: [],
  },
  {
    id: "full-tonner-hood",
    heading: "Full Tonner Hood",
    imageSrc: productImage("tonner-full-hood.jpg"),
    imageAlt: "Full tonner hood for chlorine container leak containment",
    descriptionPoints: [
      "The Full Tonner Hood provides complete enclosure of a one-ton chlorine container during emergency leak situations. Connected to a leak absorption system, it safely contains and directs escaping chlorine gas for neutralization, minimizing risk to personnel and surrounding areas.",
    ],
    specs: [],
  },
  {
    id: "frontal-tonner-hood",
    heading: "Frontal Tonner Hood",
    imageSrc: productImage("tonner-full-hood.jpg"),
    imageAlt: "Frontal tonner hood covering chlorine container valve assembly",
    descriptionPoints: [
      "The Frontal Tonner Hood is designed to cover the valve and header assembly of chlorine ton containers, where most leaks typically occur. It provides a quick and effective solution for containing leaks while allowing easy installation during emergency situations.",
    ],
    specs: [],
  },
  {
    id: "leak-detector",
    heading: "Chlorine Leak Detector",
    imageSrc: productImage("chlorine-leak-detector.png"),
    imageAlt: "Chlorine leak detector with audible and visual alarms",
    descriptionPoints: [
      "The INDEVICE Chlorine Leak Detector continuously monitors ambient air for the presence of chlorine gas, providing early warning through audible and visual alarms. Designed for high sensitivity and reliability, it enhances plant safety by enabling rapid response to chlorine leaks.",
    ],
    specs: [],
  },
  {
    id: "emergency-repair-kit-tonners",
    heading: "Emergency Repair Kit for Tonners",
    imageSrc: productImage("emergency-tonner-repair-kit.jpg"),
    imageAlt: "Emergency repair kit for one-ton chlorine containers",
    descriptionPoints: [
      "The Emergency Repair Kit for Tonners is designed to temporarily seal leaks from one-ton chlorine containers. Manufactured in accordance with industry standards, the kit includes specialized tools and sealing devices for quick and safe emergency leak control.",
    ],
    specs: [],
  },
  {
    id: "emergency-repair-kit-cylinders",
    heading: "Emergency Repair Kit for Cylinders",
    imageSrc: productImage("emergency-tonner-repair-kit.jpg"),
    imageAlt: "Emergency repair kit for standard chlorine cylinders",
    descriptionPoints: [
      "The Emergency Repair Kit for Cylinders enables rapid containment of leaks from standard chlorine cylinders. The kit includes purpose-built clamps, gaskets, and accessories to safely control valve and container leaks until permanent repairs can be carried out.",
    ],
    specs: [],
  },
  {
    id: "breathing-apparatus",
    heading: "Self-Contained Breathing Apparatus (SCBA)",
    imageSrc: productImage("self-contained-air-breathing-apperatus.png"),
    imageAlt: "Self-contained breathing apparatus for chlorine-contaminated areas",
    descriptionPoints: [
      "The Self-Contained Breathing Apparatus (SCBA) provides a continuous supply of breathable air, enabling personnel to safely enter chlorine-contaminated areas during maintenance and emergency response. Lightweight, durable, and ergonomically designed, it offers maximum protection in hazardous environments.",
    ],
    specs: [],
  },
  {
    id: "eyewash-shower",
    heading: "Emergency Eye Wash & Safety Shower",
    imageSrc: productImage("leak-detection-safety-bg-white.png"),
    imageAlt: "Emergency eye wash and safety shower unit",
    descriptionPoints: [
      "The Emergency Eye Wash and Safety Shower provides immediate decontamination following accidental exposure to chlorine or hazardous chemicals. Designed for rapid activation, it delivers a continuous flow of clean water to minimize injury and ensure workplace safety.",
    ],
    specs: [],
  },
  {
    id: "instant-resuscitator",
    heading: "Instant Resuscitator",
    imageSrc: productImage("resus.png"),
    imageAlt: "Instant resuscitator for emergency oxygen delivery",
    descriptionPoints: [
      "The Instant Resuscitator is an emergency oxygen delivery system designed to provide immediate respiratory support to personnel affected by chlorine gas exposure. Compact and easy to operate, it is an essential component of any chlorine safety program.",
    ],
    specs: [],
  },
  {
    id: "canister-gas-mask",
    heading: "Canister Type Gas Mask",
    imageSrc: productImage("gas-mask.png"),
    imageAlt: "Canister type gas mask for chlorine vapour protection",
    descriptionPoints: [
      "The Canister Type Gas Mask offers reliable respiratory protection against low concentrations of chlorine gas and other hazardous vapours. Equipped with a replaceable chemical canister, it is ideal for inspection, maintenance, and emergency preparedness applications.",
    ],
    specs: [],
  },
  {
    id: "protective-clothing",
    heading: "Protective Clothing",
    imageSrc: productImage("protective-clothing.png"),
    imageAlt: "Chemical protective clothing for chlorine handling",
    descriptionPoints: [
      "Our Chemical Protective Clothing is specially designed to safeguard personnel handling chlorine and other hazardous chemicals. Manufactured from chemical-resistant materials, the protective suits provide excellent resistance to chemical splashes while ensuring comfort, flexibility, and durability during operation.",
    ],
    specs: [],
  },
] as const satisfies readonly ProductModel[];

export const safetySystemProduct = {
  slug: "safety-system",
  metadata: {
    title:
      "Chlorine Safety Systems | Leak Absorption | Leak Detectors | SCBA",
    description:
      "INDEVICE chlorine safety systems including leak absorption, tonner hoods, leak detectors, emergency repair kits, SCBA, and protective equipment.",
  },
  seoHeadings: [
    { level: 1, text: "Chlorine Safety Systems Manufacturers in India" },
    { level: 2, text: "Leak Absorption System" },
    { level: 3, text: "Chlorine Leak Detector" },
    { level: 4, text: "Emergency Repair Kits" },
    { level: 5, text: "Self-Contained Breathing Apparatus" },
    { level: 6, text: "Protective Clothing" },
  ],
  sectionHeadingId: "safety-system-equipment",
  sectionTitle: "Safety",
  sectionTitleHighlight: "systems",
  models: safetyModels,
} satisfies ProductPage;
