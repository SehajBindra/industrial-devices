import { legacyUpload } from "@/lib/products/site-images";
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
      imageSrc: legacyUpload("LEAK%20ABSORPTION%20SYSTEM.jpg"),
      imageAlt: "Chlorine leak absorption system",
      descriptionPoints: [
        "The blower shall suck the leaked chlorine gas along with air and deliver the same to the Absorption Tower.",
        "The Pump shall pump the 20% caustic solution to the top of the Tower. The caustic flows down through the Pall Ring dumped packing.",
        "The chlorine gas that flows up, meets the caustic counter-currently in the packing area. Chlorine is absorbed in this process.",
        "Air without Chlorine gas passes to the top of the tower and is vented out. The caustic tank is provided with Level Indicator, calibrated for caustic and a Dissolving Basket.",
      ],
      specs: [],
    },
    {
      id: "leak-detector",
      heading: "Chlorine Leak Detector (Single and Double Sensor)",
      imageSrc: legacyUpload("Chlorine%20Leak%20Detector%20Double.jpg"),
      imageAlt: "Chlorine leak detector panel",
      descriptionPoints: [
        "The Chlorine leak detection system consists of a control unit and a sensor.",
        "The Sensor mounted remotely senses the gas present in the room, which is indicated on the panel.",
        "Apart from the audio visual alarm present in the panel, there is a potential free contact which can be used to trigger a remote alarm or actuate the exhaust fan.",
      ],
      specs: [],
    },
    {
      id: "emergency-repair-kit",
      heading: "Emergency Repair Kit",
      imageSrc: "/client-list/chlorine-heater-jb-skid.webp",
      imageAlt: "Chlorine emergency repair kit",
      descriptionPoints: [
        "Our kit has devices to stop leakage at the valve and from the wall of the chlorine container.",
        "The kit contains a canister type gas mask, protective clothing, necessary tools and tackles, gaskets, etc.",
        "A step by step instruction booklet is provided with the kit.",
      ],
      specs: [],
    },
    {
      id: "breathing-apparatus",
      heading: "Self Contained Compressed Air Breathing Apparatus",
      imageSrc: legacyUpload(
        "Self%20Contained%20Compressed%20Air%20breathing%20apparatus.jpg",
      ),
      imageAlt: "Self contained compressed air breathing apparatus",
      descriptionPoints: [
        "Self-Contained Air Breathing apparatus are very essential for heavy toxic leaks.",
        "Manufactured as per IS: 10245, Part-II.",
        "Available in 30 minutes or 45 minutes duration with all Test Certificates.",
      ],
      specs: [],
    },
    {
      id: "eyewash-shower",
      heading: "Emergency Eye Wash and Shower",
      imageSrc: legacyUpload("Emergency%20eye%20wash%20and%20shower.jpg"),
      imageAlt: "Emergency eye wash and shower unit",
      descriptionPoints: [
        "Emergency Eyewash and Shower (Hand Operated or Pedal Operated - Combination units) is required to protect eye, face & skin from chlorine contacts.",
        "The deluge of water dilutes and washes away harmful material, thereby completely eradicating chances of losing vision and burn injuries.",
        "It is ISI marked and conforms to IS :10592, ANSI Z 358.12009.",
      ],
      specs: [],
    },
    {
      id: "canister-gas-mask",
      heading: "Canister Gas Mask",
      imageSrc: legacyUpload("Canister%20Gas%20mask.jpg"),
      imageAlt: "Canister gas mask for chlorine leaks",
      descriptionPoints: [
        "The Gas Mask with Canister is designed to enable the wearer to breathe fresh air in a contaminated atmosphere. These are applicable for small leaks only.",
        "The gas mask incorporates exclusive design features conforming to IS : 8523 : 1977.",
        "Canister type respirators must never be used in atmosphere containing less than 16% oxygen.",
        "It contains an airtight face piece, breathing tube and international colour coded canister.",
      ],
      specs: [],
    },
    {
      id: "air-resuscitator",
      heading: "Instant Air Resuscitator",
      imageSrc: legacyUpload("Instant%20Air%20resusitator.jpg"),
      imageAlt: "Instant air resuscitator",
      descriptionPoints: [
        "In accidents like inhalation of toxic fumes, electric shock, cardiac arrests, excessive bleeding etc., the central nervous system is profoundly and dangerously affected.",
        "At such times an Intermittent Positive Pressure Respirator is required to provide emergency relief.",
        "Resuscitators are Portable, Easy to use, manufactured as per IS : 13366 : 1992 Specifications.",
      ],
      specs: [],
    },
    {
      id: "protective-clothing",
      heading: "Protective Clothing",
      imageSrc: legacyUpload("PROTECTIVE%20CLOTHING(1).jpg"),
      imageAlt: "Chlorine protective clothing set",
      descriptionPoints: [
        "It consists of Full Face Masks, PVC Suit, PVC Gloves and Gum Boots, Safety Helmet, Goggles.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
