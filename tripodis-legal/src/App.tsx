import React from "react";
import Home from "./pages/Home";
import People from "./pages/People";
import AboutUsPage from "./pages/About";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Nurudeen from "./pages/profile/Nurudeen";
import SportLaw from "./pages/practiceArea/SportLaw";
import PracticeAreaPage from "./pages/PracticeAreas";
import OilandGas from "./pages/practiceArea/OilandGas";
import MohammedAudu from "./pages/profile/MohammedAudu";
import GabrielPeter from "./pages/profile/GabrielPeter";
import RealEstate from "./pages/practiceArea/RealEstate";
import ContactSection from "./components/sections/Contact";
import PrivateEquity from "./pages/practiceArea/PrivateEquity";
import RiskManagement from "./pages/practiceArea/RiskManagement";
import BankingandFinance from "./pages/practiceArea/BankingandFinance";
import DisputeResolution from "./pages/practiceArea/DisputeResolution";
import CommercialAdvisory from "./pages/practiceArea/CommercialAdvisory";
import IntellectualProperty from "./pages/practiceArea/IntellectualProperty";
import CorporateRestructuring from "./pages/practiceArea/CorporateRestructuring";

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
          <Route path="sport-law" element={<SportLaw />} />
          <Route path="Oil and Gas" element={<OilandGas />} />
          <Route path="Real Estate" element={<RealEstate />} />
          <Route path="Private Equity" element={<PrivateEquity />} />
          <Route path="Dispute Resolution" element={<DisputeResolution />} />
          <Route path="Banking and Finance" element={<BankingandFinance />} />
          <Route path="Commercial Advisory" element={<CommercialAdvisory />} />
          <Route
            path="Intellectual Property"
            element={<IntellectualProperty />}
          />
          <Route
            path="Compliance & Risk Management"
            element={<RiskManagement />}
          />
          <Route
            path="Mergers, Acquisitions and Corporate Restructuring"
            element={<CorporateRestructuring />}
          />

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
