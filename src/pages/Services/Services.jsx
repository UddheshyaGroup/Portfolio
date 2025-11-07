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
            We offer a comprehensive range of marketing services designed to help your business thrive in the digital landscape.
          </p>
          <button className="px-4 py-2 mt-14 bg-[#EB5e33]">Contact Us</button>
        </div>
      </div>
      
      <p className=" font-bold text-3xl text-center font-Poppins px-9 mt-7 mb-6">what We Offer</p>
      
      <div></div>
    </div>
  );
};
export default Services;
