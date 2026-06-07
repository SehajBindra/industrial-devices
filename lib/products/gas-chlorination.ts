import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const gasChlorinationProduct = {
  slug: "gas-chlorination",
  metadata: {
    title:
      "Gas chlorinator India|Gas Chlorination|Chemical dosing|chlorine dosing",
    description:
      "Industrial Devices is a leading Chlorination System manufacturers in India. Chlorine Dosing System Manufacturers India, Chlorine Vaporizer, Gas Chlorinator India, Chlorination System Manufacturers.",
  },
  seoHeadings: [
    { level: 1, text: "Gas Chlorinator Manufacturers in India" },
    { level: 2, text: "Chlorinator Manufacturers India" },
    { level: 3, text: "Chlorine Dosing System Manufacturers India" },
    { level: 4, text: "Chlorine Vaporizer" },
    { level: 5, text: "Gas Chlorinator India" },
    { level: 6, text: "Chlorination System Manufacturers" },
  ],
  sectionHeadingId: "gas-chlorinator-models",
  sectionTitle: "Gas chlorinator",
  sectionTitleHighlight: "models",
  models: [
    {
      id: "cylinder-tonner",
      heading: "Cylinder Mounted Models",
      imageSrc: productImage("cylinder-mounted-chlorinator.jpg"),
      imageAlt: "Cylinder mounted chlorinator",
      descriptionPoints: [
        "**Reliable & Efficient Chlorination Solutions**",
        "INDEVICE Cylinder Mounted Chlorinators deliver versatile, cost-effective chlorine dosing. These vacuum-operated systems ensure safe, reliable chlorine feed across water treatment applications.",
        "Mounted directly onto chlorine cylinders or ton containers via a robust yoke clamp, providing secure, leak-proof installation for enhanced safety.",
        "Each chlorinator includes essential components:",
        "**Chlorine Flow Meter**",
        "**Flow Control Valve**",
        "**Pressure Relief Valve**",
        "An exclusively designed vacuum regulator operates only when the injector generates vacuum. It shuts off automatically when vacuum falls below the set limit, preventing chlorine leakage.",
      ],
      specs: [
        { label: "Capacity", value: "100 g/hr to 10 kg/hr" },
        {
          label: "Applications",
          value:
            "Swimming pools, drinking water treatment, small-capacity water treatment plants, and potable water treatment in power plants.",
        },
      ],
    },
    {
      id: "floor-mounted",
      heading: "Floor Mounted Models",
      imageSrc: productImage("gas-chlorination-system-with-vaporiser.jpg"),
      imageAlt: "Floor mounted vacuum chlorinator",
      descriptionPoints: [
        "**High-Performance Chlorination Systems for Demanding Applications**",
        "INDEVICE Floor Mounted Chlorinators are advanced, vacuum-operated solution feed systems engineered for reliable, precise chlorine dosing.",
        "Designed for efficiency and safety, these systems incorporate high-quality components, including:",
        "**Chlorine Pressure & Vacuum Gauges**",
        "**Reliable Vacuum Regulator**",
        "**Accurate Flow Meter**",
        "**Precision Flow Control Valve**",
        "**Efficient Differential Regulator**",
        "**Injector**",
        "**Drain Valve**",
        "**Non-Return Valve**",
        "A simple yet advanced design minimizes maintenance while ensuring long-term reliability. All major components are accessible from the rear for easy inspection.",
        "Each unit is factory pre-assembled and tested under simulated conditions, reducing installation time and ensuring hassle-free start-up.",
        "Optional proportionate dosing enables automatic feed from an on-line chlorine analyzer or flow meter.",
      ],
      specs: [
        { label: "Capacity", value: "100 g/hr to 1000 kg/hr" },
        {
          label: "Applications",
          value:
            "Drinking water treatment, effluent treatment plants (ETP), sewage treatment plants (STP), cooling water treatment, and raw water treatment in power plants.",
        },
      ],
    },
    {
      id: "wall-mounted",
      heading: "Wall Mounted Chlorinators",
      imageSrc: productImage("wall-mounted-chlorinator.png"),
      imageAlt: "Wall mounted chlorinator",
      descriptionPoints: [
        "**Compact & Reliable Chlorination Solutions**",
        "INDEVICE Wall Mounted Chlorinators are compact, vacuum-operated systems for accurate chlorine dosing in smaller to medium-capacity applications.",
        "Built with high-quality components including pressure & vacuum gauges, vacuum regulator, flow meter, flow control valve, injector, drain valve, and non-return valve.",
        "Robust and efficient design ensures safe operation, precise dosing, and low maintenance for continuous water disinfection.",
      ],
      specs: [
        { label: "Capacity", value: "100 g/hr to 5 kg/hr" },
        {
          label: "Applications",
          value:
            "Drinking water treatment, water treatment plants, and potable water treatment in power plants.",
        },
      ],
    },
  ],
} satisfies ProductPage;
