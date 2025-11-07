const AboutUs = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-4 md:p-8 h-[8rem] md:h-[12rem]"
        style={{
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-2xl md:text-5xl font-bold relative z-10 text-center px-2">UDDHESHYA GROUP</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#f2f2f2] pb-8 md:pb-12 px-4">
        <p className="font-bold text-2xl md:text-5xl relative mt-6 md:mt-8 mb-4 text-center w-full md:w-[50%]">
          Where Creativity Meets Impact
        </p>
        <p className="font-inter text-sm md:text-[1rem] relative text-center w-full md:w-[25%]">
          {" "}
          WE DESIGN, DEVELOP, AND DELIVER Impactful Digital Solutions That Blend
          Creativity With Technology.
        </p>
      </div>
      <div className="flex flex-col items-center px-4">
        <p className="text-center font-bold text-2xl md:text-[3rem] mt-4 mb-4">
          Who are We?
        </p>
        <p className="text-center text-base md:text-[1.15rem] w-full md:w-[76%]">
          Every great business begins with a vision, a drive to grow, make an
          impact, and create something meaningful. Uddheshya Group was founded
          on that very vision
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-5 px-4 mb-12 md:mb-[8rem] text-left">
          <p className="text-sm md:text-base">
            Established in Nepal, we aim to be more than just a business
            development firm. We deliver comprehensive 360° growth solutions
            spanning strategy,IT, branding,marketing, and organizational development. By data-driveninsights, creativity, technology,and
            cultural understanding, we provide results that are practical,
            measurable, and sustainable.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-12 px-4">
        <img
          src="src/assets/aboutus/Aboutusbottom.jpg"
          alt=""
          className="h-auto md:h-[20rem] w-full md:w-[45rem] rounded-[60px] md:rounded-[120px] object-cover"
        />
        <p className="font-bold my-4 md:my-7 font-inter text-xl md:text-2xl text-center">
          Let's Build Something Amazing Together
        </p>
        <p className="text-center text-sm md:text-base px-4">Have a project or idea? Reach out to our team and let's create impactful digital experiences together.</p>
        <button className="px-4 py-2 mt-6 md:mt-14 bg-[#EB5e33] text-sm md:text-base">Contact Us</button>
      </div>
    </div>
  );
};
export default AboutUs;
