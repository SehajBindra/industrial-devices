export type Author = {
  name: string;
  avatar: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  authors: Author[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  // Featured posts (3)
  {
    id: "1",
    slug: "revolutionizing-water-treatment-iot",
    title: "Revolutionizing Water Treatment with IoT Integration",
    description:
      "Discover how the integration of IoT sensors enables real-time monitoring, predictive maintenance, and optimized chlorine dosing for municipal water systems.",
    category: "Technology",
    date: "June 2, 2026",
    image: "/blog/revolutionizing-water-treatment-iot.webp",
    authors: [
      {
        name: "Rajesh Kumar",
        avatar: "/testimonials/avatar.svg",
      },
      {
        name: "Priya Sharma",
        avatar: "/testimonials/avatar.svg",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "sustainable-chlorination-practices-2026",
    title: "Sustainable Chlorination Practices in 2026",
    description:
      "A look at the newest sustainable approaches that are shaping environmentally responsible water treatment operations across industries.",
    category: "Sustainability",
    date: "April 14, 2026",
    image: "/blog/sustainable-chlorination-practices-2026.webp",
    authors: [
      {
        name: "Anita Desai",
        avatar: "/testimonials/avatar.svg",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "gas-chlorination-systems-scaling",
    title: "Gas Chlorination: Scaling for Industrial Applications",
    description:
      "Explore practical strategies to optimize and deploy gas chlorination systems for large-scale industrial facilities, ensuring safety and efficiency.",
    category: "Industry",
    date: "March 28, 2026",
    image: "/blog/gas-chlorination-systems-scaling.webp",
    authors: [
      {
        name: "Vikram Singh",
        avatar: "/testimonials/avatar.svg",
      },
      {
        name: "Meera Patel",
        avatar: "/testimonials/avatar.svg",
      },
    ],
    featured: true,
  },
  // More posts (12)
  {
    id: "4",
    slug: "advanced-safety-protocols-chlorine-handling",
    title: "Advanced Safety Protocols for Chlorine Handling",
    description:
      "Comprehensive guide to implementing world-class safety measures for chlorine storage and handling in treatment facilities.",
    category: "Safety",
    date: "Feb 17, 2026",
    image: "/blog/advanced-safety-protocols-chlorine-handling.webp",
    authors: [
      {
        name: "Dr. Amit Shah",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "5",
    slug: "chlorine-dioxide-real-world-applications",
    title: "Chlorine Dioxide Generators: Real-World Use-Cases",
    description:
      "Exploring how chlorine dioxide generators are transforming water treatment across municipal and industrial sectors.",
    category: "Case Study",
    date: "Jan 21, 2026",
    image: "/blog/chlorine-dioxide-real-world-applications.webp",
    authors: [
      {
        name: "Neha Gupta",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "6",
    slug: "ai-powered-dosing-systems",
    title: "Enhancing Efficiency with AI-Powered Dosing",
    description:
      "How artificial intelligence is revolutionizing chlorine dosing accuracy and reducing chemical waste.",
    category: "Technology",
    date: "Dec 11, 2025",
    image: "/blog/ai-powered-dosing-systems.webp",
    authors: [
      {
        name: "Arjun Mehta",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "7",
    slug: "optimizing-municipal-water-treatment",
    title: "Optimizing Municipal Water Treatment with Modern Tooling",
    description:
      "Best practices for upgrading municipal water treatment infrastructure with latest technologies.",
    category: "Municipal",
    date: "Nov 15, 2025",
    image: "/blog/optimizing-municipal-water-treatment.webp",
    authors: [
      {
        name: "Kavitha Rao",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "8",
    slug: "industrial-water-recycling-2026",
    title: "Industrial Water Recycling in 2026: Best Practices",
    description:
      "A comprehensive guide to implementing effective water recycling systems in industrial environments.",
    category: "Sustainability",
    date: "Oct 23, 2025",
    image: "/blog/industrial-water-recycling-2026.webp",
    authors: [
      {
        name: "Suresh Iyer",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "9",
    slug: "from-blueprint-to-installation",
    title: "From Blueprint to Installation: Complete Guide",
    description:
      "Step-by-step walkthrough of planning and installing gas chlorination systems for new facilities.",
    category: "Guide",
    date: "Sep 14, 2025",
    image: "/blog/from-blueprint-to-installation.webp",
    authors: [
      {
        name: "Deepak Verma",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "10",
    slug: "zero-downtime-maintenance",
    title: "Zero-Downtime Maintenance: Simplify Operations",
    description:
      "Strategies for maintaining chlorination equipment without interrupting water treatment operations.",
    category: "Operations",
    date: "Aug 30, 2025",
    image: "/blog/zero-downtime-maintenance.webp",
    authors: [
      {
        name: "Ravi Krishnan",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
  {
    id: "11",
    slug: "compliance-standards-water-treatment",
    title: "Compliance Standards: Navigate Regulations",
    description:
      "Understanding and meeting national and international water treatment compliance requirements.",
    category: "Compliance",
    date: "Jul 18, 2025",
    image: "/blog/compliance-standards-water-treatment.webp",
    authors: [
      {
        name: "Lakshmi Nair",
        avatar: "/testimonials/avatar.svg",
      },
    ],
  },
];

export const featuredPosts = blogPosts.filter((post) => post.featured);
export const morePosts = blogPosts.filter((post) => !post.featured);
export const blogSlugs = blogPosts.map((post) => post.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
