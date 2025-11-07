import { MoveRight } from "lucide-react";
const Portfolio = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-8 h-[28rem]"
        style={{ 
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-5xl font-bold relative z-10 ">Our Portfolio</p>
          <p className="text-[1.125rem] relative z-10 mt-4">
            A Showcase Of Our Latest Designs, Developments, And Digital
            Creations.
          </p>
          <button className="px-4 py-2 mt-14 bg-[#EB5e33]">Contact Us</button>
        </div>
      </div>
      <div className="p-4 mb-12 flex items-start justify-center">
        <div className="flex space-x-4">
          <div
            className="px-6 py-3 bg-white text-gray-900 font-semibold 
                shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
          >
            All
          </div>
          <div
            className="px-6 py-3 bg-white text-gray-900 font-semibold shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer"
          >
            Education
          </div>
          <div
            className="px-6 py-3 bg-white text-gray-900 font-semibold shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer"
          >
            Hospitality
          </div>
          <div
            className="px-6 py-3 bg-white text-gray-900 font-semibold shadow-md 
                hover:shadow-lg transition duration-200 cursor-pointer"
          >
            Artist Management
          </div>
        </div>
      </div>

      <div className=" flex ">
        <div className="flex flex-col mt-14 ml-5">
          <p className="text-lg">Leading Aviation Education</p>
          <p className="text-5xl font-bold font-inter w-[22rem] mt-4">
            Bachelor <br />
            Of Aviation Management
          </p>
          <p className="w-[22rem] mt-4">
            A comprehensive four-year program preparing students for leadership
            roles in the aviation industry with cutting-edge curriculum and
            strong industry partnerships.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl  py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <img
          src="src/assets/portfolio/SBI.png"
          alt="SBI"
          className="w-auto h-[34rem] object-contain ml-[7.56rem] rounded-[4rem] mb-3"
        />
      </div>

      <div className="flex gap-x-[4rem] ml-[4rem] mr-[4rem]">
        {/* The First Column */}
        <div className="py-8 my-4 w-1/2">
          <img
            src="src/assets/homepage/homestories.png"
            alt="homestories"
            className="w-full h-[23rem] object-cover"
          />
          <p>Celebrating Jazz & Culture</p>
          <p className="font-bold text-2xl text-inter mt-3 mb-3">
            Hot Club Of Patan
          </p>
          <p>
            We designed a sleek, music-inspired website for Hot Club of Nepal to
            showcase their events, artists, and passion for jazz. The modern
            layout and warm visuals bring their vibrant musical spirit online.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>

        {/* The Second Column */}
        <div className="py-8 my-4 w-1/2">
          <img
            src="src/assets/homepage/midvalley.png"
            alt="midvalley"
            className="w-full h-[23rem] object-cover"
          />
          <p>Empowering Future Professionals</p>
          <p className="font-bold text-2xl text-inter mt-3 mb-3">
            Mid Valley International College
          </p>
          <p>
            We developed a clean, professional website for Mid Valley
            International College, highlighting their academic programs, global
            partnerships, and student success stories. The design focuses on
            clarity, modern visuals, and easy navigation to enhance the
            college's digital presence.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/adarshawash.png"
            alt=""
            className="h-[16rem] w-full object-cover object-center"
          />
          <p>Inspiring young Minds</p>
          <p className="font-bold text-xl mb-4 mt-4">Nepal Adarsha Awasiya Vidyalaya</p>
          <p>
            We created a modern, student-focused website for NAAV that showcases
            their academic excellence, school activities, and nurturing
            environment. The design emphasizes simplicity, accessibility, and a
            welcoming tone for students and parents alike.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl  py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <div className="flex flex-col mb-6">
          <img
            src="src/assets/portfolio/gatecollegefront.png"
            alt=""
            className="h-[16rem] w-full object-cover object-bottom "
          />
          <p>Shaping Leaders in Hospitality</p>
          <p className="font-bold text-xl mb-4 mt-4">
            Global Academy of Tourism and Hospitality Education (GATE) College
          </p>
          <p>
            We designed a refined and professional website for GATE College to
            reflect its global standards in tourism and hospitality education.
            The layout highlights academic programs, industry partnerships, and
            student achievements with a clean, modern interface.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl  py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
        <div className="flex flex-col">
          <img
            src="src/assets/portfolio/gypsyswin.png"
            alt=""
            className="h-[16rem] w-full object-cover object-center"
          />
          <p>Keeping Jazz Alive in Patan</p>
          <p className="font-bold text-xl mb-4 mt-4">Gypsy Swing Patan</p>
          <p>
            We crafted a lively and artistic website for Gypsy Swing Patan to
            capture their soulful performances and community spirit. The design
            blends vintage charm with modern aesthetics, celebrating their
            unique contribution to Nepal's jazz culture.
          </p>
          <button className="flex text-[#ff6600] font-bold font-inter text-xl  py-2 mt-3 gap-3">
            See More
            <MoveRight className="mt-1" />
          </button>
        </div>
      </div>

      {/*Marketing strategy division  */}
      <div className="text-white bg-[#3d348b] flex flex-col items-center justify-center text-inter w-full h-[17rem] rounded-[22px]">
        <p className="text-3xl font-bold">
          Ready TO Transform Your Marketing Strategy?
        </p>
        <p className="mt-2">
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
