import React from "react";
import { motion } from "framer-motion";
import { Container, Badge } from "../ui";
import { AboutSectionAnimation } from "../animation/AboutSection";

const AboutSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={AboutSectionAnimation.containerVariants}
      className="py-16 bg-slate-50"
    >
      <Container>
        <motion.div
          variants={AboutSectionAnimation.itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div variants={AboutSectionAnimation.badgeVariants}>
              <Badge variant="success" className="mb-4">
                About Tripodis
              </Badge>
            </motion.div>
            <motion.h2
              variants={AboutSectionAnimation.itemVariants}
              className="text-3xl sm:text-4xl font-light text-slate-800 mb-6 text-justify"
            >
              Helping Clients Move Forward with Clarity and Confidence
            </motion.h2>
            <motion.p
              variants={AboutSectionAnimation.itemVariants}
              className="text-lg text-slate-600 mb-6 leading-relaxed text-justify"
            >
              At Tripodis Legal, we deliver comprehensive legal services
              designed to meet the dynamic needs of today&apos;s businesses.
              With our base in the heart of Lagos&apos; commercial center, we
              are strategically positioned to serve clients with interests
              across Nigeria and the West African sub-region. Our approach is
              driven by a commitment to excellence, professionalism, and ethical
              practice.
            </motion.p>
          </div>
          <motion.div
            variants={AboutSectionAnimation.cardVariants}
            className="relative"
          >
            <motion.div className="bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <motion.h3
                  variants={AboutSectionAnimation.itemVariants}
                  className="text-xl font-semibold text-slate-800 mb-4"
                >
                  Our Value
                </motion.h3>
                <motion.p
                  variants={AboutSectionAnimation.itemVariants}
                  className="text-gray-600"
                >
                  Excellence, professionalism, and ethical practice drive
                  everything we do at Tripodis Legal.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};
export default AboutSection;
