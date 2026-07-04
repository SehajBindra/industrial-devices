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

export type ImportantClient = {
  id: string;
  name: string;
  logo: string;
  areaIds: readonly string[];
};

export const importantClients: ImportantClient[] = [
  {
    id: "doosan-power-systems",
    name: "Doosan Power Systems India Pvt. Ltd.",
    logo: "/testimonials/doosan.png",
    areaIds: ["thermal-power", "process-water"],
  },
  {
    id: "offshore-infrastructure",
    name: "Offshore Infrastructure Ltd.",
    logo: "/testimonials/offshore-infrastructure.jpg",
    areaIds: ["drinking-water", "sewage-treatment"],
  },
  {
    id: "ilfs-paradip-refinery-water",
    name: "IL&FS Paradip Refinery Water Ltd.",
    logo: "/testimonials/ilfs.jpg",
    areaIds: ["drinking-water", "refinery-water"],
  },
  {
    id: "ncc-limited",
    name: "NCC Limited",
    logo: "/testimonials/ncc.jpg",
    areaIds: ["drinking-water", "sewage-treatment"],
  },
  {
    id: "tangedco",
    name: "TANGEDCO",
    logo: "/testimonials/tangedco.png",
    areaIds: ["thermal-power", "cooling-water"],
  },
];

export type ClientLogo = {
  id: string;
  name: string;
  logo: string;
};

export const clientLogos: ClientLogo[] = [
  {
    id: "tata-consulting-engineers",
    name: "Tata Consulting Engineers",
    logo: "/client-logos/tata-consulting-engineers.png",
  },
  {
    id: "reliance-power",
    name: "Reliance Power",
    logo: "/client-logos/reliance-power.png",
  },
  {
    id: "apgenco",
    name: "APGENCO",
    logo: "/client-logos/apgenco.png",
  },
  {
    id: "indian-oil",
    name: "IndianOil",
    logo: "/client-logos/indian-oil.png",
  },
  {
    id: "tata-projects",
    name: "Tata Projects",
    logo: "/client-logos/tata-projects.jpeg",
  },
  {
    id: "endress-hauser",
    name: "Endress+Hauser",
    logo: "/client-logos/endress-hauser.jpeg",
  },
  {
    id: "jindal-steel",
    name: "Jindal Steel",
    logo: "/client-logos/jindal-steel.jpeg",
  },
  {
    id: "up-jal-nigam",
    name: "U.P. Jal Nigam",
    logo: "/client-logos/up-jal-nigam.jpeg",
  },
  {
    id: "doosan-power-systems",
    name: "Doosan Power Systems India Pvt. Ltd.",
    logo: "/client-logos/doosan-power-systems.jpeg",
  },
  {
    id: "ncc-limited",
    name: "NCC Limited",
    logo: "/client-logos/ncc-limited.png",
  },
  {
    id: "suez-environment",
    name: "SUEZ Environment",
    logo: "/client-logos/suez-environment.png",
  },
  {
    id: "ion-exchange",
    name: "Ion Exchange",
    logo: "/client-logos/ion-exchange.png",
  },
  {
    id: "triveni-engineering-industries",
    name: "Triveni Engineering & Industries Ltd.",
    logo: "/client-logos/triveni-engineering-industries.jpeg",
  },
  {
    id: "gannon-dunkerley",
    name: "Gannon Dunkerley",
    logo: "/client-logos/gannon-dunkerley.jpeg",
  },
  {
    id: "geo-miller",
    name: "Geo Miller & Co. Pvt. Ltd.",
    logo: "/client-logos/geo-miller.png",
  },
  {
    id: "voltas",
    name: "Voltas",
    logo: "/client-logos/voltas.jpeg",
  },
  {
    id: "wpil-limited",
    name: "WPIL Limited",
    logo: "/client-logos/wpil-limited.png",
  },
  {
    id: "twad-board",
    name: "Tamil Nadu Water Supply and Drainage Board",
    logo: "/client-logos/twad-board.jpeg",
  },
  {
    id: "ntpc",
    name: "NTPC",
    logo: "/client-logos/ntpc.png",
  },
  {
    id: "rrvunl",
    name: "Rajasthan Rajya Vidyut Utpadan Nigam",
    logo: "/client-logos/rrvunl.jpeg",
  },
  {
    id: "municipal-corporation-greater-mumbai",
    name: "Municipal Corporation of Greater Mumbai",
    logo: "/client-logos/municipal-corporation-greater-mumbai.png",
  },
  {
    id: "va-tech-wabag",
    name: "VA Tech Wabag",
    logo: "/client-logos/va-tech-wabag.png",
  },
  {
    id: "bechtel",
    name: "Bechtel",
    logo: "/client-logos/bechtel.jpeg",
  },
  {
    id: "bses-rajdhani-power",
    name: "BSES Rajdhani Power Limited",
    logo: "/client-logos/bses-rajdhani-power.png",
  },
  {
    id: "uprvunl",
    name: "UPRVUNL",
    logo: "/client-logos/uprvunl.png",
  },
  {
    id: "kmda",
    name: "Kolkata Metropolitan Development Authority",
    logo: "/client-logos/kmda.jpeg",
  },
  {
    id: "pspcl",
    name: "Punjab State Power Corporation Ltd.",
    logo: "/client-logos/pspcl.png",
  },
  {
    id: "nlc-india",
    name: "NLC India Limited",
    logo: "/client-logos/nlc-india.png",
  },
  {
    id: "bifpcl",
    name: "Bangladesh-India Friendship Power Company",
    logo: "/client-logos/bifpcl.jpeg",
  },
  {
    id: "nippon-sanso",
    name: "Nippon Sanso",
    logo: "/client-logos/nippon-sanso.png",
  },
  {
    id: "bwssb",
    name: "Bangalore Water Supply and Sewerage Board",
    logo: "/client-logos/bwssb.png",
  },
  {
    id: "desein",
    name: "Desein",
    logo: "/client-logos/desein.jpeg",
  },
  {
    id: "hmwssb",
    name: "Hyderabad Metropolitan Water Supply & Sewerage Board",
    logo: "/client-logos/hmwssb.png",
  },
  {
    id: "jwil",
    name: "JWIL",
    logo: "/client-logos/jwil.png",
  },
  {
    id: "damodar-valley-corporation",
    name: "Damodar Valley Corporation",
    logo: "/client-logos/damodar-valley-corporation.png",
  },
  {
    id: "mahagenco",
    name: "MAHAGENCO",
    logo: "/client-logos/mahagenco.png",
  },
  {
    id: "tangedco",
    name: "TANGEDCO",
    logo: "/client-logos/tangedco.png",
  },
  {
    id: "lanco",
    name: "Lanco",
    logo: "/client-logos/lanco.jpeg",
  },
];

export const clientNames = [
  "A P PAPER MILLS LIMITED",
  "AARTI INDUSTRIES LIMITED",
  "AARUNYA",
  "ANDHRA PRADESH POWER GENERATION CORPORATION LTD.",
  "ANPPRASH PROJECTS PVT. LTD.",
  "AQUATECH SOLUTIONS PVT. LTD",
  "AQUATREAT EXIM PVT. LTD.",
  "AYYAPPA INFRA PROJECTS PVT. LTD",
  "BATLIBOI ENVIRONMENTAL ENGINEERING LTD.",
  "BGR ENERGY SYSTEMS LTD.",
  "BIYANI BUILDERS & ENGINEERS",
  "BONGAIGAON REFINERY & PETROCHEMICALS LTD.",
  "BSES KERALA POWER LTD.",
  "CANDY FILTERS LIMITED",
  "CLEAR WATER LTD. (DESEIN LTD.)",
  "DEMACO POLYMERS LTD.",
  "DHARIWAL INFRASTRUCTURE LIMITED",
  "DRIPLEX WATER ENGINEERING LTD.",
  "DUNDHUBHI INFRA PVT. LTD.",
  "ECO PROTECTION ENGINEERS PV. LTD.",
  "ELECTRO STEEL CASTINGS LIMITED",
  "EMTECH ENGINEERS",
  "ENDRESS+ HAUSER INDIA PVT. LTD",
  "ENGINEERING CENTRE UNITED KINGDOM",
  "ENGINEERS GUILD",
  "ENVIRAL PROJECTS PVT. LTD.",
  "ENVIRO CONSULTANTS",
  "EQUIS INFRA PROJECTS PVT. LTD.",
  "EXIM TRADE LINK INDIA PVT. LTD.",
  "GA INFRA PVT. LTD",
  "GANDHAR PETROCHEMICALS LTD.",
  "GANNON DUNKERLEY & CO. LTD.",
  "GB CONSTRUCTION",
  "GCKC PROJECT AND WORKS PVT. LTD",
  "GEO MILLER & CO. LTD",
  "GHARPURE ENGINEERING & CONSTRUCTIONS PVT LTD",
  "GONDWANA ENGINEERS LTD.",
  "GVPR ENGINEERS LTD",
  "H.P.L CHEMICALS LIMITED",
  "HIGH POLYMERS LTD.",
  "HINDUSTAN DORR-OLIVER LTD.",
  "ICOL (ION EXCHANGE) LTD.",
  "INDIAN OIL CORPORATION LTD.",
  "INDURE PVT. LTD.",
  "JINDAL STEEL & POWER LTD",
  "JINDAL VIJAYNAGAR LIMITED",
  "JIYA ENGINEERING & CONSTRUCTION",
  "JUBILANT ORGANOSIS (JUBILANT INGREVIA LIMITED)",
  "JUSCO LIMITED",
  "KHILARI INFRASTRUCTURE PVT. LTD",
  "LAHOTY BUILDCON LTD",
  "LANCO INFRASTRUCTURE LIMITED",
  "LAXMI CONSTRUCTION",
  "LC INFRA PROJECTS PVT. LTD",
  "LINEMAN HALFLOW (INDIA) LTD.",
  "MACHINE TOOLS AIDS (INDIA)",
  "MECGALE PNEUMATICS PVT. LTD",
  "MEGHA ENNGINEERING & INFRASTRUCTURE LTD",
  "MOHIT PAPER LIMITED",
  "NAVEEN PROJECTS LTD.",
  "NCC LTD",
  "NEYVELI LIGNITE CORPORATION LTD.",
  "OFFSHORE INFRASTRUCTURE LTD",
  "OM CONSTRUCTION CO.",
  "PARAMOUNT LTD.",
  "PRANCHIE NIRMAN PVT. LTD",
  "PRESCIENT FLOW CONTROL INDIA PVT. LTD",
  "PUBLIC HELATH ENGINEERING DEPT.",
  "RAMKY INFRASTRUCTURE LTD.",
  "RANBAXY LABORATORIES LTD.",
  "RELIANCE ENERGY LIMITED",
  "RELIANCE POWER LIMITED",
  "ROSA POWER SUPPLY CO. LTD",
  "RUCHIRA PAPER LIMITED",
  "SAI ENVIRO ENGINEERS PVT. LTD.",
  "SALIENT PROJECTS PVT. LTD",
  "SEPCON SYSTEMS PVT. LTD",
  "SFC ENVIRONMENTAL TECHNOLOGIES PVT. LTD",
  "SHIV BHANDAR CONSTRUCTION COMPANY",
  "SHIVA PAPER MILL LIMITED",
  "SHREERAM RAYONS LTD.",
  "SIRPUR PAPER MILLS LTD.",
  "SMC INFRASTRUCTURE PVT. LTD",
  "SMS PARAYAVARAN PVT. LTD.",
  "SN ENVIRO - TECH PVT. LTD",
  "SOLPRO AUTOMATION SYSTEMS",
  "SRI SCL INFRATECH LTD.",
  "STAR PAPER MILLS LTD.",
  "SUBHASH INFR ENGINEERS PVT. LTD",
  "TAIYO NIPPON SANSO INDIA PVT LTD.",
  "TATA CONSULTING ENGINEER LTD.",
  "TATA PROJECTS LTD.",
  "TECHNOCON PROJECTS & ENGINEERING",
  "TOSHIBA WATER SOLUTIONS",
  "TRIVENI ENGINEERING & INFRASTRUCTURE LTD.",
  "TRIVENI ENGINEERING INDUSTRIES LTD.",
  "U.P. JAL NIGAM",
  "UNIVERSAL MEP PROJECTS&ENGINEERING SERVICES LTD",
  "UNIVERSAL MEP PROJECTS&ENGINEERING SERVICES LTD (VOLTAS LTD)",
  "VA TECH WABAG LIMITED",
  "VOLTAS LTD",
  "WPIL LIMITED",
  "XLANT INFRA",
] as const;

export type ClientArea = {
  id: string;
  title: string;
  description: string;
};

export const clientAreas: ClientArea[] = [
  {
    id: "drinking-water",
    title: "Drinking Water",
    description:
      "Municipal and utility water treatment projects requiring dependable disinfection and residual control.",
  },
  {
    id: "sewage-treatment",
    title: "Sewage Treatment",
    description:
      "STP, ETP, and treated water reuse applications where stable chlorination supports discharge and reuse targets.",
  },
  {
    id: "thermal-power",
    title: "Thermal Power",
    description:
      "Cooling water, CW chlorination, and plant utility systems for large power-generation facilities.",
  },
  {
    id: "refinery-water",
    title: "Refinery Water",
    description:
      "Process and potable water treatment systems for refinery and heavy industrial infrastructure.",
  },
  {
    id: "cooling-water",
    title: "Cooling Water",
    description:
      "Biofouling and microbial control for cooling towers, circulating water systems, and industrial loops.",
  },
  {
    id: "process-water",
    title: "Process Water",
    description:
      "Disinfection packages for industrial process water, utilities, and plant-wide water treatment duties.",
  },
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

export type SiteCertification = {
  id: string;
  title: string;
  category: string;
  description: string;
  file: string;
  fileName: string;
  previewImage: string;
};

export const certifications: SiteCertification[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    category: "Quality management",
    description:
      "Certified quality management system covering design, manufacture, and supply of chlorination and water treatment equipment.",
    file: "/product/ISO-9001%20.pdf",
    fileName: "ISO-9001.pdf",
    previewImage: "/product/iso-9001-certificate.png",
  },
  {
    id: "iso-ohsas",
    title: "OHSAS 18001 / ISO 45001",
    category: "Occupational health & safety",
    description:
      "Certified occupational health and safety management system for manufacturing, commissioning, and project site operations.",
    file: "/product/ISO-OHSAS-Latest.pdf",
    fileName: "ISO-OHSAS.pdf",
    previewImage: "/product/iso-ohsas-certificate.png",
  },
];

export const contactInfo = {
  phone: {
    display: "+91 11 46013019",
    href: "tel:+911146013019",
  },
  mobile: {
    display: "9810079856",
    href: "tel:+919810079856",
  },
  whatsapp: {
    display: "9810079856",
    href: "https://wa.me/919810079856",
  },
  hours: "IST 9 AM to 6 PM",
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
        { id: "clients", title: "Clients", url: "/clients" },
        { id: "clientele", title: "Customer Testimonial", url: "/#clients" },
        { id: "contact", title: "Contact", url: "/contact" },
        { id: "downloads", title: "Downloads", url: "/downloads" },
        {
          id: "certification",
          title: "Certification",
          url: "/certification",
        },
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
          url: productPath("chlorination-accessories"),
        },
        {
          id: "dioxide",
          title: "Chlorine dioxide",
          url: productPath("chlorine-dioxide-generator"),
        },
        {
          id: "chemical-dosing",
          title: "Chemical Dosing System",
          url: productPath("chemical-dosing-system"),
        },
        {
          id: "chlorine-analyzer",
          title: "Residual chlorine analyzer",
          url: "/product/chlorination-accessories#online-residual-chlorine-analyzer",
        },
      ],
    },
  ],
};
