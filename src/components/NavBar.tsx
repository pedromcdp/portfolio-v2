"use client";
import { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import { menuItems } from "@/utils/MenuItems";
import { useTheme } from "next-themes";

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isOpen}
      onMenuOpenChange={setIsOpen}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        />
        <NavbarBrand>
          <p className="font-medium text-xl">
            Pedro <span className="text-primary">Cruto</span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="gap-8" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="hidden sm:flex">
            <Link href={item.href} color={item.color}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            variant="light"
            aria-label="Alterar tema da página"
            isIconOnly
            className="text-primary"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href="https://linkedin.com/in/pedromcdp"
            target="_blank"
            className="flex gap-2"
          >
            <Github size={24} className="text-primary" /> GitHub
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="https://linkedin.com/in/pedromcdp"
            target="_blank"
            className="flex gap-2"
          >
            <Linkedin size={24} className="text-primary" />
            LinkedIn
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export { NavBar };
