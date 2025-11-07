const Services = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-8 h-[28rem]"
        style={{
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-5xl font-bold relative z-10 ">Our Services</p>
          <p className="text-[1.5rem] relative z-10 mt-4 text-center w-[50%]">
            We offer a comprehensive range of marketing services designed to
            help your business thrive in the digital landscape.
          </p>
          <button className="px-4 py-2 mt-14 bg-[#EB5e33]">Contact Us</button>
        </div>
      </div>

      <p className=" font-bold text-3xl text-center font-Poppins px-9 mt-7 mb-6">
        What We Offer
      </p>

      <div className="grid grid-cols-3 gap-6 px-9 ">
          <div>
            <img src="src/assets/services/WebandSEO.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Web Design & SEO</p>
          </div>
          <div>
            <img src="src/assets/services/socialmedia.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Social Media Management</p>
          </div>
          <div>
            <img src="src/assets/services/Eventpromotion.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Event Promotion & Coordination</p>
          </div>
          <div>
            <img src="src/assets/services/contentcreation.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Content Creation( Reels, Design, Campaign)</p>
          </div>
          <div>
            <img src="src/assets/services/influencer.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Influencer & Community Marketing</p>
          </div>
          <div>
            <img src="src/assets/services/podcast.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Podcast & Youtube Channel Production</p>
          </div>
          <div>
            <img src="src/assets/services/hospitalityandentertainment.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Hospitality & Entertainment Marketing</p>
          </div>
          <div>
            <img src="src/assets/services/paidads.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Paid Advertising & Media Buying</p>
          </div>
          <div>
            <img src="src/assets/services/Brandandidentity.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Branding & Identity Development</p>
          </div>
          <div>
            <img src="src/assets/services/Researchanalysis.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Research & Analysis</p>
          </div>
          <div>
            <img src="src/assets/services/EducationalCampaign.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold">Educational Campaigns & Conference Management</p>
          </div>
          <div>
            <img src="src/assets/services/BrandPromotion.jpg" alt="" className="w-full h-[12rem] bg-indigo-200  object-cover font-semibold" />
            <p className="text-center w-[20rem] font-semibold"> Brand Promotion</p>
          </div>
        </div>
    </div>
  );
};
export default Services;
