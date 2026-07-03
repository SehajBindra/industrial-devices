import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorineVaporizerProduct = {
  slug: "chlorine-vaporizer",
  metadata: {
    title:
      "Chlorine Vaporizer | Chlorine Evaporator | Chlorine doser in India | Delhi",
    description:
      "Chlorine vaporizer and evaporator manufacturers in India. Electrically heated, steam heated, and hot water heated vaporizers for high-capacity gas chlorination in power plants, water treatment, and pulp mills.",
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
  sectionTitle: "Chlorine Vaporizer/ ",
  sectionTitleHighlight: "Evaporator",
  models: [
    {
      id: "electrically-heated",
      heading: "Electrically Heated Vaporizer",
      imageSrc: productImage("evaporator-vaporizer-bg-white.png"),
      imageAlt: "Electrically heated chlorine vaporizer",
      descriptionPoints: [
        "**High-Capacity Chlorine Vaporization for Reliable & Safe Operations**",
        "INDEVICE Electrically Heated Vaporizers convert liquid chlorine into dry gas for large-volume demand.",
        "Engineered for high-capacity chlorination with precise performance and maximum safety.",
        "Available up to 1000 kg/hr — ideal for industrial and municipal applications where uninterrupted chlorine supply is critical.",
        "Manufactured from high-grade, chlorine-resistant materials to withstand corrosive environments and ensure long service life.",
        "Designed as per the Chlorine Institute Inc. standards with advanced safety features and intelligent controls for operational efficiency.",
        "**Advanced Safety & Control Features**",
        "Integrated interlocks for level and temperature control to protect against abnormal conditions.",
        "Automated safety mechanisms maintain consistent vaporization while minimizing operational risks.",
        "The preferred choice for facilities requiring continuous, efficient chlorine gas generation at higher capacities above 50 kg/hr.",
      ],
      specs: [
        { label: "Capacity", value: "50 kg/hr to 1200 kg/hr" },
        {
          label: "Applications",
          value:
            "Cooling Water Chlorination Systems in Power Plants, Large Water Treatment Plants, and High-Capacity Sewage Treatment Plants (STPs).",
        },
      ],
    },
    {
      id: "steam-heated",
      heading: "Steam Heated Vaporizer",
      imageSrc: productImage("steam-heated-vaporizer.jpg"),
      imageAlt: "Steam heated chlorine vaporizer",
      descriptionPoints: [
        "**Efficient & Reliable Chlorine Vaporization for High-Capacity Applications**",
        "INDEVICE Steam Heated Vaporizers convert liquid chlorine into dry gas using steam as the heating medium.",
        "Precise temperature control ensures stable, uninterrupted chlorine gas generation.",
        "ASME-compliant construction ensures maximum safety, structural integrity, and long-term reliability in demanding industrial environments.",
        "Custom-designed for specific chlorine flow rates, heating requirements, and installation layouts.",
        "Advanced heat transfer maximizes efficiency while minimizing energy consumption.",
        "Also available for other gases such as Sulphur Dioxide (SO₂) and Ammonia.",
        "**Material of Construction Options**",
        "**SS 304**",
        "**SS 316**",
        "**Carbon Steel**",
        "**Monel**",
        "**Hastelloy-C**",
        "**Quality Assurance & Documentation**",
        "Every vaporizer is inspected and tested prior to dispatch with complete documentation including hydro test reports, material test certificates, inspection records, and warranty documentation.",
        "Ideal for continuous, efficient chlorine gas supply in large-scale industrial applications.",
      ],
      specs: [
        {
          label: "Applications",
          value: "Paper Industries, Chemical and Pharmaceutical Industries.",
        },
      ],
    },
    {
      id: "hot-water-heated",
      heading: "Hot Water Circulated Vaporizer",
      imageSrc: productImage("vaporizer-drawing.png"),
      imageAlt: "Hot water heated chlorine vaporizer drawing",
      imageWidth: 1750,
      imageHeight: 2480,
      descriptionPoints: [
        "**Efficient & Controlled Chlorine Vaporization for High-Demand Applications**",
        "INDEVICE Hot Water Heated Vaporizers convert liquid chlorine into dry gas using hot water as the heating medium.",
        "Uniform heat transfer ensures stable vaporization with enhanced safety.",
        "Consistent operating temperature delivers uninterrupted chlorine gas flow while minimizing risks from temperature fluctuations.",
        "Ideal for demanding industrial applications.",
      ],
      specs: [
        {
          label: "Applications",
          value: "Paper Industries, Chemical and Pharmaceutical Industries.",
        },
      ],
    },
  ],
} satisfies ProductPage;
