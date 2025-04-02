type MenuItem = {
  name: string;
  url: string;
  submenu?: { name: string; url: string }[];
  description?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Corporate Design",
    url: "/corporate-design",
    submenu: [
      { name: "Logo & Label", url: "/corporate-design/logo-&-label" },
      { name: "Colors", url: "/corporate-design/colors" },
      {
        name: "Font & Typography",
        url: "/corporate-design/font-&-typography",
      },
      { name: "Brand Element", url: "/corporate-design/brand-elements" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Templates",
    url: "/templates",
    submenu: [
      {
        name: "Publc & Communication Templates",
        url: "/templates/public-and-communication-templates",
      },
      {
        name: "Pitch & Presentation Templates",
        url: "/templates/pitch-and-presentation-templates",
      },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },

  {
    name: "Image World",
    url: "/image-world",
    submenu: [
      { name: "Image Pool", url: "/image-pool" },
      { name: "Visual World", url: "/visual-world" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Online Solutions",
    url: "/online-solutions",
    submenu: [
      { name: "Web frame", url: "/image-pool" },
      { name: "Social media", url: "/visual-world" },
      { name: "E-mailing", url: "/visual-world" },
      { name: "Virtual Background", url: "/visual-world" },
      { name: "Icons", url: "/visual-world" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Brand Trainings",
    url: "/locations",
  },
  {
    name: "Employer Branding",
    url: "/employer-branding",
  },
];
