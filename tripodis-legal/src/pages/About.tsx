import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card, Container } from "../components/ui";
import { TbTargetArrow } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { PiScales, PiLightbulbThin } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import { MdShield } from "react-icons/md";

// Performance-optimized animation variants
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

const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -40
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

const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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

  const stats = [
    {
      icon: TbTargetArrow,
      label: "Strategic Location",
      value: "Lagos",
      color: "text-blue-400"
    },
    {
      icon: CiUser,
      label: "Regional Coverage",
      value: "West Africa",
      color: "text-blue-400"
    },
    {
      icon: PiScales,
      label: "Legal Expertise",
      value: "Comprehensive",
      color: "text-blue-400"
    },
    {
      icon: FiAward,
      label: "Service Focus",
      value: "Business Growth",
      color: "text-blue-400"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in all our legal services, ensuring quality outcomes for every client.",
      icon: FiAward,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Professionalism",
      description:
        "Our approach is grounded in professional integrity and adherence to the highest ethical standards.",
      icon: MdShield,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Practical Innovation",
      description:
        "We view law as a practical tool for business growth, not just theoretical exercise.",
      icon: PiLightbulbThin,
      color: "bg-blue-500/20 text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="min-h-[70vh] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Image */}
        <motion.div
          className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg text-gray-800 leading-relaxed mb-6 text-justify"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              At Tripodis Legal, we deliver comprehensive legal services
              designed to meet the dynamic needs of today&apos;s businesses.
              With our base in the heart of Lagos' commercial center, we are
              strategically positioned to serve clients with interests across
              Nigeria and the West African sub-region.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed text-justify"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Our approach is driven by a commitment to excellence,
              professionalism, and ethical practice.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Section */}
      <motion.section
        className="py-10 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <motion.div variants={slideInLeftVariants}>
              <motion.p
                className="text-blue-500 font-medium mb-4"
                variants={fadeInUpVariants}
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8"
                variants={fadeInUpVariants}
              >
                Practical Legal Solutions
              </motion.h2>
              <motion.div
                className="flex items-center space-x-4 mb-6"
                variants={fadeInUpVariants}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"
                  animate={shouldReduceMotion ? {} : "animate"}
                >
                  <TbTargetArrow className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Strategic Partnership
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Trusted partner for business growth
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6" variants={slideInRightVariants}>
              <motion.div variants={scaleInVariants}>
                <Card className="p-6">
                  <p className="text-gray-800 leading-relaxed mb-4 text-justify">
                    Rather than viewing law as a theoretical exercise, we see it
                    as a{" "}
                    <motion.span
                      className="text-gray-700 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      practical tool for business growth and risk management
                    </motion.span>
                    . We work closely with companies and individuals to provide
                    tailored legal support that aligns with their strategic
                    goals.
                  </p>

                  <p className="text-gray-800 leading-relaxed">
                    Whether navigating complex regulations or identifying
                    emerging opportunities,{" "}
                    <motion.span
                      className="text-blue-500 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      Tripodis Legal is a trusted partner
                    </motion.span>{" "}
                    in helping clients move forward with clarity and confidence.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainerVariants}
      >
        <Container>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainerVariants}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUpVariants}>
                  <Card className="p-6 text-center h-full">
                    <motion.div
                      className="flex justify-center mb-4"
                      variants={scaleInVariants}
                    >
                      <motion.div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${stat.color}`} />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="text-lg lg:text-xl font-bold text-gray-700 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div
                      className="text-sm text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="py-10 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <Container>
          <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              variants={fadeInUpVariants}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              variants={fadeInUpVariants}
            >
              Excellence, professionalism, and ethical practice drive everything
              we do at Tripodis Legal.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
                        className="text-xl font-semibold text-gray-800 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-700 leading-relaxed text-justify flex-1"
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
