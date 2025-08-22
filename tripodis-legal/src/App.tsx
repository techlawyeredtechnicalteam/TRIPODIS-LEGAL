import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import People from "./pages/People";
import PracticeAreaPage from "./pages/PracticeAreas";
import AboutUsPage from "./pages/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="practice-page" element={<PracticeAreaPage />} />
        <Route path="people" element={<People />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
        {/* <Route path="careers" element={<Careers />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
