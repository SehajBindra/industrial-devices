import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const safetySystemProduct = {
  slug: "safety-system",
  metadata: {
    title:
      "Chlorine Leak Detector | Emergency Repair Kit | Pressure Reducing Valve",
    description:
      "Chlorine safety systems including leak absorption, leak detectors, emergency repair kits, breathing apparatus, eyewash stations, and protective equipment for gas chlorination plants.",
  },
  seoHeadings: [
    { level: 1, text: "Chlorinator Manufacturers in India" },
    { level: 2, text: "Chlorine Dosing System" },
    { level: 3, text: "Chlorine Vaporizer" },
    { level: 4, text: "Gas Chlorinator India" },
    { level: 5, text: "Chlorination System Manufacturers" },
    { level: 6, text: "Water Chlorination Systems Manufacturers" },
  ],
  sectionHeadingId: "safety-system-equipment",
  sectionTitle: "Chlorine safety",
  sectionTitleHighlight: "equipment",
  intro:
    "Gas chlorination has been the acceptable, economical and effective large scale water disinfection method since the 1920s and has been the industry standard since. In the last few years, the safety concerns regarding the handling of chlorine gas have been highlighted. As a result the chlorination industry has gone through many changes and improvements to ensure the highest safety standards and adherence to accepted safety standards.",
  models: [
    {
      id: "leak-absorption",
      heading: "Leak Absorption System",
      imageSrc: productImage("leak-absorption-system.jpg"),
      imageAlt: "Chlorine leak absorption system",
      descriptionPoints: [
        "The blower sucks leaked chlorine gas with air and delivers it to the absorption tower.",
        "The pump circulates 20% caustic solution to the top of the tower. Caustic flows down through Pall Ring packing.",
        "Chlorine gas flows up and meets caustic counter-currently in the packing area, where it is absorbed.",
        "Purified air vents from the tower top. The caustic tank includes a level indicator and dissolving basket.",
      ],
      specs: [],
    },
    {
      id: "leak-detector",
      heading: "Chlorine Leak Detector (Single and Double Sensor)",
      imageSrc: productImage("auxiliary-container-valve.png"),
      imageAlt: "Chlorine leak detector panel",
      descriptionPoints: [
        "The system consists of a control unit and a remotely mounted sensor that detects gas in the room.",
        "Gas concentration is indicated on the panel with audio-visual alarm.",
        "A potential-free contact triggers remote alarms or actuates the exhaust fan.",
      ],
      specs: [],
    },
    {
      id: "emergency-repair-kit",
      heading: "Emergency Repair Kit",
      imageSrc: "/product/chlorine-heater-jb-skid.webp",
      imageAlt: "Chlorine emergency repair kit",
      descriptionPoints: [
        "Devices to stop leakage at the valve and from the wall of the chlorine container.",
        "Includes a canister-type gas mask, protective clothing, tools, gaskets, and a step-by-step instruction booklet.",
      ],
      specs: [],
    },
    {
      id: "breathing-apparatus",
      heading: "Self Contained Compressed Air Breathing Apparatus",
      imageSrc: productImage("tonner-full-hood.jpg"),
      imageAlt: "Self contained compressed air breathing apparatus",
      descriptionPoints: [
        "Essential for heavy toxic leaks. Manufactured as per IS: 10245, Part-II.",
        "Available in 30-minute or 45-minute duration with all test certificates.",
      ],
      specs: [],
    },
    {
      id: "eyewash-shower",
      heading: "Emergency Eye Wash and Shower",
      imageSrc: productImage("filter.jpg"),
      imageAlt: "Emergency eye wash and shower unit",
      descriptionPoints: [
        "Hand-operated or pedal-operated combination units protect eyes, face, and skin from chlorine contact.",
        "Deluge of water dilutes and washes away harmful material, preventing vision loss and burn injuries.",
        "ISI marked and conforms to IS: 10592 and ANSI Z 358.1-2009.",
      ],
      specs: [],
    },
    {
      id: "canister-gas-mask",
      heading: "Canister Gas Mask",
      imageSrc: productImage("tonner-full-hood.jpg"),
      imageAlt: "Canister gas mask for chlorine leaks",
      descriptionPoints: [
        "Enables the wearer to breathe fresh air in a contaminated atmosphere. Applicable for small leaks only.",
        "Exclusive design conforming to IS: 8523 : 1977. Includes airtight face piece, breathing tube, and colour-coded canister.",
        "Must never be used in atmospheres containing less than 16% oxygen.",
      ],
      specs: [],
    },
    {
      id: "air-resuscitator",
      heading: "Instant Air Resuscitator",
      imageSrc: productImage("filter.jpg"),
      imageAlt: "Instant air resuscitator",
      descriptionPoints: [
        "Required when toxic fume inhalation, electric shock, cardiac arrest, or excessive bleeding affects the central nervous system.",
        "An intermittent positive pressure respirator provides emergency relief. Portable and easy to use.",
        "Manufactured as per IS: 13366 : 1992 specifications.",
      ],
      specs: [],
    },
    {
      id: "protective-clothing",
      heading: "Protective Clothing",
      imageSrc: productImage("tonner-full-hood.jpg"),
      imageAlt: "Chlorine protective clothing set",
      descriptionPoints: [
        "Includes full face masks, PVC suit, PVC gloves, gum boots, safety helmet, and goggles.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
