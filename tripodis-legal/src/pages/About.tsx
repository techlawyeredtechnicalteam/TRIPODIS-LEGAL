import React from "react";
import { FiAward } from "react-icons/fi";
import { MdShield } from "react-icons/md";
import { Card, Container } from "../components/ui";
import { motion, useReducedMotion } from "framer-motion";
import { PiLightbulbThin } from "react-icons/pi";

// animation variants
const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
    }
  }
} as const;

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
} as const;

const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
} as const;

const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
} as const;

const AboutUsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      title: "We Think Differently",
      description:
        "Like you, we believe that your transaction is unique. We bring new and original thinking to the varying range of complexity in the legal and regulatory challenges that our clients face and to the way that Fides operates.",
      icon: FiAward,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "We are Competent",
      description:
        "Our lawyers are qualified in various jurisdictions and decades of specialization in the relevant areas of practice with the leading national and international firms. We offer a rich blend of experience and proven ability in our areas of expertise to provice clients with the best insight and advice.",
      icon: MdShield,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "We are Fides",
      description:
        "Rooted in our name is the assurance that you can rely on us. We ensure that the personal attention and experience of our senior lawyers are available to you at all times.",
      icon: PiLightbulbThin,
      color: "bg-blue-500/20 text-blue-400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Split Layout */}
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Image */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden"
        >
          <img
            src="/logo-2.jpg"
            alt="Lagos commercial center skyline"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Logo/Brand Overlay */}
          <motion.div
            className="lg:absolute lg:bottom-8 lg:left-8 hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-black">TRIPODIS LEGAL</h2>
              <p className="text-gray-700 text-sm">Lagos Commercial Center</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
            >
              Why Tripodis?
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Tripodis distinguishes itself from other law firms by providing
              clients with the personal attention and expertise of senior
              lawyers that are expected in the relevant areas of practice. Our
              approach to providing our clients with legal advice is innovative
              and structured to deliver functional, business savvy legal support
              that is firmly rooted in a thorough understanding of the
              applicable legal issues.
            </motion.p>
            <motion.p
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="text-gray-800 leading-relaxed mb-4 text-justify text-base sm:text-lg md:text-xl"
            >
              We adopt a flexible and result oriented approach to billing. Our
              fees are reflective of the level of expertise and value that we
              bring to every transaction. We are nevertheless competitive,
              willing to adopt risk-sharing remuneration and offer flexible
              billing structures that are negotiated and structured to suit each
              transaction.
            </motion.p>
            <motion.p
              className="text-blue-500 leading-relaxed text-justify text-base sm:text-lg md:text-xl"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              Our Commitment to Excellence is Unrivaled.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <motion.section
        className="py-8 md:py-12 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <Container>
          <motion.div
            className="text-center md-12 md:mb-16"
            variants={fadeInUpVariants}
          >
            <motion.h2
              className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
              variants={fadeInUpVariants}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
              variants={fadeInUpVariants}
            >
              Our Commitment to Excellence is Unrivaled
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainerVariants}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="h-full flex"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    initial="rest"
                    className="flex-1"
                  >
                    <Card
                      hover
                      className="p-8 text-center h-full flex flex-col"
                    >
                      <motion.div
                        className="flex justify-center mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.2,
                          ease: "easeOut"
                        }}
                      >
                        <motion.div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center ${value.color}`}
                          animate={shouldReduceMotion ? {} : "animate"}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>
                      </motion.div>
                      <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-700 leading-relaxed text-justify flex-1 text-sm sm:text-base md:text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        {value.description}
                      </motion.p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;
