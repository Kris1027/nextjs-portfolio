import { Variants, motion } from "framer-motion";

type ListItemProps = {
  children: React.ReactNode;
  id: number;
  variants: Variants;
};

export default function ListItem({ children, id, variants }: ListItemProps) {
  return (
    <motion.li
      className="bg-stone-100 dark:bg-stone-950 text-secondary dark:text-stone-100 p-2 tablet:p-4 rounded-lg shadow-xl dark:shadow-none hover:scale-105 flex flex-col gap-5 justify-between"
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
