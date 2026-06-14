import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/lib/blog-posts";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface ReadMoreSectionProps {
  currentSlug: string[];
  currentTags?: string[];
}

export function ReadMoreSection({
  currentSlug,
  currentTags = [],
}: ReadMoreSectionProps) {
  const currentUrl = `/blog/${currentSlug.join("/")}`;

  const otherPosts = blogPosts
    .filter((post) => `/blog/${post.slug}` !== currentUrl)
    .map((post) => {
      const tags = [post.category];
      const tagOverlap = currentTags.filter((tag) => tags.includes(tag)).length;

      return {
        url: `/blog/${post.slug}`,
        data: {
          title: post.title,
          description: post.description,
          date: post.date,
          thumbnail: post.image,
        },
        relevanceScore: tagOverlap,
        date: new Date(post.date),
      };
    })
    .sort((a, b) => {
      if (a.relevanceScore !== b.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.date.getTime() - a.date.getTime();
    })
    .slice(0, 3);

  if (otherPosts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border p-0">
      <div className="p-6 lg:p-10">
        <h2 className="mb-8 text-2xl font-medium">Read more</h2>

        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => {
            const formattedDate = formatDate(post.date);

            return (
              <Link
                key={post.url}
                href={post.url}
                className="group grid cursor-pointer grid-cols-1 items-center gap-4 lg:grid-cols-12"
              >
                {post.data.thumbnail && (
                  <div className="col-span-1 shrink-0 lg:col-span-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                      <Image
                        src={post.data.thumbnail}
                        alt={post.data.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  </div>
                )}
                <div className="col-span-1 flex-1 space-y-2 lg:col-span-8">
                  <h3 className="line-clamp-2 text-lg font-semibold text-card-foreground underline-offset-4 transition-colors group-hover:text-primary group-hover:underline">
                    {post.data.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-muted-foreground underline-offset-4 group-hover:underline">
                    {post.data.description}
                  </p>
                  <time className="block text-xs font-medium text-muted-foreground">
                    {formattedDate}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
