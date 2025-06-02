import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className={`font-medium transition-all duration-300 hover:text-[#ff4757] relative group ${
        isScrolled ? "text-gray-700" : "text-gray-900"
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4757] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  const MobileNavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      className="block text-gray-900 font-medium py-3 hover:text-[#ff4757] transition-colors border-b border-gray-100 last:border-b-0"
      onClick={onClick}
    >
      {children}
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className={`text-2xl font-bold transition-all duration-300 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                LOGO
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/projects">PROJECTS</NavLink>
              <NavLink href="/features">FEATURES</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className="bg-gradient-to-r from-[#ff6b6b] to-[#ff4757] hover:from-[#ff4757] hover:to-[#e63946] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Login / Signup
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-gray-900 my-1 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 bg-white/98 backdrop-blur-sm rounded-xl shadow-lg px-6">
              <MobileNavLink
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </MobileNavLink>
              <MobileNavLink
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROJECTS
              </MobileNavLink>
              <MobileNavLink
                href="/features"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FEATURES
              </MobileNavLink>
              <MobileNavLink
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
