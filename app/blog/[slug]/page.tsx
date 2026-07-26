import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TableOfContents } from "@/components/table-of-contents";
import { MobileTableOfContents } from "@/components/mobile-toc";
import { AuthorCard } from "@/components/author-card";
import { ReadMoreSection } from "@/components/read-more-section";
import { PromoContent } from "@/components/promo-content";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import type { Heading } from "@/components/table-of-contents";
import { blogSlugs, getBlogPost } from "@/lib/blog-posts";
import { createPageMetadata, siteUrl } from "@/lib/site-metadata";
import type { Author } from "@/lib/authors";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const magicBlogTheme = {
  "--primary": "oklch(0.205 0 0)",
  "--primary-foreground": "oklch(0.985 0 0)",
  "--ring": "oklch(0.708 0 0)",
} as CSSProperties;

const dummySections = [
  {
    id: "system-planning-context",
    title: "System planning context",
    paragraphs: [
      "Industrial water treatment teams need equipment choices that stay reliable across changing flow conditions, seasonal demand, and stricter reporting requirements. This temporary article copy gives the page the same editorial rhythm as the Magic UI template while final technical writing is prepared.",
      "A good project starts by mapping the plant layout, available utilities, chemical storage rules, operator workflow, maintenance access, and emergency response path. Those details shape the system more than a headline capacity number.",
    ],
  },
  {
    id: "equipment-evaluation",
    title: "Equipment evaluation",
    paragraphs: [
      "Teams should compare dosage control, vacuum safety, alarm coverage, isolation points, material compatibility, commissioning needs, and spare availability before finalizing a chlorination or disinfection package.",
      "Dummy content can be swapped later for product-specific diagrams, installation photos, operating checklists, and field notes from municipal and industrial treatment facilities.",
    ],
  },
  {
    id: "implementation-notes",
    title: "Implementation notes",
    paragraphs: [
      "A phased rollout keeps risk low. Document the current process, confirm safety interlocks, train operators, and validate dosing behavior before expanding changes across additional streams or facilities.",
      "For now this section is placeholder material. It exists so the table of contents, sticky sidebar, mobile drawer, hero image, and read-more section can be reviewed using the same page structure as the source template.",
    ],
  },
];

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const path = `/blog/${slug}`;

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path,
    ogImage: post.image,
    keywords: [
      post.title,
      post.category,
      "Blog",
      "Article",
      "Water Treatment",
      "Chlorination",
      "Industrial Devices",
    ],
    authors: post.authors.map((author) => ({
      name: author.name,
    })),
    creator: post.authors[0]?.name || "Industrial Devices",
    publisher: "Industrial Devices",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: new URL(path, siteUrl).toString(),
      publishedTime: post.date,
      authors: post.authors.map((author) => author.name),
      tags: [post.category],
    },
  });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date);
  const formattedDate = formatDate(date);
  const tags = [post.category];
  const author: Author = {
    name: post.authors[0]?.name || "Industrial Devices",
    position: "Industrial Water Treatment Specialist",
    avatar: post.authors[0]?.avatar || "/testimonials/avatar.svg",
  };
  const headings: Heading[] = dummySections.map((section) => ({
    id: section.id,
    text: section.title,
    level: 2,
  }));

  return (
    <div
      className="relative left-1/2 min-h-screen w-screen -translate-x-1/2  mx-auto bg-white pt-14 sm:pt-16"
      style={magicBlogTheme}
    >
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>

      <div className="space-y-4 border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 p-6">
          <div className="flex flex-wrap items-center gap-3 gap-y-5 text-sm text-muted-foreground">
            <Button variant="outline" asChild className="h-6 w-6">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back to all articles</span>
              </Link>
            </Button>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3 text-muted-foreground">
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="h-6 w-fit px-3 text-sm font-medium bg-muted text-muted-foreground rounded-md border flex items-center justify-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <time className="font-medium text-muted-foreground">
              {formattedDate}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-muted-foreground max-w-4xl md:text-lg md:text-balance">
              {post.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex divide-x divide-border relative max-w-7xl mx-auto px-4 md:px-0 z-10">
        <div className="absolute max-w-7xl mx-auto left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-full h-full border-x border-border p-0 pointer-events-none" />
        <main className="w-full p-0 overflow-hidden">
          {/* {post.image && (
            <div className="relative w-full h-[500px] overflow-hidden object-cover border border-transparent">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )} */}
          <div className="p-6 lg:p-10">
            <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance prose-lg">
              <div className="space-y-8">
                <p className="text-lg leading-8 text-muted-foreground text-balance">
                  This is placeholder article content for the Industrial Devices
                  blog. It keeps the Magic UI blog template structure in place
                  while final engineering copy, diagrams, and field examples are
                  prepared.
                </p>

                {dummySections.map((section) => (
                  <section key={section.id} className="space-y-4">
                    <h2
                      id={section.id}
                      className="scroll-mt-8 text-2xl md:text-3xl font-semibold tracking-tight text-balance"
                    >
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="leading-8 text-muted-foreground text-balance"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ReadMoreSection currentSlug={[slug]} currentTags={tags} />
          </div>
        </main>

        <aside className="hidden lg:block w-[350px] flex-shrink-0 p-6 lg:p-10 bg-muted/60 dark:bg-muted/20">
          <div className="sticky top-20 space-y-8">
            <AuthorCard author={author} />
            <div className="border border-border rounded-lg p-6 bg-card">
              <TableOfContents headings={headings} />
            </div>
            <PromoContent variant="desktop" />
          </div>
        </aside>
      </div>

      <MobileTableOfContents headings={headings} />
    </div>
  );
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
