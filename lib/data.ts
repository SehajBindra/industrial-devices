import {
  BrainIcon,
  BookOpenIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
  LineChartIcon,
  UsersIcon,
} from "lucide-react";

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
      /** Display name next to the logo and for accessibility. */
      label?: string;
      labelClassName?: string;
      lockupClassName?: string;
    };

function createImageCell(
  src: string,
  className = "h-8 sm:h-9",
  preserveColor = true,
  options?: {
    label?: string;
    labelClassName?: string;
    lockupClassName?: string;
  },
): ClientCell {
  return {
    kind: "image",
    src,
    className,
    preserveColor,
    ...options,
  };
}

type LogoRow = {
  src: string;
  label: string;
  className?: string;
  lockupClassName?: string;
};

/** Logos from https://www.qmsil.co.in/clients-section.php (stored in `/public/companies`). */
const qmsClientLogos: LogoRow[] = [
  {
    src: "/companies/acc.jpg",
    label: "ACC",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/airport.jpg",
    label: "AAI",
    className: "h-10 sm:h-11",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/alf.jpg", label: "ALF" },
  { src: "/companies/ambuja.jpg", label: "Ambuja" },
  { src: "/companies/ashok.jpg", label: "AshokLeyland" },
  {
    src: "/companies/bnp.jpg",
    label: "BHAVINI",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/bombardier.jpg",
    label: "Bombardier",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/bosch.jpg", label: "Bosch" },
  { src: "/companies/bvfc.png", label: "BVFC", className: "h-9 sm:h-10" },
  { src: "/companies/clw.jpg", label: "CLW" },
  {
    src: "/companies/coco-cola.jpg",
    label: "CocaCola",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/daikin.jpg",
    label: "Daikin",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/drdo.jpg",
    label: "DRDO",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/ericsson.jpg", label: "Ericsson" },
  {
    src: "/companies/fortis.jpg",
    label: "Fortis",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/gail.png",
    label: "GAIL",
    className: "h-10 sm:h-12",
  },
  {
    src: "/companies/godrej.jpg",
    label: "Godrej",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/grse.png",
    label: "GRSE",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/hero.jpg",
    label: "Hero",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/hzl.jpg",
    label: "HZL",
    className: "h-10 sm:h-11",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/icf.jpg",
    label: "ICF",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/icl.jpg",
    label: "ICL",
    lockupClassName: "max-w-[12rem]",
  },
  { src: "/companies/iocl.jpg", label: "IOCL" },
  {
    src: "/companies/jaipuria.png",
    label: "Jaipuria",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/jcb.jpg", label: "JCB" },
  { src: "/companies/jklc.jpg", label: "JKLC" },
  { src: "/companies/jlc.jpg", label: "Jaypee" },
  {
    src: "/companies/jvvnl.jpg",
    label: "JVVNL",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/kec.jpg",
    label: "KEC",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/khadi.jpg",
    label: "KVIC",
    lockupClassName: "max-w-[14rem]",
  },
  {
    src: "/companies/l-and-t.jpg",
    label: "LT",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/m-and-n.jpg",
    label: "Mahindra",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/mcf.jpg",
    label: "MCF",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/mcfr.jpg", label: "MCFR" },
  {
    src: "/companies/nbc.jpg",
    label: "NBC",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/neel.jpg",
    label: "Neel",
    lockupClassName: "max-w-[12rem]",
  },
  { src: "/companies/nfl.jpg", label: "NFL" },
  { src: "/companies/nhpc.jpg", label: "NHPC" },
  {
    src: "/companies/nirmax.jpg",
    label: "Nirmax",
    className: "h-10 sm:h-11",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/nlc.jpg", label: "NLC" },
  { src: "/companies/nrl.jpg", label: "NRL" },
  { src: "/companies/ntpc.jpg", label: "NTPC" },
  {
    src: "/companies/oji.jpg",
    label: "OJI",
    lockupClassName: "max-w-[12rem]",
  },
  { src: "/companies/pnb.jpg", label: "PNB" },
  {
    src: "/companies/public-health.jpg",
    label: "Rajasthan",
    lockupClassName: "max-w-[14rem]",
  },
  { src: "/companies/rcf.jpg", label: "RCF" },
  {
    src: "/companies/reliance.jpg",
    label: "Reliance",
    className: "h-10 sm:h-11",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/rk-marbles.jpg",
    label: "RKMarble",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/rwf.jpg",
    label: "RWF",
    lockupClassName: "max-w-[13rem]",
  },
  { src: "/companies/scl.jpg", label: "Shree" },
  {
    src: "/companies/sigma.jpg",
    label: "Sigma",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/srf.jpg",
    label: "SRF",
    className: "h-9 sm:h-10",
    lockupClassName: "max-w-[11rem]",
  },
  {
    src: "/companies/stonex.jpg",
    label: "Stonex",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/tafe.jpg",
    label: "TAFE",
    lockupClassName: "max-w-[14rem]",
  },
  {
    src: "/companies/tata.jpg",
    label: "Tata",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/thai_sumit_group.jpg",
    label: "ThaiSummit",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/thermax.jpg",
    label: "Thermax",
    lockupClassName: "max-w-[11rem]",
  },
  {
    src: "/companies/tmtl.jpg",
    label: "TMTL",
    lockupClassName: "max-w-[14rem]",
  },
  {
    src: "/companies/toyoda.jpg",
    label: "Toyoda",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/ultratech-cement.jpg",
    label: "UltraTech",
    lockupClassName: "max-w-[13rem]",
  },
  {
    src: "/companies/unido.jpg",
    label: "UNIDO",
    lockupClassName: "max-w-[14rem]",
  },
  {
    src: "/companies/vaibhav-global.jpg",
    label: "Vaibhav",
    lockupClassName: "max-w-[12rem]",
  },
  {
    src: "/companies/wonder.jpg",
    label: "Wonder",
    lockupClassName: "max-w-[12rem]",
  },
];

export const clientCells: ClientCell[] = [
  {
    kind: "copy",
    text: "We work across a broad spectrum of clients.",
  },
  ...qmsClientLogos.map(({ src, label, className, lockupClassName }) =>
    createImageCell(src, className ?? "h-8 sm:h-9", true, {
      label,
      ...(lockupClassName ? { lockupClassName } : {}),
    }),
  ),
];

export type SiteTestimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonialAvatar = "/testimonials/avatar.svg";

/** Client quotes distilled from https://www.qmsil.co.in/index.php */
export const testimonials: SiteTestimonial[] = [
  {
    id: "tmtl-ghadi",
    name: "Mr. Pradeep Ghadi",
    role: "GM, TMTL — Bhopal",
    text: "Their IMS consulting and training helped us certify—integrating IATF, EMS, and OHS for TMTL Bhopal was handled with real expertise and a positive, professional attitude.",
    image: testimonialAvatar,
  },
  {
    id: "wonder-joshi",
    name: "Piyush Joshi",
    role: "AVP (Tech Cell), M/s Wonder Cement Limited",
    text: "Strong support building our integrated management systems—deep ISO knowledge, and a team that stays positive and finishes on time.",
    image: testimonialAvatar,
  },
  {
    id: "bombardier-haldar",
    name: "Ajay Haldar",
    role: "Director, Quality — M/s Bombardier Transportation India Limited, Maneja",
    text: "They closed the gaps in our IRIS implementation to international standard—clear procedures and dependable guidance through rollout at Bombardier Transportation.",
    image: testimonialAvatar,
  },
  {
    id: "jklc-mishra",
    name: "Dr. S. K. Mishra",
    role: "DGM, EHS — M/s JK Lakshmi Cement, Durg",
    text: "QMSIL delivered our plant IMS (9001, 14001, OHSAS 18001, 50001) with a team led by Mr. Amit Lunia that was professional, knowledgeable, and a pleasure to work with.",
    image: testimonialAvatar,
  },
  {
    id: "tmtl-ghadi-design",
    name: "Mr. Pradeep Ghadi",
    role: "GM, TMTL — Bhopal",
    text: "From design through implementation, their IMS work held up in practice—ultimately what we needed for certification and internal audits.",
    image: testimonialAvatar,
  },
  {
    id: "wonder-joshi-support",
    name: "Piyush Joshi",
    role: "AVP (Tech Cell), M/s Wonder Cement Limited",
    text: "A very good experience end to end—the level of support while standing up our IMS was exactly what we hoped for.",
    image: testimonialAvatar,
  },
  {
    id: "bombardier-haldar-iris",
    name: "Ajay Haldar",
    role: "Director, Quality — M/s Bombardier Transportation India Limited, Maneja",
    text: "IRIS gaps were bridged properly—procedure formats and content reflected real subject-matter depth, not boilerplate.",
    image: testimonialAvatar,
  },
  {
    id: "jklc-mishra-future",
    name: "Dr. S. K. Mishra",
    role: "DGM, EHS — M/s JK Lakshmi Cement, Durg",
    text: "Clear, experienced leadership on site—we’re keen to collaborate again on future programmes.",
    image: testimonialAvatar,
  },
  {
    id: "tmtl-ghadi-integration",
    name: "Mr. Pradeep Ghadi",
    role: "GM, TMTL — Bhopal",
    text: "Highlights: integrating IATF, EMS, and OHS tools to our tractor-plant context—and doing it with consistency and follow-through.",
    image: testimonialAvatar,
  },
];

export const siteConfig = {
  features: [
    {
      name: "AI-Generated Quizzes",
      description:
        "Automatically generate quizzes tailored for your level and subject.",
      icon: BrainIcon,
    },
    {
      name: "On-Demand AI Explanations",
      description:
        "Get instant AI-generated explanations for every question to strengthen understanding.",
      icon: BookOpenIcon,
    },
    {
      name: "Score Tracking",
      description:
        "Monitor your quiz performance with percentage scores and detailed feedback.",
      icon: ClipboardCheckIcon,
    },
    {
      name: "Progress Overview",
      description:
        "View your quiz history, track attempts, and analyze growth over time.",
      icon: LineChartIcon,
    },
    {
      name: "Class-Specific Practice",
      description:
        "Select quizzes by subject and class level (6th to 12th) for targeted preparation.",
      icon: GraduationCapIcon,
    },
    {
      name: "Entrance Exam Mode",
      description:
        "Switch to exam prep mode for entrance-level quizzes with competitive patterns.",
      icon: UsersIcon,
    },
  ],
  hero: {
    title: "QMS India Limited",
    logo: "/brand/logo-without-branding-without-bg.svg",
    description:
      "Consulting, audits, training, industrial safety, NDT, and software—for organisations across India since 1998. Practical support that strengthens compliance, safety, and how you run day to day.",
  },
  /** Local SVGs in `/public/social` (sourced from SVGL). */
  socialLinks: [
    {
      id: "x",
      title: "X",
      url: "https://www.qmsil.co.in/",
      image: "/social/x.svg",
    },
    {
      id: "instagram",
      title: "Instagram",
      url: "https://www.qmsil.co.in/",
      image: "/social/instagram.svg",
    },
    {
      id: "facebook",
      title: "Facebook",
      url: "https://www.qmsil.co.in/",
      image: "/social/facebook.svg",
    },
  ],
  footerLinks: [
    {
      title: "Explore",
      links: [
        { id: "home", title: "Home", url: "/" },
        { id: "services", title: "Services", url: "/#services" },
        { id: "why-us", title: "Why us", url: "/#approach" },
        { id: "clientele", title: "Clientele", url: "/#clients" },
        { id: "contact", title: "Contact", url: "/#contact" },
      ],
    },
    {
      title: "What we do",
      links: [
        {
          id: "consulting",
          title: "Consulting & advisory",
          url: "/#services",
        },
        {
          id: "safety",
          title: "Industrial safety & inspection",
          url: "/#services",
        },
        {
          id: "training",
          title: "Training & development",
          url: "/#services",
        },
        {
          id: "audits",
          title: "Audits & Assessments",
          url: "/#services",
        },
        { id: "ndt", title: "NDT services", url: "/#services" },
        {
          id: "it-software",
          title: "IT & software solutions",
          url: "/#services",
        },
      ],
    },
  ],
};
