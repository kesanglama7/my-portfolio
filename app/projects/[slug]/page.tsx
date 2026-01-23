// app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen px-4 sm:px-6 py-10 mt-[10vh]">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Work
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>

        {project.meta && (
          <p className="mt-2 text-sm text-muted-foreground">{project.meta}</p>
        )}

        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-2xl border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            quality={70}
            priority
          />
        </div>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {project.overview ?? project.shortDescription}
            </p>

            {project.gallery?.length ? (
              <>
                <h2 className="mt-10 text-lg font-semibold">Gallery</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <aside className="rounded-2xl border p-5 h-fit">
            <h2 className="text-lg font-semibold">Details</h2>

            {project.role && (
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="mt-1 text-sm">{project.role}</p>
              </div>
            )}

            {project.stack?.length ? (
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-full border bg-background"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {(project.github || project.live) && (
              <div className="mt-6 flex flex-col gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-muted transition"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-muted transition"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            )}
          </aside>
        </section>
      </div>
    </main>
  );
}
