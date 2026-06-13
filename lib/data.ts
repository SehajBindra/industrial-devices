import { productPath } from "@/lib/products";

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

export const testimonials: SiteTestimonial[] = [
  {
    id: "doosan-power-systems",
    name: "D G Shin",
    role: "General Manager, Doosan Power Systems India Pvt Ltd.",
    text: "Industrial Devices (India) Pvt. Ltd. successfully carried out commissioning of the chlorination systems for the UPRVUNL 2x660 MW Obra-C Thermal Power Extension Project. Functional performance tests were conducted, and the systems were found to be operating satisfactorily and meeting the intended design parameters.",
    image: "/testimonials/doosan.png",
  },
  {
    id: "offshore-infrastructure",
    name: "Amiya Samanta",
    role: "Project Manager, Offshore Infrastructure Ltd",
    text: "Industrial Devices (India) Pvt. Ltd., New Delhi, supplied and installed 3 nos. of 500 grams/hr electrochlorinators. The chlorinators have been working since installation, and their after-sales service is very prompt and good.",
    image: "/testimonials/offshore-infrastructure.jpg",
  },
  {
    id: "ilfs-paradip-refinery-water",
    name: "Project Manager",
    role: "IL&FS Paradip Refinery Water Ltd.",
    text: "Industrial Devices (India) Pvt. Ltd. designed, supplied, and installed 5 nos. of 10 kg/hr vacuum type chlorinators at the 100 MLD WTP for IOCL, Paradip Refinery. The chlorination systems are working satisfactorily, and their after-sales service has been prompt and excellent.",
    image: "/testimonials/ilfs.jpg",
  },
  {
    id: "ncc-limited",
    name: "Suman Thota",
    role: "Project Manager (E&M), NCC Limited",
    text: "The chlorination system and leak absorption system designed, supplied, erected, and commissioned by Industrial Devices (India) Pvt. Ltd. at Guntur is working satisfactorily. Their after-sales service is very good.",
    image: "/testimonials/ncc.jpg",
  },
  {
    id: "tangedco",
    name: "Chief Engineer/Project-1",
    role: "TANGEDCO - Chennai-600 002",
    text: "Industrial Devices (India) Pvt. Ltd., New Delhi, supplied a 2x190 kgs/hr CW chlorination system along with a chlorine leak absorption system. The plant has been working in good condition, and their after-sales service has been very good.",
    image: "/testimonials/tangedco.png",
  },
];

export type SiteDownload = {
  id: string;
  title: string;
  description: string;
  file: string;
  fileName: string;
};

export const downloads: SiteDownload[] = [
  {
    id: "company-catalogue",
    title: "Company Profile Catalogue",
    description:
      "Overview of Industrial Devices (India), our chlorination systems, manufacturing capabilities, and project experience.",
    file: "/product/company-catalogue.pdf",
    fileName: "IDI Company Profile Catalogue.pdf",
  },
];

export const contactInfo = {
  phone: {
    display: "+91 11 4161 1916",
    href: "tel:+911141611916",
  },
  whatsapp: {
    href: "https://wa.me/919810079856",
  },
} as const;

export const siteConfig = {
  hero: {
    title: "Industrial Devices (India) Pvt. Ltd.",
    logo: "/brand/logo-without-branding-without-bg.svg",
    description:
      "Trusted manufacturer and supplier of gas chlorination systems, chlorine dosing equipment, gas chlorine safety systems, and water treatment solutions.",
  },
  socialLinks: [
    {
      id: "whatsapp",
      title: "WhatsApp",
      url: "https://wa.me/919810079856",
      image: "/social/whatsapp.svg",
    },
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
        { id: "clientele", title: "Customer Testimonial", url: "/#clients" },
        { id: "contact", title: "Contact", url: "/contact" },
        { id: "downloads", title: "Downloads", url: "/downloads" },
        { id: "request-quote", title: "Request Quote", url: "/request-quote" },
      ],
    },
    {
      title: "Products",
      links: [
        {
          id: "chlorinators",
          title: "Gas & vacuum chlorinators",
          url: productPath("gas-chlorination"),
        },
        {
          id: "vaporizers",
          title: "Chlorine vaporizers",
          url: productPath("chlorine-vaporizer"),
        },
        {
          id: "dosing",
          title: "Electro chlorination",
          url: productPath("chlorine-dosing-system"),
        },
        {
          id: "safety",
          title: "Leak detection & safety",
          url: productPath("safety-system"),
        },
        {
          id: "accessories",
          title: "Chlorination System Accessories",
          url: "/#audits-assessments",
        },
        {
          id: "dioxide",
          title: "Chlorine dioxide",
          url: productPath("chlorine-dioxide-generator"),
        },
        {
          id: "electro",
          title: "Electro chlorination",
          url: "/#products",
        },
        {
          id: "chemical-dosing",
          title: "Chemical Dosing System",
          url: "/#products",
        },
      ],
    },
  ],
};
