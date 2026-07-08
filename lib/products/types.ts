export type ProductSpecLabel =
  | "Capacity"
  | "MOC"
  | "Applications"
  | "Features"
  | "Standard"
  | "Availability";

export type ProductSpec = {
  label: ProductSpecLabel | (string & {});
  value: string | readonly string[];
};

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductModel = {
  id: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSize?: "default" | "large";
  images?: readonly ProductImage[];
  descriptionPoints: string[];
  specs: ProductSpec[];
  sectionHeadingId?: string;
  sectionTitle?: string;
  sectionTitleHighlight?: string;
};

export type ProductSeoHeading = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export type ProductPage = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  seoHeadings: readonly ProductSeoHeading[];
  sectionHeadingId: string;
  sectionTitle: string;
  sectionTitleHighlight: string;
  intro?: string;
  models: readonly ProductModel[];
};
