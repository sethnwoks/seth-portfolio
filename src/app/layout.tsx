import type { Metadata } from "next";
import "./globals.css";
import { Spotlight } from "@/components/spotlight";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description: `${profile.name} — ${profile.role}. Python, FastAPI, AI agents, RAG and practical backend engineering. Explore projects and case studies.`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
