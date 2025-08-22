import React from "react";
import { Button, Container } from "../ui";
import { sliderImages } from "../../utils/constant";

interface HeroProps {
  onBookConsultation?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookConsultation }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleBookConsultation = () => {
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 overflow-hidden">
      {/* slides */}
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.type === "effect" ? (
            <div className="w-full h-full">
              {Array.isArray(slide.content)
                ? slide.content.map((Component, idx) => <Component key={idx} />)
                : slide.content}
            </div>
          ) : (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>
      ))}

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
