import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { experience, profile, projects, skills } from "@/lib/data";

export const metadata: Metadata = { title: "Résumé", description: `Professional résumé of ${profile.name}` };

export default function ResumePage() {
  return (
    <main className="print-page relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-12 text-slate-400 sm:px-12 sm:pt-20">
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-5">
        <Link href="/#experience" className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"><ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to portfolio</Link>
        <PrintButton />
      </div>
      <header className="border-b border-slate-700/60 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">{profile.name}</h1>
        <p className="mt-2 text-lg font-medium text-teal-300">{profile.role}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {profile.location}</span>
          <a className="inline-flex items-center gap-1.5 hover:text-teal-300" href={`mailto:${profile.email}`}><Mail size={14} /> {profile.email}</a>
          <a className="inline-flex items-center gap-1.5 hover:text-teal-300" href={profile.github}><Github size={14} /> github.com/sethnwoks</a>
          <a className="inline-flex items-center gap-1.5 hover:text-teal-300" href={profile.linkedin}><Linkedin size={14} /> LinkedIn</a>
        </div>
      </header>
      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[.14em] text-slate-200">Profile</h2>
        <p className="mt-3 text-sm leading-7">Backend and AI engineer building Python services, reliable APIs, retrieval systems, and integrations with modern AI assistants. Professional experience includes MCP integration, multi-agent workflows, and AI evaluation.</p>
      </section>
      <section className="mt-9">
        <h2 className="text-sm font-bold uppercase tracking-[.14em] text-slate-200">Experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-slate-200">{job.title} · {job.company}</h3>
              <span className="text-xs">{job.period}</span>
            </div>
            <p className="mt-2 text-sm leading-7">{job.summary}</p>
            <p className="mt-2 text-xs text-teal-300">{job.technologies.join(" · ")}</p>
          </div>
        ))}
      </section>
      <section className="mt-9">
        <h2 className="text-sm font-bold uppercase tracking-[.14em] text-slate-200">Selected projects</h2>
        {projects.filter((p) => p.slug !== "emigr8").map((project) => (
          <div className="mt-5" key={project.slug}>
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="font-semibold text-slate-200">{project.title}</h3>
              {project.github && <a className="text-xs text-teal-300 hover:underline" href={project.github}>GitHub</a>}
              {project.demo && <a className="text-xs text-teal-300 hover:underline" href={project.demo}>Live application</a>}
            </div>
            <p className="mt-1 text-sm leading-7">{project.description}</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-xs leading-6">
              {project.highlights.slice(0, 2).map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mt-9">
        <h2 className="text-sm font-bold uppercase tracking-[.14em] text-slate-200">Technical skills</h2>
        <dl className="mt-3 space-y-2 text-sm">
          {skills.map((skill) => (
            <div key={skill.label} className="grid gap-1 sm:grid-cols-[160px_1fr]">
              <dt className="font-medium text-slate-200">{skill.label}</dt>
              <dd>{skill.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mt-9">
        <h2 className="text-sm font-bold uppercase tracking-[.14em] text-slate-200">Education</h2>
        <p className="mt-3 text-sm"><strong className="font-semibold text-slate-200">University of Benin</strong> — B.Sc. Computer Science · 2024</p>
      </section>
    </main>
  );
}
