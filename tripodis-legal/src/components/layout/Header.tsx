import React from "react";
import { Button, Container } from "../ui";
import { useNavigate } from "react-router";
import { NAVIGATION_ITEMS } from "../../utils/constant";
import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";

interface HeaderProps {
  currentPath?: string;
  onContactClick?: () => void;
}

interface DropdownItem {
  label: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({
  currentPath = "/",
  onContactClick
}) => {
  const navigate = useNavigate();

  // states for mobile and activedropdown
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );

  const insightDropdown: DropdownItem[] = [
    { label: "Publications", href: "/insight/publications-page" },
    { label: "News & Event", href: "/insight/news-events" },
    { label: "Gallery", href: "/insight/gallery-page" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    // check if the current path matches the href or starts with it (for nested routes)
    return (
      currentPath === href || (href !== "/" && currentPath.startsWith(href))
    );
  };

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate("/contact-section");
    }
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (navLabel: string) => {
    if (navLabel === "Insight") {
      setActiveDropdown("insight");
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  //check if any insight route is active
  const isInsightsActive = insightDropdown.some((item) => isActive(item.href));

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-lg">
      <Container size="full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center shrink-0 px-8 py-2">
            <button type="button" onClick={() => handleNavClick("/")}>
              <img
                src="/logo.webp"
                alt="Tripodis Legal Logo"
                className="h-auto w-40 object-cover"
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((nav) => (
              <div key={nav.label} className="relative">
                {nav.label === "Insight" ? (
                  // insights with dropdown
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(nav.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      aria-label="Insight Navigation"
                      className={`flex items-center transition-colors text-xl font-medium cursor-pointer ${
                        isInsightsActive
                          ? "text-blue-500"
                          : "text-gray-800 hover:text-blue-500"
                      }`}
                    >
                      {nav.label}
                      <MdKeyboardArrowDown
                        className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                          activeDropdown === "insight" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === "insight" && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {insightDropdown.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors duration-200 ${
                              isActive(item.href)
                                ? "bg-gray-50 text-blue-500"
                                : ""
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // regular navitem
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
                )}
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
                  {nav.label === "Insight" ? (
                    // Mobile Insights with Submenu
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === "insight" ? null : "insight"
                          )
                        }
                        className={`flex items-center justify-between w-full transition-colors text-base font-medium py-2 ${
                          isInsightsActive
                            ? "text-blue-500"
                            : "text-gray-800 hover:text-blue-500"
                        }`}
                      >
                        {nav.label}
                        <MdKeyboardArrowDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === "insight" ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Items */}
                      {activeDropdown === "insight" && (
                        <div className="ml-4 mt-2 space-y-2">
                          {insightDropdown.map((item) => (
                            <button
                              key={item.href}
                              onClick={() => handleNavClick(item.href)}
                              className={`block w-full text-left transition-colors text-sm py-2 ${
                                isActive(item.href)
                                  ? "text-blue-500"
                                  : "text-gray-600 hover:text-blue-500"
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
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
                  )}
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
