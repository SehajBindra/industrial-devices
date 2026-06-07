import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageContent } from "@/components/landing/product-page-content";
import { getProductPage, productSlugs } from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductPage(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
  };
}

export default async function ProductSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductPage(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <ProductPageContent product={product} />
    </div>
  );
}
