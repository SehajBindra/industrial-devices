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
  sectionTitle: "Chlorine vaporizer",
  sectionTitleHighlight: "models",
  models: [
    {
      id: "electrically-heated",
      heading: "Electrically Heated Vaporizer",
      imageSrc: productImage("gas-chlorination-system-with-vaporiser.jpg"),
      imageAlt: "Electrically heated chlorine vaporizer",
      descriptionPoints: [
        "High-Capacity Chlorine Vaporization for Reliable & Safe Operations",
        "The INDEVICE Electrically Heated Vaporizer is specially designed for applications requiring large-volume chlorine gas demand, ensuring a continuous, reliable, and efficient conversion of liquid chlorine into dry chlorine gas. Engineered for high-capacity chlorination systems, these vaporizers deliver precise performance while maintaining the highest standards of safety and operational reliability.",
        "Available in capacities of up to 1000 kg/hr, the electrically heated vaporizer is ideal for demanding industrial and municipal water treatment applications where uninterrupted chlorine supply is critical.",
        "Manufactured using high-grade, chlorine-resistant materials, the vaporizer is built to withstand highly corrosive operating environments, ensuring long service life and dependable performance.",
        "The robust construction, combined with carefully engineered accessories, guarantees safe, accurate, and stable operation under varying process conditions.",
        "Designed and fabricated in accordance with The Chlorine Institute Inc. standards, the vaporizer incorporates advanced safety features and intelligent controls to maximize operational efficiency.",
        "Advanced Safety & Control Features",
        "The electrically heated vaporizer is equipped with integrated interlocks for level and temperature control, ensuring safe operation and protecting the system from abnormal conditions. These automated safety mechanisms help maintain consistent vaporization performance while minimizing operational risks.",
        "Built for performance, precision, and reliability, the Electrically Heated Vaporizer is the preferred choice for facilities requiring continuous and efficient chlorine gas generation at higher capacities.",
      ],
      specs: [
        { label: "Capacity", value: "50 kg/hr to 1000 kg/hr" },
        {
          label: "Applications",
          value:
            "Ideal for high-capacity chlorination requirements, including: Cooling Water Gas Chlorination in Power Plants, Raw Water Chlorination in Power Plants, Large Water Treatment Plants, High-Capacity Sewage Treatment Plants (STP)",
        },
      ],
    },
    {
      id: "steam-heated",
      heading: "Steam Heated Vaporizer",
      imageSrc: productImage("filter.jpg"),
      imageAlt: "Steam heated chlorine vaporizer",
      descriptionPoints: [
        "Efficient & Reliable Chlorine Vaporization for High-Capacity Applications",
        "The INDEVICE Steam Heated Chlorine Vaporizer is specifically engineered to convert liquid chlorine into dry chlorine gas efficiently and safely for high-capacity chlorination systems. Powered by steam as the heating medium, the vaporizer ensures consistent chlorine gas generation while maintaining precise temperature control for stable and uninterrupted system performance.",
        "Designed for demanding industrial and water treatment environments, the vaporizer features an ASME-compliant construction, ensuring maximum safety, structural integrity, and long-term reliability under operating conditions.",
        "Each vaporizer is custom-designed to suit specific chlorine flow rates, heating requirements, and installation layouts, enabling seamless integration into a wide range of chlorination systems.",
        "The system utilizes an advanced heat transfer design to maximize thermal efficiency while minimizing energy consumption, delivering cost-effective operation without compromising performance.",
        "The vaporizer can be designed for other gases like Sulphur Dioxide (SO2), Ammonia etc.",
        "Material of Construction Options",
        "To meet varying process requirements and corrosion resistance demands, vaporizers are available in:",
        "SS 304",
        "SS 316",
        "Carbon Steel",
        "Quality Assurance & Documentation",
        "Every vaporizer is thoroughly inspected and tested prior to dispatch and is supplied with complete quality documentation, including:",
        "Hydro Test Reports",
        "Material Test Certificates (MTC)",
        "Inspection Records",
        "Warranty Documentation",
        "Designed for performance, safety, and reliability, the Steam Heated Vaporizer is an ideal solution for continuous and efficient chlorine gas supply in large-scale industrial applications.",
      ],
      specs: [],
    },
    {
      id: "hot-water-heated",
      heading: "Hot Water Heated Vaporizer",
      imageSrc: "/client-list/chlorine-heater-jb-skid.webp",
      imageAlt: "Hot water heated chlorine vaporizer",
      descriptionPoints: [
        "Efficient & Controlled Chlorine Vaporization for High-Demand Applications",
        "The INDEVICE Hot Water Heated Vaporizer is designed to efficiently convert liquid chlorine into dry chlorine gas for applications requiring continuous and high-capacity chlorine supply. Utilizing hot water as the heating medium, the system provides uniform and controlled heat transfer, ensuring stable chlorine vaporization with enhanced operational safety.",
        "Engineered for reliability and precision, the vaporizer maintains a consistent operating temperature to deliver uninterrupted chlorine gas flow while minimizing the risks associated with temperature fluctuations. The indirect heating method ensures efficient energy utilization and dependable performance, making it ideal for demanding industrial and municipal water treatment processes.",
      ],
      specs: [],
    },
  ],
} satisfies ProductPage;
