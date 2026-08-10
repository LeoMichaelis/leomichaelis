export type ParcoursItemType = "experience" | "education";
export type ParcoursAccent = "violet" | "indigo" | "cyan";
export type ParcoursIcon = "database" | "radioTower" | "braces" | "code" | "workflow" | "graduation";

export type ParcoursItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  type: ParcoursItemType;
  icon: ParcoursIcon;
  technologies: readonly string[];
  accent: ParcoursAccent;
};