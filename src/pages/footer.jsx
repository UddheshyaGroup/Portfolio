import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61578545593783",
      src: "src/assets/homepage/icons/facebook-icon.png",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/uddheshya.group/",
      src: "src/assets/homepage/icons/instagram-icon.png",
      alt: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@uddheshya.group",
      src: "src/assets/homepage/icons/tiktok-icon.png",
      alt: "TikTok",
    },
    {
      href: "https://www.youtube.com/@UddheshyaGroup",
      src: "src/assets/homepage/icons/youtube-icon.png",
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/uddheshya-group",
      src: "src/assets/homepage/icons/linkedin-icon.png",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="w-full h-auto md:h-[290px] bg-[#f2ede2] text-black relative overflow-hidden">
      <div className="h-auto w-auto px-4 md:px-12 pt-4 pb-20 grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-8">
        <div>
          <Link to="/" onClick={scrollToTop}>
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-sm mt-6 md:mt-12 font-bold">
            We Build, Discover, Design, Host And Code
          </p>
          <div className="h-[2px] w-full md:w-[288px] bg-black my-3 md:my-0"></div>
          <ul className="flex gap-5">
            {socialLinks.map(({ href, src, alt }) => (
              <li key={alt}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    src={src}
                    alt={alt}
                    className="w-8 h-8 my-3"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:block"
        >
          <h3 className="text-base md:text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/career" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="overflow-x-hidden">
          <h3 className="text-sm text-gray-700 font-inter mb-4 text-left">
            We are located at
          </h3>

          {/* Main Location Headers */}
          <div
            
            className="grid grid-cols-3 gap-2 md:gap-4 mb-3"
          >
            <h4 className="font-bold text-sm md:text-base">UK</h4>
            <h4 className="font-bold text-sm md:text-base col-span-2 text-center md:text-center">
              Nepal
            </h4>
          </div>

          {/* Location Details Grid */}
          <div
            
            className="grid grid-cols-3 gap-2 md:gap-4 text-[10px] md:text-xs"
          >
            {/* UK Location */}
            <div className="flex flex-col gap-1 md:gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/ping-icon.png"
                    alt="Location"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  London, United Kingdom
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/call-icon.png"
                    alt="Phone"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  +44 XXX XXX XXXX
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/mail-icon.png"
                    alt="mail"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  uk@uddheshya.com
                </p>
              </div>
            </div>

            {/* Nepal Location 1 - Sanepa */}
            <div className="flex flex-col gap-2 md:ml-[4rem]">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/ping-icon.png"
                    alt="Location"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Sanepa, Lalitpur
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/call-icon.png"
                    alt="Phone"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  +977 9805 533 602
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/mail-icon.png"
                    alt="mail"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  uddheshyastudio@gmail.com
                </p>
              </div>
            </div>

            {/* Nepal Location 2 - Banepa */}
            <div className="flex flex-col gap-2 md:ml-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/ping-icon.png"
                    alt="Location"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Banepa, Kavre
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/call-icon.png"
                    alt="Phone"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  +977 9XXX XXX XXX
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/homepage/icons/mail-icon.png"
                    alt="mail"
                    className="w-4 h-4"
                  />
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  banepa@uddheshya.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bottom-16 md:bottom-[66px] bg-black left-4 md:left-12 right-4 md:right-12 absolute"></div>
      <div className="absolute bottom-0 text-center w-full justify-center bg-[#f2ede2] h-[50px] flex items-center px-4">
        <p className="text-sm md:text-lg w-full">
          © 2025{" "}
          <Link to="/" onClick={scrollToTop} className="hover:underline">
            Uddheshya Group
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
