type MenuItem = {
  name: string;
  url: string;
  submenu?: { name: string; url: string }[];
  description?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "About Us",
    url: "/about-us",
    submenu: [
      { name: "About us", url: "/about-us" },
      { name: "Our Partners", url: "/our-partners" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Services",
    url: "/services",
    submenu: [
      { name: "Services", url: "/services" },
      { name: "Our Partners", url: "/our-partners" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Experts",
    url: "/experts",
  },
  {
    name: "News & Knowledge",
    url: "/news-and-knowledge",
  },
  {
    name: "Hot Topics",
    url: "/hot-topics",
    submenu: [
      { name: "Pillar Two", url: "/pillar-two" },
      { name: "Our Partners", url: "/our-partners" },
    ],
    description:
      "We are a global network of independent professional services firms providing audit, tax and advisory services.",
  },
  {
    name: "Culture & Career",
    url: "/culture-and-career",
  },
  {
    name: "Locations",
    url: "/locations",
  },
];
