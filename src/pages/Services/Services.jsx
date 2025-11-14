import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import backgroundImage from "../../assets/portfolio/background.jpg";
import webSeoImage from "../../assets/services/WebandSEO.jpg";
import brandIdentityImage from "../../assets/services/Brandandidentity.jpg";
import socialMediaImage from "../../assets/services/socialmedia.jpg";
import contentCreationImage from "../../assets/services/contentcreation.jpg";
import influencerImage from "../../assets/services/influencer.jpg";
import brandPromotionImage from "../../assets/services/BrandPromotion.jpg";
import paidAdsImage from "../../assets/services/paidads.jpg";
import eventPromotionImage from "../../assets/services/Eventpromotion.jpg";
import podcastImage from "../../assets/services/podcast.jpg";
import researchAnalysisImage from "../../assets/services/Researchanalysis.jpg";
import educationalCampaignImage from "../../assets/services/EducationalCampaign.jpg";
import hospitalityImage from "../../assets/services/hospitalityandentertainment.jpg";

const flyIN = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", repeat: 0, stiffness: 120, damping: 20 },
  },
};
const Services = ({ onContactClick }) => {
  const { pathname } = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimationKey(prev => prev + 1);
  }, [pathname]);

  return (
    <div key={`${pathname}-${animationKey}`} className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28">
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
            Our Services
          </motion.p>
          <motion.p
            key={`subtitle-${animationKey}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-base md:text-[1.5rem] relative z-10 mt-4 text-center w-full md:w-[50%] px-4"
          >
            We offer a comprehensive range of marketing services designed to
            help your business thrive in the digital landscape.
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

      <p className="font-bold text-2xl md:text-3xl text-center font-Poppins px-4 md:px-9 mt-7 mb-6">
        What We Offer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-9 mb-8 group/grid">
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={webSeoImage}
              alt="Web Design & SEO"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Hover content */}
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Fast, responsive, and optimized websites that convert. We blend
                clean design with strong SEO to elevate your digital presence.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Web Design & SEO
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={socialMediaImage}
              alt="Social Media Management"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Strategic social media growth across all platforms. We plan
                content, engage communities, and track performance — keeping
                your brand active and consistent.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Social Media Management
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={eventPromotionImage}
              alt="Event Promotion & Coordination"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Make your events shine — online and offline. We handle
                promotions, branding, and coordination for seamless execution
                and maximum reach.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Event Promotion & Coordination
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={contentCreationImage}
              alt="Content Creation"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Creative visuals that tell your brand’s story. From reels to
                designs and campaigns — we craft content that looks great and
                performs even better.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Content Creation( Reels, Design, Campaign)
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={influencerImage}
              alt="Influencer & Community Marketing"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Partner with voices that matter. We connect you with authentic
                influencers and build real communities around your brand.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Influencer & Community Marketing
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={podcastImage}
              alt="Podcast & Youtube Channel Production"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Professional storytelling through audio and video. From
                scripting to SEO — we produce content that informs, entertains,
                and converts.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Podcast & Youtube Channel Production
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={hospitalityImage}
              alt="Hospitality & Entertainment Marketing"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Creative campaigns for hotels, restaurants, and venues. We
                amplify visibility with influencer tie-ups, events, and engaging
                visuals.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Hospitality & Entertainment Marketing
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={paidAdsImage}
              alt="Paid Advertising & Media Buying"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Smarter campaigns, stronger results. We manage Meta, Google, and
                LinkedIn ads for precise targeting and better ROI.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Paid Advertising & Media Buying
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={brandIdentityImage}
              alt="Branding & Identity Development"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Build a brand that speaks for itself. From logo to voice, we
                craft consistent, memorable identities that connect emotionally.{" "}
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Branding & Identity Development
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={researchAnalysisImage}
              alt="Research & Analysis"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Data that drives decisions. We analyze markets, track campaigns,
                and uncover insights to refine strategy.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Research & Analysis
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={educationalCampaignImage}
              alt="Educational Campaigns & Conference Management"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Inspiring campaigns and seamless events. We plan, promote, and
                manage educational or corporate conferences from start to
                finish.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Educational Campaigns & Conference Management
          </p>
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out group-hover/grid:scale-95 hover:!scale-110 hover:z-10">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg group">
            <img
              src={brandPromotionImage}
              alt="Brand Promotion"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-gray-900 bg-opacity-80  text-white rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center">
              <p className="text-sm mt-2 px-3 text-center">
                Campaigns that make your brand stand out. We launch, advertise,
                and activate ideas that spark attention and build recognition.
              </p>
            </div>
          </div>
          <p className="text-center w-full md:w-[20rem] font-semibold mt-2">
            Brand Promotion
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
