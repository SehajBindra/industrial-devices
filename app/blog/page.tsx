import type { Metadata } from "next";

import { BlogSection } from "@/components/blog/blog-section";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Insights | Industrial Devices (India)",
  description:
    "Expert perspectives on water treatment, gas chlorination systems, and industrial solutions from the Industrial Devices team.",
  path: "/blog",
  ogImage: "/blog/optimizing-municipal-water-treatment.webp",
});

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BlogSection />
      </main>
    </div>
  );
}
