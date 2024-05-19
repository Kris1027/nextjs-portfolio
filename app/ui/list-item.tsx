import { Variants, motion } from "framer-motion";

type ListItemProps = {
  children: React.ReactNode;
  id: number;
  variants: Variants;
};

export default function ListItem({ children, id, variants }: ListItemProps) {
  return (
    <motion.li
      className="bg-[var(--background)] p-2 tablet:p-4 rounded-lg shadow-md shadow-[var(--secondary)] hover:scale-105 flex flex-col gap-5 justify-between"
      variants={variants}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
    >
      {children}
    </motion.li>
  );
}
