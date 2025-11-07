const Footer = () => {
  return (
    <footer className="w-full h-[290px] bg-[#f2ede2] text-black relative overflow-hidden">
      <div className="h-auto w-auto px-12 pt-4 grid grid-cols-[1fr_auto_2fr] gap-8">
        <div>
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-20 w-auto object-contain"
          />
          <p className="text-sm mt-12 font-bold">
            We Build, Discover, Design, Host And Code
          </p>
          <div className="absolute h-[2px] w-[288px] bg-black left-12 right-12"></div>
          <ul className="flex gap-5 ">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578545593783"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/homepage/icons/facebook-icon.png"
                  alt="Facebook"
                  className="w-8 h-8 my-3"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/uddheshya-group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/homepage/icons/linkedin-icon.png"
                  alt="linkedin"
                  className="w-8 h-8 my-3"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@UddheshyaGroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/homepage/icons/youtube-icon.png"
                  alt="Youtube"
                  className="w-8 h-8 my-3"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@uddheshya.group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/homepage/icons/tiktok-icon.png"
                  alt="tiktok"
                  className="w-8 h-8 my-3"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/uddheshya.group/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/homepage/icons/instagram-icon.png"
                  alt="Instagram"
                  className="w-8 h-8 my-3"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
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
          <div className="grid grid-cols-3 gap-4 mb-3">
            <h4 className="font-bold text-base">UK</h4>
            <h4 className="font-bold text-base text-center col-span-2">Nepal</h4>
          </div>

          {/* Location Details Grid */}
          <div className="grid grid-cols-3 gap-4 text-xs">
            {/* UK Location */}
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2 ml-[4rem]">
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
            <div className="flex flex-col gap-2 ml-2">
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
      <div className="absolute h-[2px] bottom-[66px] bg-black left-12 right-12"></div>
      <div className="absolute bottom-0 text-center w-full justify-center bg-[#f2ede2] h-[50px] flex items-center">
        <p className="text-lg w-full">
          © 2025 Uddheshya Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
