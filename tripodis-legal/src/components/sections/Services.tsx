import React from "react";
import { motion } from "framer-motion";
import { Badge, Card, Container } from "../ui";
import { Link } from "react-router";
import { PRACTICE_AREAS } from "../../utils/constant";
import { ServicesAnimation } from "../animation/ServiceAnimation";

const ServiceSection: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={ServicesAnimation.containerVariants}
    >
      <Container className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={ServicesAnimation.containerVariants}
        >
          <motion.div variants={ServicesAnimation.headerItemVariants}>
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              Our Services
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={ServicesAnimation.headerItemVariants}
          >
            Comprehensive Legal Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={ServicesAnimation.headerItemVariants}
          >
            We offer a full range of legal services tailored to meet your
            specific needs with precision and expertise.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={ServicesAnimation.gridVariants}
        >
          {PRACTICE_AREAS.slice(0, 4).map((service, index) => (
            <motion.div key={index} variants={ServicesAnimation.cardVariants}>
              <Card className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-100 h-full">
                {/* Image Container */}
                <Link to={`/${service.href}`}>
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ServiceSection;
