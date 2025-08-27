import React from "react";
import { Hero } from "../components/sections";
import ContactSection from "../components/sections/Contact";
import ServiceSection from "../components/sections/Services";
import AboutSection from "../components/sections/AboutSection";
import { useOutletContext } from "react-router";

const Home: React.FC = () => {
  const { current, setCurrent } = useOutletContext<{
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
  }>();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
