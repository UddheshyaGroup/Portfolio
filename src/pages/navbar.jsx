import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastscrollY, setLastScrollY] = useState(0);

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

  return (
      <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      hover:translate-y-0`}
    >
      <nav className="w-full bg-[#faf7ee] border-b border-[#dceeff] flex items-center px-8 py-4 ">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-20 w-auto object-contain"
          />
        </div>
        <ul className="flex flex-1 list-none gap-14 m-0 p-0 justify-center">
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
      </nav>
    </div>
  );
};

export default Navbar;
