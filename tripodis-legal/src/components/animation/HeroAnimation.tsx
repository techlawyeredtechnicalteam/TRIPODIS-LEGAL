//
export const HeroAnimation = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  slideAnimation: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  }
};
