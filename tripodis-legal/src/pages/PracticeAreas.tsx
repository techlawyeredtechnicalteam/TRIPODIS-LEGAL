import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Container } from "../components/ui";
import PracticeAreaCard from "./PracticeAreaCard";
import { PRACTICE_AREAS } from "../utils/constant";
import { ServicesAnimation } from "../components/animation/ServiceAnimation";

const PracticeAreaPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="pt-24 lg:pt-24"
      viewport={{ once: true, amount: 0.2 }}
      variants={ServicesAnimation.containerVariants}
    >
      {/* Hero Section */}
      <section>
        <Container size="full">
          <motion.div
            variants={ServicesAnimation.containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={ServicesAnimation.headerItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8"
            >
              Practice Areas
            </motion.h1>
            <motion.p
              variants={ServicesAnimation.headerItemVariants}
              className="text-lg sm:text-xl text-gray-800 leading-relaxed"
            >
              We provide a full range of specialized legal and business advisory
              services in various areas of the law.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <motion.section
        variants={ServicesAnimation.gridVariants}
        className="py-16 lg:py-20"
      >
        <Container size="xl">
          <motion.div
            variants={ServicesAnimation.gridVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {PRACTICE_AREAS.map((area) => (
              <motion.div variants={ServicesAnimation.cardVariants}>
                <Link to={`/${area.href}`}>
                  <PracticeAreaCard key={area.id} area={area} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.section>
    </motion.div>
  );
};

export default PracticeAreaPage;
