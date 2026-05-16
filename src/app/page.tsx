import Image from "next/image";
import Link from "next/link";
import { POST_CATEGORIES, postsInCategory } from "../data/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 ">
      <section className="space-y-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Thoughts, ideas, and minimalist design.
        </h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Welcome to my digital garden. A place where I share my thoughts about
          software, design, and aesthetics.
        </p>
      </section>

      <div className="flex flex-col gap-16">
        {POST_CATEGORIES.map((category) => {
          const posts = postsInCategory(category);
          if (posts.length === 0) return null;

          return (
            <section key={category} className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight border-b border-black/10 dark:border-white/10 pb-4">
                {category}s
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((blog) => (
                  <Link
                    href={`/blog/${blog.slug}`}
                    key={blog.id}
                    className="group relative block h-full"
                  >
                    <article className="h-full flex flex-col p-6 rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300">
                      <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                        {blog.images && blog.images.length > 0 ? (
                          <Image
                            src={blog.images[0]}
                            alt={blog.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : blog.pdfs && blog.pdfs.length > 0 ? (
                          <div className="flex h-full w-full items-center justify-center text-xs font-mono uppercase tracking-[0.2em] opacity-60">
                            PDF x{blog.pdfs.length}
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs font-mono uppercase tracking-[0.2em] opacity-40">
                            No media
                          </div>
                        )}
                        {blog.pdfs && blog.pdfs.length > 0 && (
                          <span className="absolute right-3 top-3 rounded-full border border-black/20 dark:border-white/20 bg-white/70 dark:bg-black/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                            PDF {blog.pdfs.length}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="text-xs font-mono opacity-60 tracking-wider">
                          {blog.date}
                        </div>
                        <h3 className="text-xl font-semibold leading-tight group-hover:underline underline-offset-4 decoration-1">
                          {blog.title}
                        </h3>
                        <p className="text-sm opacity-80 leading-relaxed display-webkit-box line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-sm font-medium flex items-center justify-between">
                        <span>Read article</span>
                        <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                          →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
