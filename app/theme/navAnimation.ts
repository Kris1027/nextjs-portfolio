export const navDesktop = {
  hidden: { x: "-100vw", scale: 0, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

export const navMobile = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const navMobileItem = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
