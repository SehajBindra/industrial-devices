import { FeaturedPostsGrid } from "@/components/blog/featured-posts-grid";
import { MorePostsGrid } from "@/components/blog/more-posts-grid";
import { featuredPosts, morePosts } from "@/lib/blog-posts";

export function BlogSection() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div>
        <div className="flex min-h-full w-full items-center justify-center">
          <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <p className="my-6 max-w-2xl text-2xl  tracking-tight text-balance text-neutral-500 md:text-4xl lg:text-5xl dark:text-neutral-200">
              Latest news and updates from <br />
              <span className="bg-linear-to-b from-primary to-primary bg-clip-text text-transparent text-shadow-md">
                Industrial Devices
              </span>
            </p>
            <FeaturedPostsGrid posts={featuredPosts} />
            <MorePostsGrid posts={morePosts} />
          </section>
        </div>
      </div>
    </div>
  );
}
