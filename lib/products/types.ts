export type ProductSpecLabel =
  | "Capacity"
  | "MOC"
  | "Applications"
  | "Features"
  | "Standard"
  | "Availability";

export type ProductSpec = {
  label: ProductSpecLabel | (string & {});
  value: string;
};

export type ProductModel = {
  id: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  descriptionPoints: string[];
  specs: ProductSpec[];
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
