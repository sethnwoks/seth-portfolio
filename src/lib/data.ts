/**
 * EDIT YOUR PORTFOLIO HERE.
 * Every main-page entry and contact link is defined in one place.
 * Keep descriptions, employment dates, metrics and links factually accurate.
 */
export const profile = {
  name: "Seth Nwokolo",
  role: "AI / Backend Engineer",
  tagline: "I build reliable backends and useful AI systems.",
  location: "Lagos, Nigeria",
  email: "sethnwoks5@gmail.com",
  github: "https://github.com/sethnwoks",
  linkedin: "https://www.linkedin.com/in/seth-nwokolo-194173324/",
  about: [
    "I'm a software engineer focused on the systems behind modern applications: APIs, databases, infrastructure, and AI workflows that do more than look impressive in a demo.",
    "At Bincom ICT Solutions, I contributed to eMigr8, a talent mobility platform, working on backend integrations and agent-based workflows. I built an MCP integration connecting platform capabilities to ChatGPT and Claude, supported a multi-agent system, and tested AI responses across 50+ cases.",
    "Outside professional work, I enjoy taking a problem from a rough idea to something people can actually use. Recently that's meant document intelligence, retrieval systems, and a nutrition tracker powered by natural-language input.",
  ],
  social: [
    { label: "GitHub", href: "https://github.com/sethnwoks", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seth-nwokolo-194173324/", icon: "linkedin" },
    { label: "Email", href: "mailto:sethnwoks5@gmail.com", icon: "mail" },
  ],
};

export type Experience = {
  period: string;
  title: string;
  company: string;
  subtitle?: string;
  summary: string;
  technologies: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    period: "2025 — 2026",
    title: "Python / AI Engineering Intern",
    company: "Bincom ICT Solutions",
    subtitle: "eMigr8 · Lagos, Nigeria",
    summary:
      "Built an MCP integration connecting eMigr8 capabilities with ChatGPT and Claude. Contributed to backend services supporting six-agent workflows and improved reliability through structured testing across 50+ cases. Also facilitated beginner Python learning sessions.",
    technologies: ["Python", "FastAPI", "LangGraph", "MCP", "REST APIs", "LLM Evaluation"],
    href: "/work/emigr8",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  category: string;
  eyebrow: string;
  intro: string;
  highlights: string[];
  approach: string[];
};

export const projects: Project[] = [
  {
    slug: "docintel",
    title: "DocIntel",
    description:
      "A multi-tenant document Q&A system with grounded answers, source citations, hybrid retrieval, and local reranking.",
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "RAG", "ONNX"],
    image: "/project-docintel.svg",
    imageAlt: "Stylized interface mockup of a document search application",
    github: "https://github.com/sethnwoks/DocIntel",
    category: "Personal project",
    eyebrow: "Document intelligence / retrieval",
    intro:
      "Making answers from documents more trustworthy through tenant isolation, hybrid retrieval and evaluation.",
    highlights: [
      "Designed tenant-isolated document retrieval with cited source passages.",
      "Combined BM25 and vector search with reciprocal rank fusion and local cross-encoder reranking.",
      "Built a 50-case RAG evaluation harness; reported 0.94+ faithfulness and 0.80+ answer relevancy in project testing.",
    ],
    approach: [
      "Ingestion prepares documents for search, preserving information needed to connect answers back to sources.",
      "Retrieval combines lexical matches with embedding similarity; reranking then selects stronger candidates for the answer context.",
      "Evaluations provide feedback on whether returned answers are both grounded in retrieved passages and relevant to the questions.",
    ],
  },
  {
    slug: "naijacal",
    title: "NaijaCal",
    description:
      "A nutrition tracker that turns everyday meal descriptions into structured calorie and dietary information.",
    technologies: ["Django", "OpenAI API", "Redis", "PostgreSQL", "Docker"],
    image: "/project-naijacal.svg",
    imageAlt: "Stylized interface mockup of a nutrition logging application",
    demo: "https://naijacal-frontend.onrender.com/",
    category: "Personal project",
    eyebrow: "Applied AI / full-stack systems",
    intro:
      "Natural-language meal tracking backed by a practical, database-driven application.",
    highlights: [
      "Implemented natural-language meal parsing using LLM function calling.",
      "Added API-key rotation and IP-based rate limiting to improve availability and limit abuse.",
      "Designed PostgreSQL tables and indexes for daily logging; deployed with Docker on Render.",
    ],
    approach: [
      "Users describe meals naturally instead of manually entering every field.",
      "The backend requests a structured interpretation, validates returned data, and stores meal information for daily analysis.",
      "Infrastructure includes rate limiting, environment-specific configuration, and database migrations.",
    ],
  },
  {
    slug: "emigr8",
    title: "eMigr8 · AI integrations",
    description:
      "Professional engineering contributions to an AI-powered mobility platform, including MCP connectivity and agent workflow reliability.",
    technologies: ["Python", "FastAPI", "LangGraph", "MCP", "Evaluation"],
    image: "/project-emigr8.svg",
    imageAlt: "Illustrative diagram of platform integrations and AI agents",
    category: "Professional work · Bincom",
    eyebrow: "AI integrations / agent orchestration",
    intro:
      "Connecting a real application to AI assistants while keeping backend workflows maintainable.",
    highlights: [
      "Built an MCP service exposing platform functionality to ChatGPT and Claude.",
      "Contributed to backend maintenance and a six-agent AI workflow.",
      "Helped assess response behavior and reliability across 50+ test cases.",
    ],
    approach: [
      "An integration layer gives AI clients structured access to appropriate application capabilities.",
      "Backend services support orchestration, routing, and maintainable agent workflows.",
      "Evaluation cases test behavior across common and edge-case requests, informing reliability improvements.",
    ],
  },
];

export type Note = {
  slug: string;
  year: string;
  title: string;
  summary: string;
  image: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const notes: Note[] = [
  {
    slug: "mcp-integration",
    year: "ENGINEERING NOTE",
    title: "Connecting an existing backend to AI assistants with MCP",
    summary: "What a maintainable tool interface needs beyond simply calling an LLM.",
    image: "/note-mcp.svg",
    sections: [
      {
        heading: "The actual engineering problem",
        paragraphs: [
          "An AI assistant needs a reliable, constrained way to request capabilities from an existing application. Prompts alone don't provide a stable contract for doing that.",
          "MCP offers a structured interface between the assistant and tools. The engineering effort lies in mapping existing application functions into a clear, validated surface and handling errors predictably.",
        ],
      },
      {
        heading: "What I learned building integrations",
        paragraphs: [
          "Tool descriptions, argument validation, and predictable responses matter as much as the transport itself. Separating the integration layer from business logic avoids duplicating application behavior for each AI client.",
          "Evaluating realistic requests and failure modes helps expose cases where an agent's behavior is plausible but wrong.",
        ],
      },
    ],
  },
  {
    slug: "hybrid-retrieval",
    year: "ENGINEERING NOTE",
    title: "Why I combined keyword search and embeddings in RAG",
    summary: "A practical look at retrieval, fusion, and reranking in DocIntel.",
    image: "/note-rag.svg",
    sections: [
      {
        heading: "Different searches find different evidence",
        paragraphs: [
          "Lexical search is strong when the user asks for exact identifiers or terminology. Vector search can recover passages that use different wording for the same idea. Relying on one technique means accepting its blind spots.",
          "DocIntel combines both result lists with reciprocal rank fusion before reranking candidate passages.",
        ],
      },
      {
        heading: "Evaluation closes the loop",
        paragraphs: [
          "A retrieved passage is only useful if the final answer remains grounded in it. That is why my project evaluates faithfulness and answer relevancy using repeatable test cases.",
          "The larger lesson: a retrieval feature is not complete when it returns documents; you also need ways to examine what it gets wrong.",
        ],
      },
    ],
  },
  {
    slug: "api-reliability",
    year: "ENGINEERING NOTE",
    title: "Making an LLM-powered API more resilient",
    summary: "Rate limits, provider usage, and pragmatic reliability work from NaijaCal.",
    image: "/note-api.svg",
    sections: [
      {
        heading: "Useful apps need guardrails",
        paragraphs: [
          "An LLM integration introduces cost, latency, quotas, and variable responses. A working prompt is not the same thing as a dependable application.",
          "In NaijaCal, I used key rotation, IP-based rate limiting, structured function-call outputs, and database-backed meal tracking as part of the backend design.",
        ],
      },
      {
        heading: "Reliability is an architectural habit",
        paragraphs: [
          "Treat external services as dependencies that can slow down or fail. Validate inputs and outputs, control request volume, and keep configuration out of application code.",
          "Good infrastructure work often stays invisible to users—which is exactly the point.",
        ],
      },
    ],
  },
];

export const skills = [
  { label: "Backend", items: ["Python", "FastAPI", "Django", "REST APIs", "Celery"] },
  { label: "AI & LLM", items: ["LangGraph", "MCP", "RAG", "Hybrid Search", "Reranking", "Evaluation"] },
  { label: "Data & infrastructure", items: ["PostgreSQL", "pgvector", "Redis", "Docker", "Linux", "Render"] },
];
