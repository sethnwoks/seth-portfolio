import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notes } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  return { title: note?.title ?? "Engineering note", description: note?.summary };
}
export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();
  return (
    <main className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <Link href="/#writing" className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200">
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to writing
      </Link>
      <header className="mt-14">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">{note.year}</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-200 sm:text-5xl">{note.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">{note.summary}</p>
      </header>
      <img src={note.image} alt="" width={1200} height={720} className="mt-10 aspect-[2/1] w-full rounded-lg border border-slate-700/50 object-cover" />
      <article className="prose-detail mt-12 text-[15px] text-slate-400">
        {note.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>
      <Link href="/#writing" className="mt-16 inline-flex items-center gap-2 border-t border-slate-700/60 pt-7 text-sm font-semibold text-teal-300 hover:text-teal-200"><ArrowLeft size={16} /> All notes</Link>
    </main>
  );
}
