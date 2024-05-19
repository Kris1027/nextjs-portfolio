import { motion } from "framer-motion";

export default function Burger({
  setToggled,
  toggled,
}: {
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean;
}) {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="space-y-1.5 cursor-pointer z-50"
      onClick={() => setToggled((prevToggle) => !prevToggle)}
    >
      <motion.span
        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
        className="block h-0.5 w-8 bg-[var(--primary)]"
      ></motion.span>
      <motion.span
        animate={{ width: toggled ? 0 : 24 }}
        className="block h-0.5 w-6 bg-[var(--primary)]"
      ></motion.span>
      <motion.span
        animate={{
          rotateZ: toggled ? -45 : 0,
          y: toggled ? -8 : 0,
          width: toggled ? 32 : 16,
        }}
        className="block h-0.5 w-4 bg-[var(--primary)]"
      ></motion.span>
    </motion.div>
  );
}
