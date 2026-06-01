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
    text: "Trusted by municipal, power, and industrial clients.",
  },
  { kind: "copy", text: "Municipal Corporations" },
  { kind: "copy", text: "Thermal Power Stations" },
  { kind: "copy", text: "Public Health Departments" },
  { kind: "copy", text: "Chemical & Paper Pulp" },
  { kind: "copy", text: "Water Treatment Plants" },
  { kind: "copy", text: "Industrial Utilities" },
  { kind: "copy", text: "Process Industries" },
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
    name: "Municipal Water",
    role: "Municipal Corporations",
    text: "Vacuum chlorinators and dosing systems commissioned for city-scale water treatment, with reliable capacity from grams to tonnes per hour.",
    image: testimonialAvatar,
  },
  {
    id: "thermal-power",
    name: "Power Generation",
    role: "Thermal Power Stations",
    text: "Gas chlorination systems engineered for plant cooling and process water, built for continuous duty and safe chlorine handling.",
    image: testimonialAvatar,
  },
  {
    id: "public-health",
    name: "Public Health",
    role: "Public Health Departments",
    text: "Water chlorination equipment supplied for district programmes, backed by leak detection and absorption safety systems.",
    image: testimonialAvatar,
  },
  {
    id: "chemical-pulp",
    name: "Process Industry",
    role: "Chemical & Paper Pulp",
    text: "Chemical dosing and chlorination packages tailored to industrial process lines, with vaporizers, dosers, and manifold accessories.",
    image: testimonialAvatar,
  },
  {
    id: "vaporizers",
    name: "Liquid Chlorine",
    role: "Vaporizer & Evaporator Systems",
    text: "Chlorine vaporizers and evaporators for high-demand sites, paired with pressure reducing valves and cylinder changeover units.",
    image: testimonialAvatar,
  },
  {
    id: "safety",
    name: "Plant Safety",
    role: "Leak Detection & Absorption",
    text: "Emergency repair kits, leak detectors, and absorption systems that keep chlorination plants protected under real operating conditions.",
    image: testimonialAvatar,
  },
  {
    id: "dioxide",
    name: "Disinfection",
    role: "Chlorine Dioxide Generators",
    text: "Alternative disinfection with chlorine dioxide: oxidation-based treatment without chlorination, for modern water treatment needs.",
    image: testimonialAvatar,
  },
  {
    id: "accessories",
    name: "Site Equipment",
    role: "Manifolds & Accessories",
    text: "Roller supports, lifting beams, flexible copper connectors, and vacuum auto changeover for complete chlorination site readiness.",
    image: testimonialAvatar,
  },
  {
    id: "commissioning",
    name: "Turnkey Delivery",
    role: "Design to Commissioning",
    text: "From 250 gms/hr to 1000+ Kgs/hr, designed, manufactured, and commissioned at our Okhla facility with pan-India support.",
    image: testimonialAvatar,
  },
];

export const siteConfig = {
  hero: {
    title: "Industrial Devices (India)",
    logo: "/brand/logo-without-branding-without-bg.svg",
    description:
      "Leader in chlorinators, vaporizers, and safety systems, designed and manufactured in New Delhi for municipal, power, and industrial water treatment.",
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
        { id: "why-us", title: "Why us", url: "/#approach" },
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
          url: "/#products",
        },
        {
          id: "vaporizers",
          title: "Chlorine vaporizers",
          url: "/#products",
        },
        {
          id: "dosing",
          title: "Chlorine dosing systems",
          url: "/#products",
        },
        {
          id: "water",
          title: "Water chlorination",
          url: "/#products",
        },
        {
          id: "safety",
          title: "Safety & leak systems",
          url: "/#products",
        },
        {
          id: "dioxide",
          title: "Chlorine dioxide generators",
          url: "/#products",
        },
      ],
    },
  ],
};
