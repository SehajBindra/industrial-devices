import type { ProductPage } from "@/lib/products/types";

export const chemicalDosingSystemProduct = {
  slug: "chemical-dosing-system",
  metadata: {
    title:
      "Chemical Dosing System | Precision Chemical Dosing | INDEVICE India",
    description:
      "INDEVICE chemical dosing systems deliver accurate, reliable, and automated chemical injection for water and wastewater treatment. Custom skid-mounted packages with storage tanks, dosing pumps, instrumentation, and PLC/SCADA integration.",
  },
  seoHeadings: [
    { level: 1, text: "Chemical Dosing System Manufacturers in India" },
    { level: 2, text: "Precision Dosing Solutions for Efficient Process" },
    { level: 3, text: "Automated Chemical Dosing Systems" },
    { level: 4, text: "Water and Wastewater Chemical Dosing" },
    { level: 5, text: "Skid Mounted Dosing Packages" },
    { level: 6, text: "Corrosion Resistant Dosing Systems" },
  ],
  sectionHeadingId: "chemical-dosing-system",
  sectionTitle: "Chemical dosing",
  sectionTitleHighlight: "system",
  models: [
    {
      id: "chemical-dosing-system",
      heading: "Precision Dosing Solutions for Efficient Process",
      imageSrc: "/chemical-dosing-system.jpg",
      imageAlt:
        "INDEVICE chemical dosing system with storage tanks, metering pumps, and control panel",
      descriptionPoints: [
        "The INDEVICE Chemical Dosing System is engineered to deliver accurate, reliable, and automated chemical dosing for a wide range of water and wastewater treatment, and other applications. Designed to optimize treatment efficiency and minimize chemical consumption, our dosing systems ensure precise injection of treatment chemicals such as sodium hypochlorite, alum, PAC, polymers, caustic soda, acids, antiscalant, corrosion inhibitors, and other process chemicals.",
        "Each system is custom-designed to meet specific process requirements and is supplied as a complete package comprising chemical storage tanks, dosing pumps, agitators, calibration columns, valves, piping, instrumentation, and control panels. Available in manual, semi-automatic, and fully automated configurations, the systems can be seamlessly integrated with PLC, SCADA, flow meters, analysers, and other process control equipment for intelligent and proportionate dosing.",
        "Manufactured using high-quality corrosion-resistant materials such as HDPE, PP, PVC, PVDF, SS304, and SS316, our chemical dosing systems offer exceptional durability, low maintenance, and reliable performance even in demanding industrial environments.",
      ],
      specs: [
        {
          label: "Features",
          value: [
            "Precision chemical dosing for optimum treatment performance",
            "Modular skid-mounted design for easy installation",
            "Compatible with a wide range of metering pumps and controllers",
            "Automatic, flow-paced, or analyser-based dosing options",
            "Corrosion-resistant construction for extended service life",
            "Compact design with easy access for operation and maintenance",
            "Custom-engineered to suit plant capacity and application requirements",
          ],
        },
      ],
    },
  ],
} satisfies ProductPage;
