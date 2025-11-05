import React from "react";
import {
  UtensilsCrossed,
  Lightbulb,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  HeartHandshake,
  Factory,
  MoveRight,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-4 pt-28">
      <div
        className="relative bg-[url('src/assets/homepage/hpmepagebackground.jpg')] bg-no-repeat bg-center p-8 h-[31rem]"
        style={{ backgroundSize: "100% auto" }}
      >
        <div className="flex flex-col justify-center items-center h-full w-auto ">
          <p className="text-5xl font-bold relative z-10 text-white">
            Building Purpose. Creating Change.
          </p>
          <p className=" text-[1.125rem] relative z-10 text-white mt-4">
            Turning Ideas Into Meaningful Action <br /> Across Communities and
            Industries
          </p>
          <ul
            className="text-2xl relative z-10  mt-4  text-white/60"
            style={{ fontFamily: "tienne" }}
          >
            <li>We Build,</li>
            <li>We Discover,</li>
            <li>We host,</li>
            <li>We code</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-[48%] h-auto">
          <p
            className="text-3xl text-[#121440] font-bold mt-8 mb-3 "
            style={{ fontFamily: "poppins" }}
          >
            Welcome To <br /> Uddheshya Group
          </p>
          <p
            className="text-[1.125rem] text-[#121440]"
            style={{ fontFamily: "inter" }}
          >
            Uddheshya Group is the best digital marketing platform in Nepal,
            helping businesses in Kathmandu, Banepa, and across the country grow
            via SEO, social media marketing, branding, web development, and
            comprehensive digital strategies.
          </p>

          <button
            className="rounded-[11px] ml-[4.5rem] mt-[2rem] bg-indigo-500 px-7 py-2 mr-3 transition duration-300 ease-in-out hover:scale-[1.05]"
            style={{ boxShadow: "0px 8px 10px rgba(0,0,0, 0.35)" }}
          >
            Contact Us
          </button>
          <button
            className="rounded-[11px] bg-white px-7 py-2 ml-3 transition duration-300 ease-in-out hover:scale-[1.05]"
            style={{ boxShadow: "0px 8px 10px rgba(0,0,0, 0.35)" }}
          >
            Learn More
          </button>
        </div>
        <div className="flex relative w-fit">
          <img
            src="src/assets/homepage/feathershape2.jpg"
            alt="feather2"
            className="w-60 h-60 mt-8  object-cover rounded-tl-[80px] rounded-br-[80px] rounded-tr-none rounded-bl-none mr-[-6.045rem]"
          />
          <img
            src="src/assets/homepage/feathershape1.jpg"
            alt="feather1"
            className="w-60 h-60  z-10 object-cover  rounded-tl-[80px] rounded-br-[80px]  mt-[7.626rem] mr-[1rem]"
          />
        </div>
      </div>
      <p className=" w-full h-auto text-[2.5rem] font-semibold text-center font-poppins">
        {" "}
        Trusted By Businesses Across Nepal
      </p>
      <div className="justify-around font-poppins font-semibold grid grid-cols-3 md:grid-cols-6 gap-4 mt-7 text-white text-center">
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <UtensilsCrossed className="w-8 h-8" />
          <span className="text-sm">Restaurant Chains</span>
        </div>
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <div className="relative inline-block">
            <Lightbulb size={39} className="text-white" />
            <Sparkles
              size={18}
              className="text-yellow-300 absolute top-0 right-[-7px] transform translate-x-1 -translate-y-1"
            />
          </div>
          <span className="text-sm">Tech Startups</span>
        </div>
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <ShoppingCart className="w-8 h-8" />
          <span className="text-sm">E-Commerce Stores</span>
        </div>
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <GraduationCap className="w-8 h-8" />
          <span className="text-sm">Educational Institutes</span>
        </div>
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <HeartHandshake size={39} className="w-8 h-8" />
          <span className="text-sm">Healthcare Providers</span>
        </div>
        <div className="bg-[#3d348b] w-[11.5rem] h-[7.5rem] rounded-[14px] flex flex-col items-center justify-center gap-2">
          <Factory className="w-8 h-8" />
          <span className="text-sm">Manufacturing Companies</span>
        </div>
      </div>
      <p className="text-3xl text-center mt-[7.5rem] font-semibold font-inter  mb-[4.5rem]">
        FEATURED SUCCESS STORIES
      </p>
      <div className="text-center grid grid-cols-2 mr-12">
        <img
          src="src/assets/homepage/BAM.jpg"
          alt="BAM img"
          className="w-[21rem] h-[29rem] rounded-[6.6rem] ml-[6rem] object-cover"
        />
        <div>
          <p className="text-2xl font-semibold font-inter text-left w-[26rem]">
            Bachelor Of Aviation Management
          </p>
          <p className="mt-[2.5rem] w-[26rem] text-left">
            {" "}
            We partnered with Siddhartha Vanasthali Institute, one of Nepal's
            leading educational institutions, to redesign their official
            website. Our team delivered a clean, modern, and mobile-friendly
            interface that highlights their academic excellence, student life,
            and admission details. The new design improved navigation,
            engagement, and online visibility, helping the institute connect
            more effectively with students and parents.
          </p>

          <button className="mt-9 px-6 py-2 items-center mr-[15rem] bg-orange-600 text-white rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#3d348b] w-full mx-0">
        <div className="ml-[4rem] mt-[4rem] mb-[4rem] grid grid-cols-12">
          <div className="col-span-5 w-[30rem] h-auto">
            <p className="font-semibold text-[#ff6600] text-2xl mt-6 font-inter">
              STORIES
            </p>
            <p className="font-bold text-3xl w-[4rem] text-white py-2 font-inter">
              UDDHESHYA GROUP
            </p>
            <p className="font-inter text-lg text-white w-[66%]">
              "UDDHESHYA GROUP transformed our digital presence completely. Our
              restaurant chain went from 2 to 8 locations across Kathmandu
              Valley in just 18 months. Their local SEO strategies and social
              media campaigns helped us increase online orders by 300%. They
              truly understand the Nepali market and consumer behavior."
            </p>
            <button className="flex bg-[#ff6600] text-white px-5 py-2 mt-3 gap-3">
              SEE MORE
              <MoveRight />
            </button>
          </div>
          <div className="col-span-7 p-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-12 ">
              <img
                className="w-[19rem] h-[13rem] rounded-lg"
                src="src/assets/homepage/midvalley.png"
                alt="midvalley"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
              <img
                className="w-[19rem] h-[13rem] rounded-lg"
                src="src/assets/homepage/gatecollege.png"
                alt="gate college"
                style={{ boxShadow: "6px 6px 8px 1px rgba(60,60,255,0.6)" }}
              />
              <img
                className="w-[19rem] h-[13rem] rounded-lg"
                src="src/assets/homepage/homestories.png"
                alt="home stories"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
              <img
                className="w-[19rem] h-[13rem] rounded-lg"
                src="src/assets/homepage/midvalley.png"
                alt="midvalley"
                style={{ boxShadow: "6px 6px 12px 1px rgba(60,60,255,0.6)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center mt-9 ">
        <div className="grid grid-cols-2 ml-[4.56rem] justify-between">
          <img
            src="src/assets/homepage/empoweringtech.jpg"
            alt="empowering business"
            className="w-[29rem] h-[17rem]"
          />
          <div className="items-center pr-[9rem]">
            <p className="font-bold text-xl text-left text-inter">
              Empowering Businesses With Tech
            </p>
            <p className="text-sm text-inter text-left ">
              UDDHESHYA GROUP is a forward-thinking marketing agency that
              combines creativity, data-driven strategies, and cutting-edge
              technology to deliver exceptional results for our clients. Founded
              in 2025, we've grown from a small team of passionate marketers to
              a full-service agency with expertise across all digital channel
            </p>
            <button className="bg-[#ff6600] px-3 py-2 mt-3 text-white">
              Explore More
            </button>
          </div>
        </div>
          <p className="text-center font-semibold text-3xl text-inter mt-8">
            Our Services
          </p>
        <div className="grid grid-cols-3 mt-8 mb-8">
          <div className="justify-center items-center ">
            <img src="src/assets/homepage/icons/socialmedia.png" alt="" className=" w-[4rem] h-[4rem] " />
            <p className="font-semibold text-lg">Social Media Management</p>
            <p className="mt-9">
              Manage your social media platfroms, create engaging posts,
              Increase your brands presence online.
            </p>
          </div>
          <div>
            <img src="src/assets/homepage/icons/content.png" alt="" className=" w-[4rem] h-[4rem] " />
            <p className="font-semibold text-lg">Content Creation</p>
            <p className="mt-9">
              Create engaging content for social media including reels, design
              work, and full-scale campaign to connect with your audiences.
            </p>
          </div>
          <div>
            <img src="src/assets/homepage/icons/influencer.png" alt="" className=" w-[4rem] h-[4rem] " />
            <p className="font-semibold text-lg">Influencer & Community Marketing</p>
            <p className="mt-9">
              partner with influencers and engage with communities to promote
              your brand and create authentic connections.
            </p>
          </div>
        </div>
      </div>
      <div className="text-white bg-[#3d348b] flex flex-col items-center justify-center text-inter w-full h-[17rem]">
        <p className="text-3xl font-bold">Ready TO Transform Your Marketing Strategy?</p>
        <p className="mt-2">Let's Collaborate to create innovative marketing Solutions that drive real results for your business.</p>
        <button className="flex items-center gap-2 bg-[#ff6600] px-4 py-3 mt-6 rounded-md">
          GET STARTED <MoveRight/>  
        </button>
      </div>
    </div>
  );
};

export default HomePage;
