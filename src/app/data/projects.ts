export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  stack: string[];
  featured: boolean;
  links: {
    live?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "carepath-central",
    title: "CarePath Central",
    subtitle: "Full-stack healthcare records platform",
    summary:
      "Secure role-based health records with AI OCR extraction, chatbot-assisted queries, and end-to-end doctor/patient workflows.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Flask", "Supabase", "Gemini API"],
    featured: true,
    links: {
      live: "http://localhost:8080/",
    },
  },
  {
    slug: "se-project",
    title: "Drive Hire",
    subtitle: "Full-stack ride sharing and rental platform",
    summary:
      "A Next.js application for instant rides, car rentals, and carpools with role-aware flows and map-assisted booking experiences.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Prisma", "SQLite"],
    featured: true,
    links: {
      live: "https://se-project-sable.vercel.app/login?error=Configuration",
      repo: "https://github.com/krishagr1451/SE_Project",
    },
  },
  {
    slug: "dbms-project",
    title: "Cuisine Compass",
    subtitle: "Restaurant discovery and reservation system",
    summary:
      "A PHP + MySQL project for searching restaurants by criteria and completing table reservation workflows with session-based user handling.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: false,
    links: {
      repo: "https://github.com/krishagr1451/DBMS-Project",
    },
  },
  {
    slug: "market",
    title: "Grain Merchant Manager",
    subtitle: "Tally-style ledger and reporting web app",
    summary:
      "A grain merchant business manager with protected auth, CRUD ledger transactions, auto calculations, due tracking, and dashboard analytics.",
    stack: ["Node.js", "Express", "SQLite", "HTML", "CSS", "JavaScript", "Supabase (migration-ready)"],
    featured: true,
    links: {
      live: "https://market-marb.onrender.com",
      repo: "https://github.com/krishagr1451/Market",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
