import { navDesktop } from "@/app/theme/navAnimation";
import { motion } from "framer-motion";

export default function DesktopMenu({
  links,
}: {
  links: { href: string; text: string }[];
}) {
  return (
    <motion.ul
      className="flex text-2xl gap-16"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {links.map((link) => (
        <motion.li
          className="font-bold"
          key={link.href}
          variants={navDesktop}
          animate="visible"
          initial="hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={link.href}>{link.text}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
