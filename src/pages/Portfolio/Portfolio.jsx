import { MoveRight } from "lucide-react";
import { easeIn, easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import backgroundImage from "../../assets/portfolio/background.jpg";
import sbiImage from "../../assets/portfolio/SBI.png";
import homeStoriesImage from "../../assets/homepage/homestories.png";
import midValleyImage from "../../assets/homepage/midvalley.png";
import adarshawashImage from "../../assets/portfolio/adarshawash.png";
import gateCollegeFrontImage from "../../assets/portfolio/gatecollegefront.png";
import gypsysWinImage from "../../assets/portfolio/gypsyswin.png";
import loonivaImage from "../../assets/portfolio/Looniva.png";

const flyIN = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", repeat: 0, stiffness: 120, damping: 20 },
  },
};
const Portfolio = ({ onContactClick }) => {
  const { pathname } = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimationKey((prev) => prev + 1);
  }, [pathname]);

  return (
    <div
      key={`${pathname}-${animationKey}`}
      className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28"
    >
      <div
        className="relative bg-no-repeat bg-center p-4 md:p-8 h-[20rem] md:h-[28rem]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <motion.p
            key={`title-${animationKey}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-3xl md:text-5xl font-bold relative z-10 text-center px-2"
          >
            Our Portfolio
          </motion.p>
          <motion.p
            key={`subtitle-${animationKey}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-base md:text-[1.125rem] relative z-10 mt-4 text-center px-4"
          >
            A Showcase Of Our Latest Designs, Developments, And Digital
            Creations.
          </motion.p>
          <motion.div
            key={`button-${animationKey}`}
            variants={flyIN}
            initial="hiddenright"
            animate="visible"
            transition={{ delay: 0.8, ease: "easeInOut", duration: 1.2 }}
            onClick={onContactClick}
            className="m-8 relative inline-block cursor-pointer"
          >
            <div className="absolute top-2 right-2 w-full h-full rounded bg-[#c6c2f2]"></div>
            <div className="absolute bottom-2 left-2 w-full h-full rounded bg-[#3d348b]"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold uppercase rounded transition duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="p-2 md:p-4 mb-6 md:mb-12 flex items-start justify-center overflow-x-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.9 }}
          transition={{
            duration: 0.5,
          }}
          className="flex space-x-2 md:space-x-4 min-w-max"
        >
          <div
            className="px-3 md:px-12 py-1.5 md:py-3 bg-white text-gray-900 font-semibold text-xs md:text-base
                shadow-md hover:shadow-lg transition duration-200 cursor-pointer whitespace-nowrap"
          >
            All
          </div>
          <div
            className="px-3 md:px-6 py-1.5 md:py-3 bg-white text-gray-900 font-semibold text-xs md:text-base shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer whitespace-nowrap"
          >
            Education
          </div>
          <div
            className="px-3 md:px-6 py-1.5 md:py-3 bg-white text-gray-900 font-semibold text-xs md:text-base shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer whitespace-nowrap"
          >
            Hospitality
          </div>
          <div
            className="px-3 md:px-6 py-1.5 md:py-3 bg-white text-gray-900 font-semibold text-xs md:text-base shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer whitespace-nowrap"
          >
            Artist Management
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-1 px-4 sm:px-6 lg:px-0">
        {/* Text Content */}
        <div className="flex flex-col mt-4 md:mt-1 md:mx-[6rem] max-w-full text-center md:text-left overflow-visible">
          <motion.p
            initial={{ opacit: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="text-base sm:text-2xl"
          >
            Leading Aviation Education
          </motion.p>
          <motion.p
            initial={{ opacit: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mt-4 leading-tight"
          >
            Bachelor Of
            <br /> Aviation Management
          </motion.p>
          <motion.p
            initial={{ opacit: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.1,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="mt-4 text-lg sm:text-base md:text-base leading-relaxed"
          >
            A comprehensive four-year program preparing students for leadership
            roles in the aviation industry with cutting-edge curriculum and
            strong industry partnerships.
          </motion.p>
          <a
            href="https://siddharthavanasthali.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              variants={flyIN}
              initial="hiddenright"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ delay: 0.8, ease: "easeInOut", duration: 0.6 }}
              className="flex items-center justify-center md:justify-start text-[#ff6600] font-bold font-inter text-lg sm:text-xl py-2 mt-3 gap-3 mx-auto md:mx-0"
            >
              See More
              <MoveRight className="mt-1" />
            </motion.button>
          </a>
        </div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          src={sbiImage}
          alt="SVI"
          className="w-full md:w-auto h-64 sm:h-80 md:h-[34rem] object-contain md:ml-[4rem] md:mr-[6rem] rounded-3xl mb-3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:ml-[4rem] md:mr-[4rem] mt-8 mb-8">
        <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={homeStoriesImage}
            alt="homestories"
            // className="w-full h-[20rem] md:h-[23rem] object-cover rounded-lg"
            className="h-[16rem] w-full object-cover object-center rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Celebrating Jazz & Culture
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-xl md:text-2xl text-inter mt-3 mb-3"
          >
            Hot Club Of Patan
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We designed a sleek, music-inspired website for Hot Club of Nepal to
            showcase their events, artists, and passion for jazz. The modern
            layout and warm visuals bring their vibrant musical spirit online.
          </motion.p>
          <a
            href="https://www.facebook.com/share/1GkGKeembc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div>

        {/* <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={midValleyImage}
            alt="midvalley"
            className="w-full h-[20rem] md:h-[23rem] object-cover rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Empowering Future Professionals
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-xl md:text-2xl text-inter mt-3 mb-3"
          >
            Mid Valley International College
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We developed a clean, professional website for Mid Valley
            International College, highlighting their academic programs, global
            partnerships, and student success stories. The design focuses on
            clarity, modern visuals, and easy navigation to enhance the
            college's digital presence.
          </motion.p>
          <a
            href="https://midvalley.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div> */}
        {/* <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={midValleyImage}
            alt="midvalley"
            className="w-full h-[20rem] md:h-[23rem] object-cover rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Empowering Future Professionals
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-xl md:text-2xl text-inter mt-3 mb-3"
          >
            Mid Valley International College
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We developed a clean, professional website for Mid Valley
            International College, highlighting their academic programs, global
            partnerships, and student success stories. The design focuses on
            clarity, modern visuals, and easy navigation to enhance the
            college's digital presence.
          </motion.p>
          <a
            href="https://midvalley.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div> */}

        <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={adarshawashImage}
            alt=""
            className="h-[16rem] w-full object-cover object-center rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Inspiring young Minds
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-lg md:text-xl mb-4 mt-4"
          >
            Nepal Adarsha Awasiya Vidyalaya
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We created a modern, student-focused website for NAAV that showcases
            their academic excellence, school activities, and nurturing
            environment. The design emphasizes simplicity, accessibility, and a
            welcoming tone for students and parents alike.
          </motion.p>
          <a
            href="https://naav.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div>
        {/* <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={gateCollegeFrontImage}
            alt=""
            className="h-[16rem] w-full object-cover object-bottom rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Shaping Leaders in Hospitality
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-lg md:text-xl mb-4 mt-4"
          >
            Global Academy of Tourism and Hospitality Education (GATE) College
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We designed a refined and professional website for GATE College to
            reflect its global standards in tourism and hospitality education.
            The layout highlights academic programs, industry partnerships, and
            student achievements with a clean, modern interface.
          </motion.p>
          <a
            href="https://gate.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div> */}
        <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={gypsysWinImage}
            alt=""
            className="h-[16rem] w-full object-cover object-center rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Keeping Jazz Alive in Patan
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-lg md:text-xl mb-4 mt-4"
          >
            Gypsy Swing Patan
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We crafted a lively and artistic website for Gypsy Swing Patan to
            capture their soulful performances and community spirit. The design
            blends vintage charm with modern aesthetics, celebrating their
            unique contribution to Nepal's jazz culture.
          </motion.p>
          <a
            href="https://www.facebook.com/share/1GJLgpGp9o/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div>
        <div className="flex flex-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            src={loonivaImage}
            alt=""
            className="h-[16rem] w-full object-cover object-top rounded-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            Smart Finds For Smart Minds
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="font-bold text-lg md:text-xl mb-4 mt-4"
          >
            Looniva Edu Mart
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            We designed and executed a highly-focused, location-based digital
            marketing strategy to make Looniva Edu Mart the default choice for
            stationery, sports, and music supplies in their area. We also help
            the business grow its online presence through targeted social media
            campaigns and Advertisements from our end.
          </motion.p>
          <a
            href="https://www.facebook.com/share/1JuYD79E7U/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
              See More
              <MoveRight className="mt-1" />
            </button>
          </a>
        </div>
      </div>

      {/*Marketing strategy division  */}
      <div className="text-white bg-[#3d348b] flex flex-col items-center justify-center text-inter w-full h-[21rem] md:h-[17rem] rounded-[22px] py-8 px-4">
        <p className="text-2xl md:text-3xl font-bold text-center">
          Ready TO Transform Your Marketing Strategy?
        </p>
        <p className="mt-2 text-center">
          Let's Collaborate to create innovative marketing Solutions that drive
          real results for your business.
        </p>
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
          whileInView={{ scale: [1, 1.5] }}
          transition={{
            scale: {
              duration: 0.6,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="flex items-center gap-2 bg-[#ff6600] px-4 py-3 mt-6 rounded-md"
        >
          GET STARTED <MoveRight />
        </motion.button>
      </div>
    </div>
  );
};

export default Portfolio;
