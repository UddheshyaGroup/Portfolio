import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/portfolio/background.jpg";
import simpleAndProfessionalImage from "../../assets/career/simpleandprofessional.jpg";
import modernAndFriendlyImage from "../../assets/career/modernandfriendly.jpg";
import techFocusedImage from "../../assets/career/tech-focused.jpg";
import ApplyModal from "../../components/ApplyModal";

const flyIN = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", repeat: 0, stiffness: 120, damping: 20 },
  },
};
const careerpage = ({ onContactClick }) => {
  const { pathname } = useLocation();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        positionTitle={selectedPosition}
      />
      <div key={pathname} className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-4 md:p-8 h-[20rem] md:h-[28rem]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto overflow-visible text-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-3xl md:text-5xl font-bold relative z-10 text-center px-2"
          >
            Open Positions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-base md:text-[1.125rem] relative z-10 mt-4 text-center px-4"
          >
            Discover Exciting Opportunities To Grow Your Career And Make An
            Impact
          </motion.p>
          {/* <motion.button
            variants={flyIN}
            initial="hiddenright"
            whileInView="visible"
            viewport={{ once: false, amount: 0.9 }}
            transition={{ delay: 0.8, ease: "easeInOut", duration: 1.2 }}
            onClick={onContactClick}
            className="px-4 py-2 mt-8 md:mt-14 bg-[#EB5e33] text-sm md:text-base"
          >
            Contact Us
          </motion.button> */}
          <motion.div
            variants={flyIN}
            initial="hiddenright"
            whileInView="visible"
            viewport={{ once: false, amount: 0.9 }}
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

      <p className="font-bold text-2xl md:text-3xl font-Poppins px-4 md:px-9 mt-7 mb-6">
        Creative Department
      </p>
      <div className="w-full h-[2px] bg-black"></div>

      <div className="flex flex-col px-4 md:px-9 gap-6 mt-8 w-full">
        {/* Card 1: UI/UX Designer */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.8 }}
          className="w-full rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="bg-[#3d348b] text-white font-bold text-2xl h-[7rem] flex items-center justify-center">
            <p>UI/UX Designer</p>
          </div>

          <div className="bg-white text-black flex flex-col items-center justify-start text-center py-8">
            <p className="w-[80%] font-normal text-sm px-4">
              Support research projects and contribute to content development
              through investigation and analysis.
            </p>
            <div className="m-8 relative inline-block">
              <div className="absolute top-2 right-2 w-full h-full rounded bg-[#c6c2f2]"></div>
              <div className="absolute bottom-2 left-2 w-full h-full rounded bg-[#3d348b]"></div>
              <button 
                onClick={() => {
                  setSelectedPosition("UI/UX Designer");
                  setIsApplyModalOpen(true);
                }}
                className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold uppercase rounded transition duration-300 hover:scale-105"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Graphic Designer */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="bg-[#3d348b] text-white font-bold text-2xl h-[7rem] flex items-center justify-center text-center">
            <p>Graphic Designer / Motion Graphics</p>
          </div>

          <div className="bg-white text-black flex flex-col items-center justify-start text-center py-8">
            <p className="w-[80%] font-normal text-sm px-4">
              Create compelling static and motion visuals for digital and print
              use.
            </p>
            <div className="m-8 relative inline-block">
              <div className="absolute top-2 right-2 w-full h-full rounded bg-[#c6c2f2]"></div>
              <div className="absolute bottom-2 left-2 w-full h-full rounded bg-[#3d348b]"></div>
              <button 
                onClick={() => {
                  setSelectedPosition("Graphic Designer / Motion Graphics");
                  setIsApplyModalOpen(true);
                }}
                className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold uppercase rounded transition duration-300 hover:scale-105"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Frontend Developer */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="bg-[#3d348b] text-white font-bold text-2xl h-[7rem] flex items-center justify-center text-center">
            <p>Frontend Developer</p>
          </div>

          <div className="bg-white text-black flex flex-col items-center justify-start text-center py-8">
            <p className="w-[80%] font-normal text-sm px-4">
              We're seeking a skilled frontend developer to build responsive,
              user-friendly, and visually engaging interfaces in collaboration
              with our design team.
            </p>
            <div className="m-8 relative inline-block">
              <div className="absolute top-2 right-2 w-full h-full rounded bg-[#c6c2f2]"></div>
              <div className="absolute bottom-2 left-2 w-full h-full rounded bg-[#3d348b]"></div>
              <button 
                onClick={() => {
                  setSelectedPosition("Frontend Developer");
                  setIsApplyModalOpen(true);
                }}
                className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold uppercase rounded transition duration-300 hover:scale-105"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-center text-2xl md:text-3xl font-bold px-4">
        Grow With Uddheshya Group
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12 px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={simpleAndProfessionalImage}
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Simple & Professional</p>
          <p></p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={modernAndFriendlyImage}
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Modern & Friendly</p>
          <p></p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={techFocusedImage}
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Tech-Focused Tone</p>
          <p></p>
        </div>
      </div>
      </div>
    </>
  );
};
export default careerpage;
