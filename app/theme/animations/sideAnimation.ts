export const sideAnimation = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? 200 : -200,
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.2,
    },
  }),
};
