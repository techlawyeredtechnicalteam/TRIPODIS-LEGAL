import React from "react";
import { useNavigate } from "react-router";
import { MdMenu, MdClose } from "react-icons/md";
import { Button, Container } from "../ui";
import { NAVIGATION_ITEMS } from "../../utils/constant";

interface HeaderProps {
  currentPath?: string;
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPath = "/",
  onContactClick
}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      navigate("/contact-section");
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-header-white shadow-md">
      <Container size="full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center shrink-0 p-8">
            <button type="button" onClick={() => handleNavClick("/")}>
              <img
                src="/logo.png"
                alt="Tripodis Legal Logo"
                className="h-auto w-40 object-cover"
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
                  className={`transition-colors text-xl font-medium cursor-pointer ${
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
                <MdClose className="h-10 w-10" />
              ) : (
                <MdMenu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="relative z-50">
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
      </Container>
    </nav>
  );
};

export default Header;
