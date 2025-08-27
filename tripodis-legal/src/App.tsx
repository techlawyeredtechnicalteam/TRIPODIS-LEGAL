import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import People from "./pages/People";
import PracticeAreaPage from "./pages/PracticeAreas";
import AboutUsPage from "./pages/About";
import CorporateLaw from "./pages/practiceArea/CorporateLaw";
import PropertyLaw from "./pages/practiceArea/PropertyLaw";
import LitigationLaw from "./pages/practiceArea/LitigationLaw";
import SportLaw from "./pages/practiceArea/SportLaw";
import EntertainmentLaw from "./pages/practiceArea/EntertainmentLaw";
import CriminalLaw from "./pages/practiceArea/CriminalLaw";
import MohammedAudu from "./pages/profile/MohammedAudu";
import GabrielPeter from "./pages/profile/GabrielPeter";
import Nurudeen from "./pages/profile/Nurudeen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Navbar route */}
        <Route path="about" element={<AboutUsPage />} />
        <Route path="practice-page" element={<PracticeAreaPage />} />
        <Route path="people" element={<People />} />

        {/* Practice Area Route */}
        <Route path="corporate-law" element={<CorporateLaw />} />
        <Route path="property-law" element={<PropertyLaw />} />
        <Route path="litigation" element={<LitigationLaw />} />
        <Route path="sport-law" element={<SportLaw />} />
        <Route path="entertainment-law" element={<EntertainmentLaw />} />
        <Route path="criminal-law" element={<CriminalLaw />} />

        {/* Lawyers Route */}
        <Route path="/team/1" element={<MohammedAudu />} />
        <Route path="/team/2" element={<GabrielPeter />} />
        <Route path="/team/3" element={<Nurudeen />} />
      </Route>
    </Routes>
  );
}

export default App;
