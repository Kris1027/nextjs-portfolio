import { navMobile, navMobileItem } from "@/app/theme/animations/navAnimation";
import { motion } from "framer-motion";
import { NaviLinksProps } from "./navigation";

export default function MobileMenu({
  links,
  setToggled,
}: {
  links: NaviLinksProps["links"];
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.ul
      className="fixed flex flex-col justify-center gap-24 items-center bg-[var(--background)] text-[var(--primary)] bottom-0 left-0 w-full h-screen text-4xl z-40"
      variants={navMobile}
      animate="visible"
      initial="hidden"
    >
      {links.map((link) => (
        <motion.li
          className="font-bold"
          key={link.href}
          variants={navMobileItem}
          whileHover={{ scale: 1.3 }}
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <a href={link.href} aria-label={link.ariaLabel}>
            {link.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
