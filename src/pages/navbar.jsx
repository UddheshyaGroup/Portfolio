import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if:
      // 1. Hovering at top
      // 2. Scrolling up
      // 3. At the top of the page
      if (
        isHoveringTop ||
        currentScrollY < lastScrollY ||
        currentScrollY < 10
      ) {
        setShowNavbar(true);
      } else {
        // Hide only when scrolling down and not hovering
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isHoveringTop]);

  // Show navbar when hovering
  useEffect(() => {
    if (isHoveringTop) {
      setShowNavbar(true);
    }
  }, [isHoveringTop]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Hover trigger area at the top */}
      <div
        onMouseEnter={() => setIsHoveringTop(true)}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-16 z-40 pointer-events-auto"
      />

      <div
        onMouseLeave={() => setIsHoveringTop(false)}
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="hidden sm:block bg-[#141446] text-white text-sm w-full">
          <div className="hidden sm:block bg-[#141446] text-white text-sm w-full">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between py-2 px-4">
              {/* LEFT SIDE — Location */}
              <div className="flex items-center gap-2 ml-[6%]">
                <MapPin size={16} color="#f50000" strokeWidth={1.25} />
                <span>Sanepa, Lalitpur</span>
              </div>

              {/* RIGHT SIDE — Phone + Email */}
              <div className="flex items-center gap-8 mr-[8%]">
                <div className="flex items-center gap-2">
                  <Phone size={16} color="#f50000" strokeWidth={1.25} />
                  <span>9805533602</span>
                </div>

                <span className="text-gray-400">|</span>

                <div className="flex items-center gap-2">
                  <Mail size={16} color="#f50000" strokeWidth={1.25} />
                  <span>info@uddheshyastudio.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="w-full bg-[#faf7ee] border-b border-[#dceeff] flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop}>
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-14 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-1 list-none gap-14 m-0 p-0 justify-end">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className={`relative inline-block text-black text- font-medium  no-underline transition-colors duration-300 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300
        ${
          location.pathname === "/"
            ? "after:w-full text-red-500"
            : "after:w-0 hover:after:w-full hover:text-red-500"
        }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/portfolio"
                onClick={scrollToTop}
                className={`relative inline-block text-black text- font-medium  no-underline transition-colors duration-300 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
        ${
          location.pathname === "/portfolio"
            ? "after:w-full text-blue-500"
            : "after:w-0 hover:after:w-full hover:text-blue-500"
        }`}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={scrollToTop}
                className={`relative inline-block text-black text- font-medium  no-underline transition-colors duration-300 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
        ${
          location.pathname === "/services"
            ? "after:w-full text-blue-500"
            : "after:w-0 hover:after:w-full hover:text-blue-500"
        }`}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/career"
                onClick={scrollToTop}
                className={`relative inline-block text-black text- font-medium  no-underline transition-colors duration-300 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
        ${
          location.pathname === "/career"
            ? "after:w-full text-blue-500"
            : "after:w-0 hover:after:w-full hover:text-blue-500"
        }`}
              >
                Career
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
                className={`relative inline-block text-black text- font-medium  no-underline transition-colors duration-300 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
        ${
          location.pathname === "/about"
            ? "after:w-full text-blue-500"
            : "after:w-0 hover:after:w-full hover:text-blue-500"
        }`}
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#faf7ee] border-b border-[#dceeff] shadow-lg">
            <ul className="flex flex-col list-none m-0 p-4 gap-4">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                  className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
