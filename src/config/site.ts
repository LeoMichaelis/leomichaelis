const sections = {
  home: "#accueil",
  services: "#prestations",
  realizations: "#realisations",
  workshop: "#atelier",
  cv: "#cv",
  project: "#votre-projet",
  contact: "#contact",
} as const;

export const siteConfig = {
  identity: {
    name: "Léo Michaëlis",
    firstName: "LÉO",
    lastName: "MICHAËLIS",
    role: "Ingénieur logiciel",
    focus: "Produits numériques",
    location: "Aix-en-Provence, France",
  },

  contact: {
    email: "leo.michaelis@gmail.com",
    phone: "06 98 50 24 41",
    phoneHref: "+33698502441",
  },

  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    cv: "/CV.pdf",
  },

  sections,

  navigation: [
    { label: "Prestations", href: sections.services },
    { label: "Réalisations", href: sections.realizations },
    { label: "Atelier", href: sections.workshop },
    { label: "CV", href: sections.cv },
  ],
} as const;