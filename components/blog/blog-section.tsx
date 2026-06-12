import { FeaturedPostsGrid } from "@/components/blog/featured-posts-grid";
import { MorePostsGrid } from "@/components/blog/more-posts-grid";
import { featuredPosts, morePosts } from "@/lib/blog-posts";

export function BlogSection() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div>
        <div className="flex min-h-full w-full items-center justify-center">
          <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <p className="my-6 max-w-3xl text-2xl  tracking-normal  text-balance text-neutral-500 md:text-4xl lg:text-5xl dark:text-neutral-200">
              Latest Insights & Updates from <br />
              <span className="text-primary mt-1  text-shadow-md">
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
