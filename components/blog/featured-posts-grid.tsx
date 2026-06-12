import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

type FeaturedPostsGridProps = {
  posts: BlogPost[];
};

export function FeaturedPostsGrid({ posts }: FeaturedPostsGridProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="rounded-3xl bg-neutral-50 shadow-xl ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:ring-white/10"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-950 dark:ring-white/10"
          >
            <div className="aspect-6/4 w-full">
              <img
                alt={post.title}
                className="h-full w-full rounded-3xl object-cover shadow-sm ring-1 shadow-black/5 ring-black/5"
                src={post.image}
              />
            </div>
            <div className="p-4">
              <p className="mb-2 inline-flex rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 ring-1 ring-black/5 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/10">
                {post.category}
              </p>
              <p className="text-lg font-medium text-balance text-neutral-800 dark:text-neutral-100">
                {post.title}
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
            </div>
          </Link>
          <div className="flex items-center justify-between gap-2 p-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  alt={post.authors[0].name}
                  className="size-5 rounded-full object-cover"
                  src={post.authors[0].avatar}
                />
                <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
                  {post.authors[0].name}
                  {post.authors.length > 1 && (
                    <span className="text-neutral-400 dark:text-neutral-500">
                      {" "}
                      +{post.authors.length - 1}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <p className="shrink-0 text-sm text-neutral-600 transition duration-200 dark:text-neutral-300">
              {post.date}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
