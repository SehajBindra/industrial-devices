import type { Metadata } from "next";
import { BlogSection } from "@/components/blog/blog-section";

export const metadata: Metadata = {
  title: "Blog & Insights | Industrial Devices (India)",
  description:
    "Expert perspectives on water treatment, gas chlorination systems, and industrial solutions from the Industrial Devices team.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BlogSection />
      </main>
    </div>
  );
}
