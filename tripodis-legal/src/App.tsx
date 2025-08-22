import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="practice-areas" element={<PracticeAreas />} />
        <Route path="people" element={<People />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
