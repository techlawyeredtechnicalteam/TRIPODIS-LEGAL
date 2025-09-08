import React from "react";
import ContactSection from "../components/sections/Contact";
import ServiceSection from "../components/sections/Services";
import AboutSection from "../components/sections/AboutSection";
import { sliderImages } from "../utils/constant";
import { Hero } from "../components/sections";

const Home: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Hero current={current} setCurrent={setCurrent} />
      <AboutSection />
      <ServiceSection />
      <ContactSection
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Home;
