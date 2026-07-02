import { productImage } from "@/lib/products/site-images";
import type { ProductPage } from "@/lib/products/types";

export const chlorinationAccessoriesProduct = {
  slug: "chlorination-accessories",
  metadata: {
    title:
      "Chlorination Accessories Manufacturers in India | Gas Chlorinator Spares",
    description:
      "Chlorination system accessories including tonner handling systems, trunnion roller supports, chlorine gas filters, chlorine gas manifolds, ball valves, motorized valves, pressure gauges, and pressure reducing valves.",
  },
  seoHeadings: [
    { level: 1, text: "Chlorination Accessories Manufacturers in India" },
    { level: 2, text: "Tonner Handling System" },
    { level: 3, text: "Chlorine Gas Manifold" },
    { level: 4, text: "Chlorine Ball Valve" },
    { level: 5, text: "Motorized Ball Valve" },
    { level: 6, text: "Pressure Reducing Valve" },
  ],
  sectionHeadingId: "chlorination-accessories",
  sectionTitle: "Chlorination",
  sectionTitleHighlight: "accessories",
  models: [
    {
      id: "tonner-handling-system",
      heading: "Tonner Handling System",
      imageSrc: productImage("tonner-handling-system.jpg"),
      imageAlt: "Tonner handling system for one-ton chlorine containers",
      descriptionPoints: [
        "The INDEVICE Tonner Handling System is designed for the safe, efficient, and convenient handling of one-ton chlorine containers. Engineered for smooth movement and secure positioning, the system enhances operational safety while minimizing manual handling and reducing the risk of container damage.",
        "The Lifting Beam is Designed for lifting a filled Ton Container.",
        "The Lifting Beam is made of ISMB 125, and is tested for 3 tons.",
        "The Lifting Beam can be provided with Electronic Digital Weight Indicator.",
      ],
      specs: [],
    },
    {
      id: "trunnion-roller-support",
      heading: "Trunnion Roller Support",
      imageSrc: productImage("trunnion-roller-support.png"),
      imageAlt: "Trunnion roller support for chlorine ton container rotation",
      descriptionPoints: [
        "The Trunnion Roller Support provides stable support and smooth rotation of chlorine ton containers during operation. Built for heavy-duty applications, it ensures safe container handling, accurate positioning, and reliable chlorine withdrawal.",
      ],
      specs: [],
    },
    {
      id: "auxiliary-container-valve",
      heading: "Auxiliary Container Valve",
      imageSrc: productImage("auxiliary-container-valve.png"),
      imageAlt: "Auxiliary container valve for chlorine ton containers",
      descriptionPoints: [
        "The Auxiliary Container Valve enables safe and uninterrupted chlorine withdrawal from ton containers by providing an additional connection point. Manufactured from chlorine-compatible materials, it ensures leak-tight performance and long service life.",
      ],
      specs: [],
    },
    {
      id: "flexible-copper-connector",
      heading: "Flexible Copper Connector",
      imageSrc: productImage("flexible-copper-connector.png"),
      imageAlt: "Flexible copper connector for chlorine gas piping",
      descriptionPoints: [
        "The Flexible Copper Connector is specially designed for connecting chlorine cylinders or ton containers to chlorination systems. Its flexible construction absorbs vibration and accommodates minor misalignment while providing a secure, leak-proof connection.",
      ],
      specs: [],
    },
    {
      id: "chlorine-gas-manifold",
      heading: "Chlorine Gas Manifold",
      imageSrc: productImage("chlorine-gas-manifold.jpg"),
      imageAlt: "Chlorine gas manifold for multiple cylinder supply",
      descriptionPoints: [
        "The Chlorine Gas Manifold is engineered for the safe distribution of chlorine gas from multiple cylinders or ton containers to the chlorination system. Its modular design ensures continuous gas supply, easy cylinder changeover, and dependable system operation.",
      ],
      specs: [],
    },
    {
      id: "chlorine-gas-filter",
      heading: "Chlorine Gas Filter",
      imageSrc: productImage("gas-filter.png"),
      imageAlt: "Chlorine gas filter for chlorination system gas phase",
      descriptionPoints: [
        "A filter is always mounted on the gas phase of the chlorination system to eliminate the carry-over of ferric chloride and other impurities. The filter has a glass wool insert. The gas filter is constructed out of seamless carbon steel.",
      ],
      specs: [],
    },
    {
      id: "chlorine-ball-valve",
      heading: "Chlorine Ball Valve",
      imageSrc: productImage("chlorine-ball-valve.png"),
      imageAlt: "Chlorine ball valve for gas and liquid chlorine lines",
      descriptionPoints: [
        "The Chlorine Ball Valve is designed for reliable isolation and control of chlorine gas and liquid chlorine lines. Manufactured from corrosion-resistant materials, it provides bubble-tight shut-off, smooth operation, and long-term durability in chlorine service.",
      ],
      specs: [],
    },
    {
      id: "motorized-ball-valve",
      heading: "Motorized Ball Valve",
      imageSrc: productImage("mororizer-ball-valve.png"),
      imageAlt: "Motorized ball valve for automated chlorine line control",
      descriptionPoints: [
        "The Motorized Ball Valve offers automated control of chlorine gas and liquid lines, enabling remote operation and seamless integration with PLC and SCADA systems. Designed for fast response and reliable shut-off, it enhances both process automation and plant safety.",
      ],
      specs: [],
    },
    {
      id: "online-residual-chlorine-analyzer",
      heading: "Online Residual Chlorine Analyzer",
      imageSrc: productImage("online-residual-chlorine-analyzer-bg-white.png"),
      imageAlt: "Online residual chlorine analyzer with LCD display",
      imageWidth: 1619,
      imageHeight: 971,
      descriptionPoints: [
        "The Online Residual Chlorine Analyzer is ideal for monitoring residual chlorine. This instrument is used for measuring the Residual Chlorine or Total Chlorine. The Analyzer provides a continuous 4-20mA output locally with a LCD display or can be repeat indicated in a PLC. Analyzer can also be used to automatically modulate dosing rate as per requirement.",
      ],
      specs: [],
    },
    {
      id: "pressure-gauge",
      heading: "Pressure Gauge",
      imageSrc: productImage("pressure-gauge.png"),
      imageAlt: "Chlorine pressure gauge for system monitoring",
      descriptionPoints: [
        "The Chlorine Pressure Gauge provides accurate monitoring of system pressure, ensuring safe and efficient operation of chlorination equipment. Designed for chlorine service, it delivers reliable performance even in demanding operating environments.",
      ],
      specs: [],
    },
    {
      id: "pressure-reducing-valve",
      heading: "Pressure Reducing Valve",
      imageSrc: productImage("pressure-reducing-valve.png"),
      imageAlt: "Pressure reducing valve for chlorine gas systems",
      descriptionPoints: [
        "The Pressure Reducing Valve (PRV) is designed to regulate and maintain the desired downstream chlorine pressure, protecting equipment from pressure fluctuations and ensuring stable, controlled system performance.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
