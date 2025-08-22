import React from "react";
import { Hero } from "../components/sections";
import ContactSection from "../components/sections/Contact";
import ServiceSection from "../components/sections/Services";
import AboutSection from "../components/sections/AboutSection";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Hero />
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
