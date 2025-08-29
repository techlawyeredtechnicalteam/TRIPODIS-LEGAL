import React from "react";
import { motion } from "framer-motion";
import { Button, Container } from "../ui";
import { HeroAnimation } from "../animation/HeroAnimation";
import { sliderImages } from "../../utils/constant";

interface HeroProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  onBookConsultation?: () => void;
}

const Hero: React.FC<HeroProps> = ({ current, onBookConsultation }) => {
  const handleBookConsultation = () => {
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* slides */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderImages.map((slide, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              initial={
                index === current
                  ? HeroAnimation.slideAnimation.initial
                  : undefined
              }
              animate={
                index === current
                  ? HeroAnimation.slideAnimation.animate
                  : undefined
              }
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <Container size="full">
          <motion.div
            variants={HeroAnimation.staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center text-white"
          >
            {/* Main Heading */}
            <motion.div variants={HeroAnimation.fadeInUp} className="mb-6">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 block md:hidden">
                Excellence, Professionalism and Innovation
              </h1>
            </motion.div>

            <motion.h2
              variants={HeroAnimation.fadeInUp}
              className="text-lg md:text-2xl font-semibold mb-6 hidden sm:block"
            >
              Helping Clients Move Forward With Clarity And Confidence.
            </motion.h2>

            <motion.p
              variants={HeroAnimation.fadeInUp}
              className="text-base md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Provide Clients with innovative and functional legal support that
              is firmly rooted in thorough understanding of the applicable legal
              issues
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={HeroAnimation.fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  onClick={handleBookConsultation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                >
                  Book Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};
export default Hero;
