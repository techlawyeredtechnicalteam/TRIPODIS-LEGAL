import React from "react";
import { Routes, Route } from "react-router";

// Home and layout route
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

// contact route
import ContactSection from "./components/sections/Contact";

//navbar route
import People from "./pages/People";
import AboutUsPage from "./pages/About";
import PracticeAreaPage from "./pages/PracticeAreas";

//Practice area route
import SportLaw from "./pages/practiceArea/SportLaw";
import OilandGas from "./pages/practiceArea/OilandGas";
import RealEstate from "./pages/practiceArea/RealEstate";
import PrivateEquity from "./pages/practiceArea/PrivateEquity";
import RiskManagement from "./pages/practiceArea/RiskManagement";
import EntertainmentLaw from "./pages/practiceArea/EntertainmentLaw";
import BankingandFinance from "./pages/practiceArea/BankingandFinance";
import DisputeResolution from "./pages/practiceArea/DisputeResolution";
import CommercialAdvisory from "./pages/practiceArea/CommercialAdvisory";
import IntellectualProperty from "./pages/practiceArea/IntellectualProperty";
import CorporateRestructuring from "./pages/practiceArea/CorporateRestructuring";

//lawyers route
import Nurudeen from "./pages/profile/Nurudeen";
import MohammedAudu from "./pages/profile/MohammedAudu";
import GabrielPeter from "./pages/profile/GabrielPeter";

// Insight Pages
import GalleryPage from "./pages/insight/GalleryPage";
import NewsEventsPage from "./pages/insight/NewsEventsPage";
import PublicationsPage from "./pages/insight/PublicationsPage";

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
            path="practiceArea/sport-law"
            element={
                <SportLaw />              
            }
          />
          <Route
            path="practiceArea/Oil-and-Gas"
            element={
                <OilandGas />              
            }
          />
          <Route
            path="practiceArea/Real-Estate"
            element={
                <RealEstate />              
            }
          />
          <Route
            path="practiceArea/entertainment-law"
            element={
                <EntertainmentLaw />
            }
          />
          <Route
            path="practiceArea/Private-Equity"
            element={
                <PrivateEquity />             
            }
          />
          <Route
            path="practiceArea/Dispute-Resolution"
            element={
                <DisputeResolution />              
            }
          />
          <Route
            path="practiceArea/Banking-and-Finance"
            element={
                <BankingandFinance />              
            }
          />
          <Route
            path="practiceArea/Commercial-Advisory"
            element={
                <CommercialAdvisory />              
            }
          />
          <Route
            path="practiceArea/Intellectual-Property"
            element={
                <IntellectualProperty />              
            }
          />
          <Route
            path="practiceArea/Compliance-&-Risk-Management"
            element={
                <RiskManagement />              
            }
          />
          <Route
            path="practiceArea/Mergers-Acquisitions-and-Corporate-Restructuring"
            element={
                <CorporateRestructuring />              
            }
          />

          {/* Lawyers Route */}
          <Route path="profile/Muhammed-K.-Audu" element={<MohammedAudu />} />
          <Route
            path="profile/Gabriel-Ileanwa-Peter"
            element={<GabrielPeter />}
          />
          <Route path="profile/Nurudeen-Abimaje" element={<Nurudeen />} />

          {/* Insight Route */}
          <Route
            path="insight/publications-page"
            element={<PublicationsPage />}
          />
          <Route path="insight/news-events" element={<NewsEventsPage />} />
          <Route path="insight/gallery-page" element={<GalleryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
