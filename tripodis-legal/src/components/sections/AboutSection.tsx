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
              Tripodis distinguishes itself from other law firms by providing
              clients with the personal attention and expertise of senior
              lawyers that are expected in the relevant areas of practice. Our
              approach to providing our clients with legal advice is innovative
              and structured to deliver functional, business savvy legal support
              that is firmly rooted in a thorough understanding of the
              applicable legal issues.
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
                {/* <motion.h3
                  variants={AboutSectionAnimation.itemVariants}
                  className="text-xl font-semibold text-slate-800 mb-4"
                >
                  Our Value
                </motion.h3> */}
                <motion.p
                  variants={AboutSectionAnimation.itemVariants}
                  className="text-blue-500"
                >
                  Our Commitment to Excellence is Unrivaled
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
