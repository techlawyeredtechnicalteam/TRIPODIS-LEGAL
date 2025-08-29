//
export const FooterAnimation = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  } as const,

  itemVariants: {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const,

  badgeVariants: {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  } as const,

  socialIconVariants: {
    rest: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  } as const,

  linkVariants: {
    rest: {
      x: 0,
      color: "inherit"
    },
    hover: {
      x: 4,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  } as const
};
