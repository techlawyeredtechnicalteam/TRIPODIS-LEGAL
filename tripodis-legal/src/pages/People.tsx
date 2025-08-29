import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container, Card, Button } from "../components/ui";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "../utils/constant";
import { Link } from "react-router";
import type { TeamMember } from "../types/People";

//animation
const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
} as const;

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
} as const;

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
} as const;

const teamGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
} as const;

const teamMemberVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
} as const;

const ctaCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
} as const;

const buttonVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 20px 25px -5px rgb(59 130 246 / 0.25), 0 10px 10px -5px rgb(59 130 246 / 0.1)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
} as const;

// TeamMemberCard wrapper with animation
const AnimatedTeamMemberCard: React.FC<{
  member: TeamMember;
  index: number;
}> = ({ member, index }) => {
  return (
    <motion.div variants={teamMemberVariants} className="h-full flex">
      <TeamMemberCard member={member} index={index} />
    </motion.div>
  );
};

const People: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="pt-20 lg:pt-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
      >
        <Container size="full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8"
              variants={heroTextVariants}
            >
              Our People
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-800 leading-relaxed"
              variants={heroTextVariants}
              transition={{ delay: 0.2 }}
            >
              At Tripodis Legal, our lawyers are well experienced and trained to
              understand your business objectives in order to render legally
              sound and practical advice.
            </motion.p>
          </div>
        </Container>
      </motion.section>

      {/* Team Grid Section */}
      <motion.section
        className="py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={teamGridVariants}
      >
        <Container size="full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={teamGridVariants}
          >
            {teamMembers.map((member, index) => (
              <AnimatedTeamMemberCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </motion.div>
        </Container>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainerVariants}
      >
        <Container size="md">
          <motion.div variants={ctaCardVariants}>
            <Card className="p-8 lg:p-12 text-center">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
                variants={fadeInUpVariants}
              >
                Ready to work with our team?
              </motion.h2>
              <motion.p
                className="text-lg text-gray-800 mb-8"
                variants={fadeInUpVariants}
              >
                Contact us today to discuss how our experienced legal
                professionals can help with your business objectives.
              </motion.p>
              <motion.div variants={fadeInUpVariants}>
                <Link to="/contact-section">
                  <motion.div
                    variants={buttonVariants}
                    initial="rest"
                    whileHover={shouldReduceMotion ? {} : "hover"}
                    whileTap={shouldReduceMotion ? {} : "tap"}
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 hover:shadow-blue-500/25 cursor-pointer"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </Card>
          </motion.div>
        </Container>
      </motion.section>
    </div>
  );
};

export default People;
