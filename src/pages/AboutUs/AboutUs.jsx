const AboutUs = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center  p-8 h-[12rem]"
        style={{
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-5xl font-bold relative z-10 ">UDDHESHYA GROUP</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#f2f2f2] pb-12 ">
        <p className="font-bold text-5xl relative mt-8  mb-4 text-center w-[50%] ">
          Where Creativity Meets Impact
        </p>
        <p className="font-inter text-[1rem] relative text-center w-[25%]">
          {" "}
          WE DESIGN, DEVELOP, AND DELIVER Impactful Digital Solutions That Blend
          Creativity With Technology.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center font-bold text-[3rem] mt-4 mb-4">
          Who are We?
        </p>
        <p className="text-center text-[1.15rem] w-[76%]">
          Every great business begins with a vision, a drive to grow, make an
          impact, and create something meaningful. Uddheshya Group was founded
          on that very vision
        </p>

        <div className="flex flex-row mt-5  px-4 mb-[8rem] text-left">
          <p>
            EstablishedinNepal, weaim tobemore thanjustabusiness
            developmentfirm. Wedeliver comprehensive360° growthsolutions
            spanningstrategy,IT, branding,marketing, andorganizational
          </p>
          <p>
            Development.By data-driveninsights, creativity, technology,and
            cultural understanding,we provideresultsthat arepractical,
            measurable,and sustainable.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-12">
        <img
          src="src/assets/aboutus/Aboutusbottom.jpg"
          alt=""
          className="h-[20rem] w-[45rem] rounded-[120px] object-cover"
        />
        <p className="font-bold my-7 font-inter text-2xl">
          Let's Build Something Amazing Together
        </p>
        <p>Have a project or idea? Reach out to our team and let’s create impactful digital experiences together.</p>
        <button className="px-4 py-2 mt-14 bg-[#EB5e33]">Contact Us</button>
      </div>
    </div>
  );
};
export default AboutUs;
