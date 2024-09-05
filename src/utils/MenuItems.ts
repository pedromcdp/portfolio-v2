interface MenuItem {
  name: string;
  href: string;
  color?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "About",
    href: "#about",
    color: "secondary",
  },
  {
    name: "Projects",
    href: "#projects",
    color: "foreground",
  },
  {
    name: "Contact",
    href: "mailto:contact@pedrocruto.pt",
  },
];

export { menuItems };
