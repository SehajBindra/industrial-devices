import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.industrialdevices.in",
);

export const siteName = "Industrial Devices (India)";

export const defaultDescription =
  "Manufacturer and supplier of gas chlorination systems, chlorine dosing equipment, safety systems, chlorine dioxide generators, and water treatment solutions.";

export const defaultOgImage =
  "/hero-carousel/drinking-water-fountain-application.jpg";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
} & Omit<Metadata, "title" | "description">;

function resolveImageUrl(imagePath: string) {
  return imagePath.startsWith("http")
    ? imagePath
    : new URL(imagePath, siteUrl).toString();
}

function resolvePageUrl(path = "") {
  return path ? new URL(path, siteUrl).toString() : siteUrl.toString();
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
  ogImage = defaultOgImage,
  openGraph,
  twitter,
  alternates,
  ...rest
}: PageMetadataOptions): Metadata {
  const pageUrl = resolvePageUrl(path);
  const imageUrl = resolveImageUrl(ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      ...alternates,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      ...twitter,
    },
    ...rest,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  ...createPageMetadata({
    title: "Industrial Devices (India): Gas Chlorination & Water Treatment",
    description: defaultDescription,
    icons: {
      icon: "/product/IDI LOGO.JPG",
      apple: "/product/IDI LOGO.JPG",
    },
  }),
};
