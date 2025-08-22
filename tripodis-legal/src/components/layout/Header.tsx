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
      navigate("/contact");
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50">
      <Container>
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavClick("/")}>
              <img
                src="/logo-1.jpg"
                alt="Tripodis Legal Logo"
                className="h-10 sm:h-10"
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((nav) => (
              <div key={nav.label} className="relative">
                <button
                  onClick={() => handleNavClick(nav.href)}
                  className={`transition-colors text-sm font-medium ${
                    isActive(nav.href)
                      ? "text-blue-500"
                      : "text-white hover:text-blue-400"
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
              <Button variant="outline" size="sm" onClick={handleContactClick}>
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-white hover:text-blue-300 transform-colors p-2"
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
          <div className="lg:hidden border-t border-slate-700">
            <div className="py-6 space-y-4">
              {NAVIGATION_ITEMS.map((nav) => (
                <div key={nav.label}>
                  <button
                    onClick={() => handleNavClick(nav.href)}
                    className={`block transition-colors text-sm font-medium py-2 ${
                      isActive(nav.href)
                        ? "text-blue-500"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {nav.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Contact BTN */}
            <div className="pt-4 border-t border-slate-700 sm:hidden">
              <Button
                variant="outline"
                size="sm"
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
