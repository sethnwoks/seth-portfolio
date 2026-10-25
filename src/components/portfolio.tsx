"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
} from "lucide-react";
import { experience, notes, profile, projects } from "@/lib/data";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
] as const;

type SectionId = (typeof sections)[number]["id"];

function SocialIcon({ icon }: { icon: string }) {
  const common = { size: 23, strokeWidth: 1.9 };
  if (icon === "github") return <Github {...common} />;
  if (icon === "linkedin") return <Linkedin {...common} />;
  return <Mail {...common} />;
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-teal-400/10 px-3 py-1 text-[11px] font-medium leading-5 text-teal-300 sm:text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-7 flex items-center text-sm font-bold uppercase tracking-widest2 text-slate-200 lg:sr-only">
      {children}
    </h2>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const trigger = window.innerHeight * 0.32;
      let current: SectionId = "about";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= trigger) current = section.id;
      }
      // The final nav item remains active near the bottom, including short viewports.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 45) {
        current = "writing";
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#content"
        className="sr-only fixed left-4 top-4 z-50 rounded bg-teal-300 px-4 py-3 font-semibold text-slate-900 focus:not-sr-only"
      >
        Skip to content
      </a>
      <div className="relative z-10 mx-auto min-h-screen max-w-[1320px] px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:justify-between lg:gap-12 lg:px-24 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[46%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-[2.65rem] font-bold tracking-[-0.045em] text-slate-200 sm:text-5xl lg:text-[3rem] xl:text-[3.35rem]">
              {profile.name}
            </h1>
            <h2 className="mt-3 text-[1.15rem] font-medium tracking-tight text-slate-200 sm:text-xl">
              {profile.role}
            </h2>
            <p className="mt-4 max-w-[19rem] text-base leading-relaxed text-slate-400">
              {profile.tagline}
            </p>
            <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
              <ul className="w-max space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setActive(section.id)}
                      className={`nav-item group flex w-max items-center gap-4 py-3 text-slate-500 ${active === section.id ? "active" : ""}`}
                      aria-current={active === section.id ? "location" : undefined}
                    >
                      <span className="nav-line" />
                      <span className="nav-label transition-colors">{section.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ul className="mt-9 flex items-center gap-5 text-slate-400 lg:mt-0" aria-label="Social links">
            {profile.social.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex items-center justify-center transition-all hover:-translate-y-0.5 hover:text-slate-200"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <main id="content" className="pt-20 lg:w-[54%] lg:min-w-0 lg:py-24">
          <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
            <h2 id="about-heading" className="mb-7 text-sm font-bold uppercase tracking-widest2 text-slate-200 lg:sr-only">
              About
            </h2>
            <div className="max-w-prose space-y-5 text-[15px] leading-[1.85] text-slate-400 sm:text-base">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="experience" aria-labelledby="experience-heading" className="mt-28 scroll-mt-24 sm:mt-36">
            <h2 id="experience-heading" className="mb-5 text-sm font-bold uppercase tracking-widest2 text-slate-200 lg:sr-only">
              Experience
            </h2>
            <ol className="interactive-list space-y-3">
              {experience.map((job) => (
                <li key={job.title + job.company} className="interactive-card">
                  <div className="card-surface group relative grid gap-2 rounded-md p-5 sm:grid-cols-[118px_1fr] sm:gap-5 lg:-mx-5">
                    <header className="pt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-500 sm:text-xs">
                      {job.period}
                    </header>
                    <div>
                      <h3 className="card-headline text-[15px] font-medium leading-snug text-slate-200">
                        {job.href?.startsWith("http") ? (
                          <a
                            href={job.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-hit-area group/link inline-flex items-start gap-1"
                          >
                            {job.title} · {job.company}
                            <ArrowUpRight className="mt-[1px] shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" size={17} />
                          </a>
                        ) : job.href ? (
                          <Link href={job.href} className="card-hit-area group/link inline-flex items-start gap-1">
                            {job.title} · {job.company}
                            <ArrowUpRight className="mt-[1px] shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" size={17} />
                          </Link>
                        ) : (
                          `${job.title} · ${job.company}`
                        )}
                      </h3>
                      {job.subtitle && <p className="mt-1 text-sm text-slate-500">{job.subtitle}</p>}
                      <p className="mt-3 text-[13px] leading-[1.75] text-slate-400 sm:text-sm">{job.summary}</p>
                      <TechTags tags={job.technologies} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/resume"
              className="group/link mt-10 inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium text-slate-200 transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              View Full Résumé <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
          </section>

          <section id="projects" aria-labelledby="projects-heading" className="mt-28 scroll-mt-24 sm:mt-36">
            <h2 id="projects-heading" className="mb-5 text-sm font-bold uppercase tracking-widest2 text-slate-200 lg:sr-only">
              Projects
            </h2>
            <ul className="interactive-list space-y-5">
              {projects.map((project) => (
                <li key={project.slug} className="interactive-card">
                  <article className="card-surface group relative grid gap-4 rounded-md p-5 sm:grid-cols-[118px_1fr] sm:gap-5 lg:-mx-5">
                    <div className="order-2 sm:order-1">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        width="240"
                        height="145"
                        className="aspect-[1.55] w-[176px] rounded border-2 border-slate-200/10 object-cover transition-colors group-hover:border-slate-200/30 sm:w-full"
                      />
                    </div>
                    <div className="order-1 sm:order-2">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{project.category}</p>
                      <h3 className="card-headline text-[15px] font-medium leading-snug text-slate-200">
                        <Link href={`/work/${project.slug}`} className="card-hit-area group/link inline-flex items-center gap-1">
                          {project.title}
                          <ArrowUpRight size={17} className="shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      </h3>
                      <p className="mt-3 text-[13px] leading-[1.75] text-slate-400 sm:text-sm">{project.description}</p>
                      {(project.github || project.demo) && (
                        <div className="mt-3 flex flex-wrap items-center gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-secondary-link inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-teal-300"
                            >
                              <Github size={13} /> Code <ExternalLink size={12} />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-secondary-link inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-teal-300"
                            >
                              <ExternalLink size={13} /> Live demo
                            </a>
                          )}
                        </div>
                      )}
                      <TechTags tags={project.technologies} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-10 inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium text-slate-200 transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              Explore More on GitHub <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          </section>

          <section id="writing" aria-labelledby="writing-heading" className="mt-28 scroll-mt-24 sm:mt-36">
            <h2 id="writing-heading" className="mb-5 text-sm font-bold uppercase tracking-widest2 text-slate-200 lg:sr-only">
              Writing
            </h2>
            <ul className="interactive-list space-y-5">
              {notes.map((note) => (
                <li key={note.slug} className="interactive-card">
                  <article className="card-surface group relative grid gap-4 rounded-md p-5 sm:grid-cols-[118px_1fr] sm:gap-5 lg:-mx-5">
                    <img
                      src={note.image}
                      alt=""
                      width="240"
                      height="145"
                      loading="lazy"
                      className="aspect-[1.55] w-[176px] rounded border border-slate-200/10 object-cover sm:w-full"
                    />
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{note.year}</div>
                      <h3 className="card-headline text-[15px] font-medium leading-snug text-slate-200">
                        <Link href={`/notes/${note.slug}`} className="card-hit-area group/link inline-flex items-start gap-1">
                          {note.title}
                          <ArrowUpRight size={17} className="mt-[1px] shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{note.summary}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-24 border-t border-slate-700/40 pt-9 sm:mt-32">
            <div className="flex items-center gap-2 text-slate-200">
              <Mail size={18} className="text-teal-300" />
              <h2 className="font-semibold">Let’s build something useful.</h2>
            </div>
            <p className="mt-3 max-w-md text-sm leading-7">
              Open to backend and AI engineering opportunities, collaborations, and conversations about building reliable software.
            </p>
            <a
              href={`mailto:${profile.email}?subject=Hello%20Seth`}
              className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              Say hello <ArrowRight size={17} className="transition-transform group-hover/link:translate-x-1" />
            </a>
          </section>

          <footer className="pb-8 pt-16 text-xs leading-6 text-slate-500 sm:pt-20">
            <p className="max-w-md">
              Built with Next.js &amp; Tailwind CSS. Design inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-400 hover:text-teal-300"
              >
                Brittany Chiang
              </a>
              .
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400">
              <Link className="hover:text-teal-300" href="/resume"><FileText size={13} className="mr-1 inline" /> Résumé</Link>
              <a className="hover:text-teal-300" href={profile.github}><Github size={13} className="mr-1 inline" /> GitHub</a>
              <a className="hover:text-teal-300" href={`mailto:${profile.email}`}><Mail size={13} className="mr-1 inline" /> Email</a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
