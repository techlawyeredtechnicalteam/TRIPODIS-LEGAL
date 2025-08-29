import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { sliderImages } from "../../utils/constant";

const Layout: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []); 

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ current, setCurrent }} />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
