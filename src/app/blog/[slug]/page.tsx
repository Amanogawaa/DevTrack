import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, postBySlug } from "../../../data/data";

export async function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = postBySlug(slug);
  const hasImages = (blog?.images?.length ?? 0) > 0;
  const hasPdfs = (blog?.pdfs?.length ?? 0) > 0;

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-6 px-6">
      <div className="mb-12 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-8"
        >
          ← Back to home
        </Link>

        <div className="text-sm font-mono opacity-60 tracking-wider">
          {blog.date}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {blog.title}
        </h1>
      </div>

      <div className="text-lg leading-relaxed opacity-90 space-y-6">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />

        {hasImages && (
          <div className="flex flex-col gap-8 my-8">
            {blog?.images?.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-[400px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <Image
                  src={src}
                  alt={`Blog image ${idx + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        )}

        {hasPdfs && (
          <section className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest opacity-60">
              Attachments
            </div>
            <div className="space-y-6">
              {blog.pdfs?.map((href, idx) => (
                <div
                  key={href}
                  className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-black/5 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between px-4 py-3 text-sm border-b border-black/10 dark:border-white/10">
                    <span className="font-medium">PDF {idx + 1}</span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      Open in new tab
                    </a>
                  </div>
                  <iframe
                    title={`PDF ${idx + 1}`}
                    src={href}
                    className="w-full h-[520px]"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {!hasImages && !hasPdfs && (
          <div className="mt-6 rounded-xl border border-dashed border-black/20 dark:border-white/20 px-4 py-3 text-sm opacity-60">
            No media available for this post.
          </div>
        )}
      </div>

      <div className="mt-20 pt-8 border-t border-black/10 dark:border-white/10 text-center text-sm opacity-60">
        End of article
      </div>
    </article>
  );
}
