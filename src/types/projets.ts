export type ProjectTheme = "betlab" | "cuve" | "opensource" | "aideoparieurs";

export type PortfolioProject = {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  technologies: readonly string[];
  theme: ProjectTheme;
  href?: string;
};