import React from "react";
import Home from "./pages/Home";
import People from "./pages/People";
import AboutUsPage from "./pages/About";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Nurudeen from "./pages/profile/Nurudeen";
import PracticeAreaPage from "./pages/PracticeAreas";
import SportLaw from "./pages/practiceArea/SportLaw";
import MohammedAudu from "./pages/profile/MohammedAudu";
import GabrielPeter from "./pages/profile/GabrielPeter";
import ContactSection from "./components/sections/Contact";
import PropertyLaw from "./pages/practiceArea/PropertyLaw";
import CorporateLaw from "./pages/practiceArea/CorporateLaw";
import LitigationLaw from "./pages/practiceArea/LitigationLaw";
import EntertainmentLaw from "./pages/practiceArea/EntertainmentLaw";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* contact */}
          <Route
            path="/contact-section"
            element={
              <ContactSection
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />

          {/* Navbar route */}
          <Route path="about" element={<AboutUsPage />} />
          <Route path="practice-page" element={<PracticeAreaPage />} />
          <Route path="people" element={<People />} />

          {/* Practice Area Route */}
          <Route
            path="corporate and commercial-law"
            element={<CorporateLaw />}
          />
          <Route path="property-law" element={<PropertyLaw />} />
          <Route path="litigation" element={<LitigationLaw />} />
          <Route path="sport-law" element={<SportLaw />} />
          <Route path="entertainment-law" element={<EntertainmentLaw />} />

          {/* Lawyers Route */}
          <Route path="Muhammed K. Audu" element={<MohammedAudu />} />
          <Route path="Gabriel Ileanwa Peter" element={<GabrielPeter />} />
          <Route path="Nurudeen Abimaje" element={<Nurudeen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
