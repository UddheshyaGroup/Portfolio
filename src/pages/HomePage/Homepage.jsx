import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import featherShape2 from "../../assets/homepage/feathershape2.jpg";
import featherShape1 from "../../assets/homepage/feathershape1.jpg";
import bamImage from "../../assets/homepage/BAM.jpg";
import empoweringTechImage from "../../assets/homepage/empoweringtech.jpg";
import gateCollegeImage from "../../assets/homepage/gatecollege.png";
import homeStoriesImage from "../../assets/homepage/homestories.png";
import midValleyImage from "../../assets/homepage/midvalley.png";
import loonivaImage from "../../assets/portfolio/Looniva.png";
import socialMediaIcon from "../../assets/homepage/icons/socialmedia.png";
import contentIcon from "../../assets/homepage/icons/content.png";
import influencerIcon from "../../assets/homepage/icons/influencer.png";
import {
  UtensilsCrossed,
  Lightbulb,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  HeartHandshake,
  Factory,
  MoveRight,
  BookUp,
  Book,
} from "lucide-react";

const MotionLink = motion(Link);

const flyIN = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", repeat: 0, stiffness: 120, damping: 20 },
  },
};

const ListItems = ["We Build", "We Create", "We Host", "We Code"];
const HomePage = ({ onContactClick }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-[8rem] overflow-hidden"
    >
      <div
        className="relative bg-no-repeat bg-center p-6 md:p-8 h-auto min-h-[12rem] md:h-[31rem]"
        style={{ backgroundSize: "cover",
          backgroundImage: `url(/hpmepagebackground.jpg)`
         }}
      >
        <div className="flex flex-col justify-center items-center h-full py-6 md:py-0">
          <p className="text-xl md:text-5xl font-bold relative z-10 text-white text-center px-2 leading-tight">
            <Typewriter
              words={["Building Purpose. Creating Change"]}
              loop={Infinity}
              cursor
              cursorStyle=""
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={1000}
            />
            .
          </p>
          <motion.p
            className="text-xs md:text-[1.125rem] relative z-10 text-white mt-2 md:mt-4 text-center px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Turning Ideas Into Meaningful Action <br /> Across Communities and
            Industries
          </motion.p>

          <ul
            className="text-sm md:text-2xl relative z-10 mt-2 md:mt-4 text-white/60 text-center list-none"
            style={{ fontFamily: "tienne" }}
          >
            {ListItems.map((item, index) => (
              <motion.li
                key={index}
                className="text-lg font-semibold"
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 20,
                  damping: 20,
                  delay: index * 0.3,
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        <div className="w-full md:w-[65%] h-auto">
          <motion.p
            exit={BookUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
              repeat: 0,
            }}
            className="text-2xl md:text-3xl text-[#121440] font-bold mt-8 mb-3 text-center md:text-left"
            style={{ fontFamily: "poppins" }}
          >
            Welcome To <br /> Uddheshya Group
          </motion.p>
          <motion.p
            exit={BookUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            className="text-base md:text-[1.125rem] text-[#121440] text-center md:text-left"
            style={{ fontFamily: "inter" }}
          >
            Uddheshya Group is a leading business development platform in Nepal,
            helping businesses grow through innovative online strategies. Based
            in Kathmandu and Banepa, we serve clients nationwide with expertise
            in SEO, social media marketing, branding, and web development. Our
            team focuses on creating tailored digital solutions that boost
            visibility, engagement, and long-term success. With a strong
            commitment to creativity and results, Uddheshya Group empowers
            brands to stand out in the competitive digital world, driving
            measurable growth and lasting impact across Nepal.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-[1rem] items-center md:items-start md:ml-[4.5rem] justify-center">
            <MotionLink
              onClick={onContactClick}
              variants={flyIN}
              initial="hiddenleft"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{
                backgroundColor: "#4338ca",
                color: "#ffffff",
              }}
              className="rounded-[11px] bg-indigo-500 px-7 py-2  w-[9rem] md:w-[auto]"
              style={{ boxShadow: "0px 8px 10px rgba(0,0,0, 0.35)" }}
            >
              Contact Us
            </MotionLink>
            <MotionLink
              to="/about"
              variants={flyIN}
              initial="hiddenright"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{
                backgroundColor: "#e5e5e5",
              }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="rounded-[11px] bg-white px-7 py-2 w-[9rem] md:w-auto"
              style={{ boxShadow: "0px 8px 10px rgba(0,0,0, 0.35)" }}
            >
              Learn More
            </MotionLink>
          </div>
        </div>
        <div className="hidden md:flex relative w-fit overflow-visible">
          <motion.img
            src={featherShape2}
            alt="feather2"
            className="w-60 h-60 mt-8 object-cover rounded-tl-[80px] rounded-br-[80px] rounded-tr-none rounded-bl-none mr-[-6.045rem]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.8,
            }}
          />
          <motion.img
            src={featherShape1}
            alt="feather1"
            className="w-60 h-60 z-10 object-cover rounded-tl-[80px] rounded-br-[80px] mt-[7.626rem] mr-[1rem]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.8,
            }}
          />
        </div>
      </div>
      <motion.p
        variants={flyIN}
        initial="hiddenleft"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full h-auto text-2xl md:text-[2.5rem] text-black font-semibold text-center font-poppins mt-14"
      >
        Trusted By Businesses Across Nepal
      </motion.p>
      <div className="justify-around font-poppins font-semibold grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-7 text-white text-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <UtensilsCrossed className="w-8 h-8" />
          <span className="text-sm">Restaurant Chains</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <div className="relative inline-block">
            <Lightbulb size={39} className="text-white" />
            <Sparkles
              size={18}
              className="text-yellow-300 absolute top-0 right-[-7px] transform translate-x-1 -translate-y-1"
            />
          </div>
          <span className="text-sm">Tech Startups</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <ShoppingCart className="w-8 h-8" />
          <span className="text-sm">E-Commerce Stores</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <GraduationCap className="w-8 h-8" />
          <span className="text-sm">Educational Institutes</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <HeartHandshake size={39} className="w-8 h-8" />
          <span className="text-sm">Healthcare Providers</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#3d348b] w-full md:w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2"
        >
          <Factory className="w-8 h-8" />
          <span className="text-sm">Manufacturing Companies</span>
        </motion.div>
      </div>

      <div className="w-full text-left md:text-center">
        <motion.p
          variants={flyIN}
          initial={{ opacity: 0, x: 100 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.9 }}
          className=" inline-flex w-auto overflow-visible text-2xl md:text-3xl mt-[3rem] md:mt-[3.5rem] font-semibold font-inter mb-[2rem] md:mb-[4.5rem]"
        >
          FEATURED SUCCESS STORIES
        </motion.p>
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:mr-12 px-4 md:px-0">
        <motion.img
          variants={flyIN}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            repeat: 0,
            stiffness: 120,
            damping: 20,
          }}
          src={bamImage}
          alt="BAM img"
          className="w-full md:w-[21rem] h-[20rem] md:h-[29rem] rounded-[6.6rem] md:ml-[6rem] object-cover"
        />
        <div className="md:px-0 w-full md:-ml-[4rem] mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: 0,
            }}
            className="text-xl md:text-2xl font-semibold font-inter text-center md:text-center w-full md:w-full mx-auto md:mx-0"
          >
            Bachelor Of Aviation Management
          </motion.p>
          <motion.p
            exit={BookUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="mt-4 text-lg md:mt-[2.5rem] w-full md:w-full text-center md:text-left mx-auto md:mx-0"
          >
            {" "}
            We partnered with Siddhartha Vanasthali Institute, one of Nepal's
            leading educational institutions, to redesign their official
            website. Our team delivered a clean, modern, and mobile-friendly
            interface that highlights their academic excellence, student life,
            and admission details. <br />
            <br /> The new design improved navigation, engagement, and online
            visibility, helping the institute connect more effectively with
            students and parents.
          </motion.p>

          <MotionLink
            variants={flyIN}
            initial="hiddenright"
            whileInView="visible"
            viewport={{ once: false, amount: 0.999 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            to="/services"
            className="inline-flex mt-6 md:mt-9 px-6 py-2 bg-orange-600 text-white rounded-md mx-auto md:mr-[15rem]  md:inline-block"
          >
            Learn More
          </MotionLink>
        </div>
      </div>
      <div className="bg-[#3d348b] w-full mx-0 mt-8">
        <div className="px-4 md:ml-[4rem] mt-[4rem] mb-[4rem] grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 w-full md:w-[30rem] h-auto justify-center text">
            <motion.p
              exit={Book}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: 0,
              }}
              className="font-semibold text-[#ff6600] text-xl md:text-2xl mt-12 font-inter mb-6"
            >
              STORIES 
            </motion.p>
            <motion.p
              exit={BookUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="font-bold text-2xl md:text-3xl text-white py-2 font-inter mb-6"
            >
              UDDHESHYA GROUP
            </motion.p>
            <motion.p
              exit={BookUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="font-inter text-base md:text-lg text-white w-full md:w-full mb-6"
            >
              "UDDHESHYA GROUP transformed our digital presence completely. Our
              restaurant chain went from 2 to 8 locations across Kathmandu
              Valley in just 18 months. Their local SEO strategies and social
              media campaigns helped us increase online orders by 300%. They
              truly understand the Nepali market and consumer behavior."
            </motion.p>
            <MotionLink
              variants={flyIN}
              initial="hiddenleft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              to="/portfolio"
              className="inline-flex overflow-hidden bg-[#ff6600] text-white px-5 py-2 mt-3 gap-3 mx-auto md:mx-0"
            >
              SEE MORE
              <MoveRight />
            </MotionLink>
          </div>
          <div className="md:col-span-7 p-0 md:p-12">
            <div className="grid grid-cols-2 gap-4 md:gap-x-12 md:gap-y-12 overflow-visible">
              <motion.img
                variants={flyIN}
                initial="hiddenright"
                whileInView="visible"
                viewport={{ once: false, amount: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: 0.0,
                }}
                className="w-full h-[10rem] md:w-[19rem] md:h-[13rem] rounded-lg object-cover"
                src={midValleyImage}
                alt="midvalley"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
              <motion.img
                variants={flyIN}
                initial="hiddenright"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="w-full h-[10rem] md:w-[19rem] md:h-[13rem] rounded-lg object-cover"
                src={gateCollegeImage}
                alt="gate college"
                style={{ boxShadow: "6px 6px 8px 1px rgba(60,60,255,0.6)" }}
              />
              <motion.img
                variants={flyIN}
                initial="hiddenright"
                whileInView="visible"
                viewport={{ once: false, amount: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="w-full h-[10rem] md:w-[19rem] md:h-[13rem] rounded-lg object-cover"
                src={homeStoriesImage}
                alt="home stories"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
              <motion.img
                variants={flyIN}
                initial="hiddenright"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="w-full h-[10rem] md:w-[19rem] md:h-[13rem] rounded-lg object-cover"
                src={loonivaImage}
                alt="midvalley"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center mt-9 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-[4.56rem] justify-between">
          <motion.img
            variants={flyIN}
            initial="hiddenleft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.5,
            }}
            src={empoweringTechImage}
            alt="empowering business"
            className="w-full md:w-[41rem] h-[17rem] rounded-lg"
          />
          <div className="items-center md:pr-[4rem]">
            <motion.p
              variants={flyIN}
              initial="hiddenright"
              whileInView="visible"
              viewport={{ repeat: false, amount: 0.1 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-lg md:text-3xl text-center md:text-left text-inter"
            >
              Empowering Businesses With Tech
            </motion.p>
            <motion.p
              variants={flyIN}
              initial="hiddenright"
              whileInView="visible"
              viewport={{ repeat: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-inter text-center md:text-left"
            >
              UDDHESHYA GROUP is a forward-thinking business development agency that
              combines creativity, data-driven strategies, and cutting-edge
              technology to deliver exceptional results for our clients. Founded
              in 2025, we've grown from a small team of passionate marketers to
              a full-service agency with expertise across all digital channels
            </motion.p>
            <div className="w-full flex justify-center mt-3">
              <MotionLink
                to="/services"
                variants={flyIN}
                initial="hiddenright"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                viewport={{ repeat: 1, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex bg-[#ff6600] px-3 py-2 mt-3 text-white items-center  mx-auto md:mx-0"
              >
                Explore More
              </MotionLink>
            </div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
          }}
          className="text-center font-semibold text-2xl md:text-3xl text-inter mt-8"
        >
          Our Services
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-8 px-4 md:px-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={socialMediaIcon}
              alt=""
              className="w-[4rem] h-[4rem] mx-auto md:mx-0"
            />
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
              className="font-semibold text-lg mt-4"
            >
              Social Media Management
            </motion.p>
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
            >
              Manage your social media platforms, create engaging posts,
              Increase your brands presence online.
            </motion.p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={contentIcon}
              alt=""
              className="w-[4rem] h-[4rem] mx-auto md:mx-0"
            />
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
              className="font-semibold text-lg mt-4"
            >
              Content Creation
            </motion.p>
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
            >
              Create engaging content for social media including reels, design
              work, and full-scale campaigns to connect with your audiences.
            </motion.p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={influencerIcon}
              alt=""
              className="w-[4rem] h-[4rem] mx-auto md:mx-0"
            />
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
              className="font-semibold text-lg mt-4"
            >
              Influencer & Community Marketing
            </motion.p>
            <motion.p
              variants={flyIN}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, repeat: 0, ease: "easeInOut" }}
            >
              Partner with influencers and engage with communities to promote
              your brand and create authentic connections.
            </motion.p>
          </div>
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

export default HomePage;
