export type ClientCell =
  | {
      kind: "copy";
      text: string;
    }
  | {
      kind: "image";
      src: string;
      className?: string;
      preserveColor?: boolean;
      label?: string;
      labelClassName?: string;
      lockupClassName?: string;
    };

export const clientCells: ClientCell[] = [
  {
    kind: "copy",
    text: "Trusted for water treatment, process safety, and disinfection.",
  },
  { kind: "copy", text: "Municipal WTP" },
  { kind: "copy", text: "STP & ETP" },
  { kind: "copy", text: "Power Plants" },
  { kind: "copy", text: "Refineries" },
  { kind: "copy", text: "Pharmaceuticals" },
  { kind: "copy", text: "Food Processing" },
  { kind: "copy", text: "Chemical Industries" },
];

export type SiteTestimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonialAvatar = "/testimonials/avatar.svg";

export const testimonials: SiteTestimonial[] = [
  {
    id: "municipal",
    name: "Municipal Water Treatment",
    role: "WTP",
    text: "Complete chlorination and disinfection systems for safe drinking water, residual chlorine control, and public health protection.",
    image: testimonialAvatar,
  },
  {
    id: "sewage-wastewater",
    name: "Sewage & Wastewater",
    role: "STP / ETP",
    text: "Efficient chlorination for bacteria reduction, odour control, pathogen destruction, reuse, and discharge compliance.",
    image: testimonialAvatar,
  },
  {
    id: "process-water",
    name: "Industrial Process Water",
    role: "Process Systems",
    text: "Reliable disinfection and microbial control for industrial process water, utility loops, and raw water treatment.",
    image: testimonialAvatar,
  },
  {
    id: "chemical-pharma",
    name: "Chemical & Pharmaceutical",
    role: "Process Safety",
    text: "Precision dosing and engineered chlorination systems for strict hygiene, safety, and process reliability requirements.",
    image: testimonialAvatar,
  },
  {
    id: "power-cooling",
    name: "Power & Cooling Water",
    role: "Cooling Systems",
    text: "Biofouling, algae, bacterial contamination, and scaling control for cooling water circuits and power plant reliability.",
    image: testimonialAvatar,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    role: "Processing Units",
    text: "Water treatment and disinfection support for hygienic processing environments and dependable utility water quality.",
    image: testimonialAvatar,
  },
  {
    id: "textile-paper",
    name: "Textile & Paper",
    role: "Industrial Water",
    text: "Chlorination and dosing support for water quality, odour reduction, bacteria control, and process consistency.",
    image: testimonialAvatar,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    role: "Refineries",
    text: "Gas chlorination and disinfection solutions for demanding process water, cooling water, and utility applications.",
    image: testimonialAvatar,
  },
  {
    id: "pools-recreation",
    name: "Swimming Pools",
    role: "Recreational Facilities",
    text: "Water treatment systems for clear, safe, and consistent pool disinfection in recreational facilities.",
    image: testimonialAvatar,
  },
  {
    id: "fertilizer-petrochemical",
    name: "Fertilizer & Petrochemical",
    role: "Heavy Industry",
    text: "Chlorination systems, safety equipment, and dosing accessories for large industrial water treatment requirements.",
    image: testimonialAvatar,
  },
];

export const siteConfig = {
  hero: {
    title: "Industrial Devices (India) Pvt. Ltd.",
    logo: "/brand/logo-without-branding-without-bg.svg",
    description:
      "Trusted manufacturer and supplier of gas chlorination systems, chlorine dosing equipment, gas chlorine safety systems, and water treatment solutions.",
  },
  socialLinks: [
    {
      id: "x",
      title: "X",
      url: "https://www.industrialdevices.in/",
      image: "/social/x.svg",
    },
    {
      id: "instagram",
      title: "Instagram",
      url: "https://www.industrialdevices.in/",
      image: "/social/instagram.svg",
    },
    {
      id: "facebook",
      title: "Facebook",
      url: "https://www.industrialdevices.in/",
      image: "/social/facebook.svg",
    },
  ],
  footerLinks: [
    {
      title: "Explore",
      links: [
        { id: "home", title: "Home", url: "/" },
        { id: "products", title: "Products", url: "/#products" },
        { id: "applications", title: "Applications", url: "/#applications" },
        { id: "clientele", title: "Industries", url: "/#clients" },
        { id: "contact", title: "Contact", url: "/#contact" },
      ],
    },
    {
      title: "Products",
      links: [
        {
          id: "chlorinators",
          title: "Gas & vacuum chlorinators",
          url: "/gas-chlorination",
        },
        {
          id: "vaporizers",
          title: "Chlorine vaporizers",
          url: "/chlorine-vaporizer",
        },
        {
          id: "dosing",
          title: "Electro chlorination",
          url: "/chlorine-dosing-system",
        },
        {
          id: "safety",
          title: "Leak detection & safety",
          url: "/safety-system",
        },
        {
          id: "accessories",
          title: "Vacuum regulators",
          url: "/#products",
        },
        {
          id: "dioxide",
          title: "Chlorine dioxide",
          url: "/#products",
        },
        {
          id: "electro",
          title: "Electro chlorination",
          url: "/#products",
        },
      ],
    },
  ],
};
