import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog-posts";

type MorePostsGridProps = {
  posts: BlogPost[];
};

export function MorePostsGrid({ posts }: MorePostsGridProps) {
  return (
    <div className="mt-10 md:mt-14">
      <h3 className="mb-4 text-sm font-medium tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
        More posts
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-black/5 transition hover:bg-neutral-100 hover:ring-black/10 dark:bg-neutral-900/80 dark:ring-white/10 dark:hover:bg-neutral-900 dark:hover:ring-white/15"
          >
            <article>
              <div className="relative aspect-video w-full">
                <Image
                  alt={post.title}
                  src={post.image}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="rounded-2xl object-cover shadow-sm ring-1 shadow-black/5 ring-black/5 transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-3">
                <p className="mb-1.5 inline-flex rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold tracking-wide text-neutral-600 uppercase ring-1 ring-black/5 dark:bg-neutral-800 dark:text-neutral-400 dark:ring-white/10">
                  {post.category}
                </p>
                <p className="line-clamp-2 text-sm font-medium text-balance text-neutral-800 dark:text-neutral-100">
                  {post.title}
                </p>
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  {post.date}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
