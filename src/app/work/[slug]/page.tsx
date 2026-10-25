import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Mail } from "lucide-react";
import { projects, profile } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project", description: project?.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to projects
      </Link>
      <div className="mt-14">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">{project.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{project.intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">{tech}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-200">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-teal-300">
              <Github size={17} /> Source code <ArrowUpRight size={14} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-teal-300">
              <ExternalLink size={17} /> Open live demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      <img
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={720}
        className="mt-12 w-full rounded-lg border border-slate-700/50 bg-slate-900/80"
      />
      <article className="prose-detail mt-12 text-[15px] text-slate-400">
        <h2>Overview</h2>
        <p>{project.description}</p>
        <h2>What I worked on</h2>
        <ul>{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <h2>Engineering approach</h2>
        {project.approach.map((p) => <p key={p}>{p}</p>)}
        {project.slug === "emigr8" && (
          <p className="mt-8 rounded-md border border-slate-700/50 bg-slate-800/30 p-4 text-sm italic">
            Professional work at Bincom ICT Solutions. This overview covers my contributions at a high level; private company code and internal details are not published.
          </p>
        )}
      </article>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-slate-700/60 pt-8 text-sm">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"><ArrowLeft size={16} /> All projects</Link>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300"><Mail size={16} /> Contact me</a>
      </div>
    </main>
  );
}
