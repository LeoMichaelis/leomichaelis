import type { PortfolioProject } from "@/types/projets";

export const projectsContent = {
  eyebrow: "Réalisations",
  title: {
    prefix: "Mon travail,",
    highlight: "sans détour.",
  },
  description: "Chaque projet est une étude de cas : un besoin, des contraintes, des choix techniques et une solution pensée pour durer.",
  keywords: ["Produits", "Données", "Ingénierie"],
  carouselHint: "Survolez une carte pour suspendre le défilement.",
} as const;

export const projects = [
  {
    id: "betlab",
    title: "BetLab",
    date: "2026 — Aujourd’hui",
    type: "Projet · Data/Modélisation",
    description:
      "Une plateforme complète de collecte, structuration et analyse de données football conçue pour détecter des opportunités statistiques sur les marchés de paris sportifs.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Machine Learning",
    ],
    theme: "betlab",
  },
  {
    id: "cuve",
    title: "La Cuve Mobile",
    date: "2026",
    type: "Produit client · Evenementiel",
    description:
      "Un produit web conçu pour présenter, organiser et commercialiser un service de location de tonneaux réfrigérants pour les événements en région PACA.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Stripe",
      "Prisma",
    ],
    theme: "cuve",
  },
  {
    id: "opensource",
    title: "Open source",
    date: "2026",
    type: "Communauté · Contribution",
    description:
      "Contribution à des outils existants, exploitation de données publiques et développement de fonctionnalités destinées à une communauté d’utilisateurs et de développeurs.",
    technologies: [
      "Git",
      "GitHub",
      "Next.js",
      "Prisma",
      "API",
    ],
    theme: "opensource",
  },
  {
    id: "aideoparieurs",
    title: "AideÔParieurs",
    date: "2020 — 2025",
    type: "Projet · Mobile App",
    description:
      "Une application consacrée à l’analyse des rencontres de football, à la lecture des statistiques et à la mise en perspective des données utiles aux parieurs.",
    technologies: [
      "SvelteKit",
      "JavaScript",
      "Node.js",
      "Scraping",
      "Statistiques",
    ],
    theme: "aideoparieurs",
  },
] satisfies PortfolioProject[];