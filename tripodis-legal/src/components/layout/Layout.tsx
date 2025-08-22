import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import AboutSection from "../sections/AboutSection";
import ServiceSection from "../sections/Services";
import ContactSection from "../sections/Contact";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
        <AboutSection />
        <ServiceSection />
        <ContactSection
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
