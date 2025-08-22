import React from "react";
import { Button, Container } from "../ui";
import { BackgroundEffects, CrystalStructure } from "./BackgroundEffect";

interface HeroProps {
  onBookConsultation?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookConsultation }) => {
  const handleBookConsultation = () => {
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from bg-slate-700 via-slate-600 to-slate-800 overflow-hidden">
      <BackgroundEffects />
      <CrystalStructure />

      {/* Main Content */}
      <div className="relative z-20 pt-8 sm:pt-16 lg:pt-24 pb-16">
        <Container size="full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 sm:mb-8">
              Helping Clients Move Forward With Clarity And Confidence.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-xl">
              Provide Clients with innovative and functional legal support that
              is firmly rooted in thorough understanding of the applicable legal
              issues
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={handleBookConsultation}
              className="transform hover:scale-105 transition-all duration-200"
            >
              Book Consultation
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
