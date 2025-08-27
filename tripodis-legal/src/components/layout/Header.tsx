import React from "react";
import { useNavigate } from "react-router";
import { MdMenu, MdClose } from "react-icons/md";
import { Button, Container } from "../ui";
import { NAVIGATION_ITEMS } from "../../utils/constant";

interface HeaderProps {
  currentPath?: string;
  onContactClick?: () => void;
  bgImage?: string;
}

const Header: React.FC<HeaderProps> = ({
  currentPath = "/",
  onContactClick
}) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [isScrolled, setIsScrolled] = React.useState(false);

  // Scroll detection effect
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const heroSection = document.querySelector("[data-hero-section]");
  //     if (heroSection) {
  //       const heroBottom = heroSection.getBoundingClientRect().bottom;
  //       setIsScrolled(heroBottom <= 100);
  //     } else {
  //       setIsScrolled(window.scrollY > 100);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => currentPath === href;

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate("/contact");
    }
    setIsMenuOpen(false);
  };

  // Determine background classes based on scroll state and current page
  // const getBackgroundClasses = () => {
  //   const isHomePage = location.pathname === "/";

  //   if (!isHomePage || isScrolled) {
  //     return "bg-header-white shadow-md";
  //   }

  //   return "bg-slider-image";
  // };

  // Determine background image style
  // const getBackgroundStyle = () => {
  //   const isHomePage = location.pathname === "/";

  //   if (isHomePage && !isScrolled && bgImage) {
  //     return {
  //       backgroundImage: `url(${bgImage}) bg-header-white shadow-md`
  //     };
  //   }

  //   return {};
  // };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-header-white shadow-md">
      <Container size="full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <button type="button" onClick={() => handleNavClick("/")}>
              <img
                src="/logo-1.jpg"
                alt="Tripodis Legal Logo"
                className="h-20 w-20 object-cover"
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((nav) => (
              <div key={nav.label} className="relative">
                <button
                  type="button"
                  aria-label="Desktop Nav"
                  onClick={() => handleNavClick(nav.href)}
                  className={`transition-colors text-xl font-medium ${
                    isActive(nav.href)
                      ? "text-blue-500"
                      : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  {nav.label}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button variant="outline" size="md" onClick={handleContactClick}>
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              className="lg:hidden text-gray-800 hover:text-blue-500"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav>
          {isMenuOpen && (
            <div className="relative z-10">
              <nav className="px-2 pt-2 pb-3 space-y-2 border-t border-white/10 rounded-b-lg">
                {NAVIGATION_ITEMS.map((nav) => (
                  <div key={nav.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(nav.href)}
                      className={`block transition-colors text-base font-medium py-2 ${
                        isActive(nav.href)
                          ? "text-blue-500"
                          : "text-gray-800 hover:text-blue-500"
                      }`}
                    >
                      {nav.label}
                    </button>
                  </div>
                ))}
                {/* Mobile Contact BTN */}
                <div className="pt-4 border-t sm:hidden">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleContactClick}
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </nav>
      </Container>
    </nav>
  );
};

export default Header;
