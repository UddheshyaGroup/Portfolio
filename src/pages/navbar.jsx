import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastscrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastscrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastscrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      hover:translate-y-0`}
    >
      <nav className="w-full bg-[#faf7ee] border-b border-[#dceeff] flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-14 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 list-none gap-14 m-0 p-0 justify-center">
          <li>
            <Link
              to="/"
              className="text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300"
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
                onClick={closeMobileMenu}
                className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={closeMobileMenu}
                className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                onClick={closeMobileMenu}
                className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block text-black text-base font-medium no-underline hover:text-blue-500 transition-colors duration-300 py-2"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
