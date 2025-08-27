import React from "react";
import { useNavigate, useLocation } from "react-router";
import { MdMenu, MdClose } from "react-icons/md";
import { Button, Container } from "../ui";
import { NAVIGATION_ITEMS } from "../../utils/constant";

interface HeaderProps {
  currentPath?: string;
  onContactClick?: () => void;
  bgImage?: string;
  current?: number;
}

const Header: React.FC<HeaderProps> = ({
  currentPath = "/",
  onContactClick,
  bgImage
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Scroll detection effect
  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 100); // Change background when hero is mostly out of view
      } else {
        // Fallback: use scroll position if hero section not found
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const getBackgroundClasses = () => {
    const isHomePage = location.pathname === "/";

    if (!isHomePage || isScrolled) {
      return "bg-header-white shadow-md";
    }

    return "bg-slider-image bg-header-gradient";
  };

  // Determine background image style
  const getBackgroundStyle = () => {
    const isHomePage = location.pathname === "/";

    if (isHomePage && !isScrolled && bgImage) {
      return {
        backgroundImage: `linear-gradient(to right, rgba(30,41,59,0.7), rgba(30,41,59,0.3)), url(${bgImage})`
      };
    }

    return {};
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getBackgroundClasses()}`}
      style={getBackgroundStyle()}
    >
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
                      : isScrolled || location.pathname !== "/"
                      ? "text-gray-800 hover:text-blue-500"
                      : "text-white hover:text-blue-300"
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
              className={`lg:hidden transform-colors p-2 ${
                isScrolled || location.pathname !== "/"
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-white hover:text-blue-300"
              }`}
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
        {isMenuOpen && (
          <div
            className={`lg:hidden border-t ${
              isScrolled || location.pathname !== "/"
                ? "border-gray-200"
                : "border-slate-700"
            }`}
          >
            <div className="py-6 space-y-4">
              {NAVIGATION_ITEMS.map((nav) => (
                <div key={nav.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(nav.href)}
                    className={`block transition-colors text-base font-medium py-2 ${
                      isActive(nav.href)
                        ? "text-blue-500"
                        : isScrolled || location.pathname !== "/"
                        ? "text-gray-800 hover:text-blue-500"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {nav.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Contact BTN */}
            <div
              className={`pt-4 border-t sm:hidden ${
                isScrolled || location.pathname !== "/"
                  ? "border-gray-200"
                  : "border-slate-700"
              }`}
            >
              <Button
                variant="outline"
                size="md"
                onClick={handleContactClick}
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Header;
