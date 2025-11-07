import { MoveRight } from "lucide-react";
const Portfolio = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-4 md:p-8 h-[20rem] md:h-[28rem]"
        style={{ 
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-3xl md:text-5xl font-bold relative z-10 text-center px-2">Our Portfolio</p>
          <p className="text-base md:text-[1.125rem] relative z-10 mt-4 text-center px-4">
            A Showcase Of Our Latest Designs, Developments, And Digital
            Creations.
          </p>
          <button className="px-4 py-2 mt-8 md:mt-14 bg-[#EB5e33] text-sm md:text-base">Contact Us</button>
        </div>
      </div>
      <div className="p-2 md:p-4 mb-6 md:mb-12 flex items-start justify-center overflow-x-auto">
        <div className="flex space-x-2 md:space-x-4 min-w-max">
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
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 lg:px-0">
  {/* Text Content */}
  <div className="flex flex-col mt-4 md:mt-1 md:ml-5 max-w-full md:max-w-[22rem] text-center md:text-left">
    <p className="text-base sm:text-lg">Leading Aviation Education</p>
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mt-4 leading-tight">
      Bachelor <br />
      Of Aviation Management
    </p>
    <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
      A comprehensive four-year program preparing students for leadership
      roles in the aviation industry with cutting-edge curriculum and
      strong industry partnerships.
    </p>
    <button className="flex items-center justify-center md:justify-start text-[#ff6600] font-bold font-inter text-lg sm:text-xl py-2 mt-3 gap-3 mx-auto md:mx-0">
      See More
      <MoveRight className="mt-1" />
    </button>
  </div>

  {/* Image */}
  <img
    src="src/assets/portfolio/SBI.png"
    alt="SBI"
    className="w-full md:w-auto h-64 sm:h-80 md:h-[34rem] object-contain md:ml-[4rem] rounded-3xl mb-3"
  />
</div>


      <div className="flex flex-col md:flex-row gap-6 md:gap-x-[4rem] px-4 md:ml-[4rem] md:mr-[4rem] mt-8">
        {/* The First Column */}
        <div className="py-4 md:py-8 my-4 w-full md:w-1/2">
          <img
            src="src/assets/homepage/homestories.png"
            alt="homestories"
            className="w-full h-[20rem] md:h-[23rem] object-cover rounded-lg"
          />
          <p className="mt-3">Celebrating Jazz & Culture</p>
          <p className="font-bold text-xl md:text-2xl text-inter mt-3 mb-3">
            Hot Club Of Patan
          </p>
          <p>
            We designed a sleek, music-inspired website for Hot Club of Nepal to
            showcase their events, artists, and passion for jazz. The modern
            layout and warm visuals bring their vibrant musical spirit online.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>

        {/* The Second Column */}
        <div className="py-4 md:py-8 my-4 w-full md:w-1/2">
          <img
            src="src/assets/homepage/midvalley.png"
            alt="midvalley"
            className="w-full h-[20rem] md:h-[23rem] object-cover rounded-lg"
          />
          <p className="mt-3">Empowering Future Professionals</p>
          <p className="font-bold text-xl md:text-2xl text-inter mt-3 mb-3">
            Mid Valley International College
          </p>
          <p>
            We developed a clean, professional website for Mid Valley
            International College, highlighting their academic programs, global
            partnerships, and student success stories. The design focuses on
            clarity, modern visuals, and easy navigation to enhance the
            college's digital presence.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0 mb-8">
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/adarshawash.png"
            alt=""
            className="h-[16rem] w-full object-cover object-center rounded-lg"
          />
          <p className="mt-3">Inspiring young Minds</p>
          <p className="font-bold text-lg md:text-xl mb-4 mt-4">Nepal Adarsha Awasiya Vidyalaya</p>
          <p>
            We created a modern, student-focused website for NAAV that showcases
            their academic excellence, school activities, and nurturing
            environment. The design emphasizes simplicity, accessibility, and a
            welcoming tone for students and parents alike.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/gatecollegefront.png"
            alt=""
            className="h-[16rem] w-full object-cover object-bottom rounded-lg"
          />
          <p className="mt-3">Shaping Leaders in Hospitality</p>
          <p className="font-bold text-lg md:text-xl mb-4 mt-4">
            Global Academy of Tourism and Hospitality Education (GATE) College
          </p>
          <p>
            We designed a refined and professional website for GATE College to
            reflect its global standards in tourism and hospitality education.
            The layout highlights academic programs, industry partnerships, and
            student achievements with a clean, modern interface.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/gypsyswin.png"
            alt=""
            className="h-[16rem] w-full object-cover object-center rounded-lg"
          />
          <p className="mt-3">Keeping Jazz Alive in Patan</p>
          <p className="font-bold text-lg md:text-xl mb-4 mt-4">Gypsy Swing Patan</p>
          <p>
            We crafted a lively and artistic website for Gypsy Swing Patan to
            capture their soulful performances and community spirit. The design
            blends vintage charm with modern aesthetics, celebrating their
            unique contribution to Nepal's jazz culture.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/Looniva.png"
            alt=""
            className="h-[16rem] w-full object-cover object-top rounded-lg"
          />
          <p className="mt-3">Smart Finds For Smart Minds</p>
          <p className="font-bold text-lg md:text-xl mb-4 mt-4">Looniva Edu Mart</p>
          <p>
           We designed and executed a highly-focused, location-based digital marketing strategy to make Looniva Edu Mart the default choice for stationery, sports, and music supplies in their area. We also help the business grow its online presence through targeted social media campaigns and Advertisements from our end.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-lg md:text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
      </div>

      {/*Marketing strategy division  */}
      <div className="text-white bg-[#3d348b] flex flex-col items-center justify-center text-inter w-full h-auto md:h-[17rem] rounded-[22px] py-8 px-4 mb-8">
        <p className="text-2xl md:text-3xl font-bold text-center">
          Ready TO Transform Your Marketing Strategy?
        </p>
        <p className="mt-2 text-center">
          Let's Collaborate to create innovative marketing Solutions that drive
          real results for your business.
        </p>
        <button className="flex items-center gap-2 bg-[#ff6600] px-4 py-3 mt-6 rounded-md">
          GET STARTED <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
