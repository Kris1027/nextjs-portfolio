"use client";
import { useState } from "react";
import { useMediaQuery } from "../../util/useMediaQuery";
import { ThemeSwitcher } from "./themeSwitcher";
import Burger from "./burger";
import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";

export type NaviLinksProps = {
  links: { href: string; text: string; ariaLabel: string }[];
};

export default function Navigation() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  const links = [
    { href: "#about", text: "About", ariaLabel: "About" },
    { href: "#skills", text: "Skills", ariaLabel: "Skills" },
    { href: "#projects", text: "Projects", ariaLabel: "Projects" },
    { href: "#courses", text: "Courses", ariaLabel: "Courses" },
    { href: "#contact", text: "Contact", ariaLabel: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-[var(--background)] text-[var(--primary)] fixed w-full z-40">
      {matches && <DesktopMenu links={links} />}
      <ThemeSwitcher />
      {!matches && <Burger setToggled={setToggled} toggled={toggled} />}
      {toggled && !matches && (
        <MobileMenu links={links} setToggled={setToggled} />
      )}
    </nav>
  );
}
