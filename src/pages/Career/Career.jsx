const careerpage = () => {
  return (
    <div className="w-full h-full bg-[#faf7ee] flex flex-col px-2 md:px-4 pt-28">
      <div
        className="relative bg-no-repeat bg-center p-4 md:p-8 h-[20rem] md:h-[28rem]"
        style={{
          backgroundImage: "url('src/assets/portfolio/background.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col justify-center items-center h-full w-auto text-white relative z-10">
          <p className="text-3xl md:text-5xl font-bold relative z-10 text-center px-2">Open Positions</p>
          <p className="text-base md:text-[1.125rem] relative z-10 mt-4 text-center px-4">
            Discover Exciting Opportunities To Grow Your Career And Make An
            Impact
          </p>
          <button className="px-4 py-2 mt-8 md:mt-14 bg-[#EB5e33] text-sm md:text-base">Contact Us</button>
        </div>
      </div>

      <p className="font-bold text-2xl md:text-3xl font-Poppins px-4 md:px-9 mt-7 mb-6">
        Creative Department
      </p>
      <div className="w-full h-[2px] bg-black"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-9 gap-6 mt-8">
        {/* Card 1: UI/UX Designer - Now correctly sized by the grid */}
        <div className="rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#3d348b] text-white font-bold text-2xl h-[7rem] flex items-center justify-center">
            <p>UI/UX Designer</p>
          </div>

          <div className="bg-white text-black h-[14rem] flex flex-col items-center justify-start text-center pt-8">
            <p className="w-[80%] font-normal text-sm px-4">
              Support Research Projects And Contribute To Content Development
              Through Investigation And Analysis.
            </p>
            <div className="mt-8 relative pt-4">
              <button className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold rounded shadow-md transition duration-200">
                APPLY NOW
              </button>
              <div className="absolute inset-0 top-1 left-1 bg-[#00e3ff] rounded"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Graphic Designer - Now correctly sized by the grid */}
        <div className="rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#3d348b] text-white font-bold text-2xl h-[7rem] flex items-center justify-center text-center">
            <p>
              Graphic Designer / Motion <br /> Graphics
            </p>
          </div>

          <div className="bg-white text-black h-[14rem] flex flex-col items-center justify-start text-center pt-8">
            <p className="w-[80%] font-normal text-sm px-4">
              Create Compelling Static Visual Content For Digital And Print Use.
            </p>

            <div className="mt-8 relative pt-4">
              <button className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold rounded shadow-md transition duration-200">
                APPLY NOW
              </button>
              <div className="absolute inset-0 top-1 left-1 bg-[#00e3ff] rounded"></div>
            </div>
          </div>
        </div>

        {/* Card 3: Frontend Developer - Uses col-span-2 for full width and has unique content */}

        <div className="w-full h-[2px] bg-black mt-4 mb-4 md:block"></div>
        <div className="w-full h-[2px] bg-black mt-4 mb-4 md:block"></div>
        <div className="md:col-span-2 rounded-lg shadow-lg border border-gray-100 overflow-hidden md:mx-auto md:w-1/2">
          <div className="bg-[#3d348b] text-white font-bold text-xl md:text-2xl h-[7rem] flex items-center justify-center text-center">
            <p>Frontend Developer</p>
          </div>

          <div className="bg-white text-black h-auto md:h-[14rem] flex flex-col items-center justify-start text-center pt-8 pb-6">
            <p className="w-[80%] font-normal text-sm px-4">
              We're Seeking A Skilled Frontend Developer To Join Our Creative
              Team And Build Responsive, User-Friendly, And Visually Engaging
              Web Interfaces In Collaboration With Our Design And Development
              Teams.
            </p>

            <div className="mt-8 relative pt-4">
              <button className="relative z-10 px-8 py-3 bg-[#eb5e33] text-white font-bold rounded shadow-md transition duration-200">
                APPLY NOW
              </button>
              <div className="absolute inset-0 top-1 left-1 bg-[#00e3ff] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="font-bold text-2xl md:text-3xl font-Poppins px-4 md:px-9 mt-6 mb-4">
        Administrative And Tech Department
      </p>
      <div className="w-full h-[2px] bg-black"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[4rem] px-4 md:px-[4rem] mt-8 mb-8">
        <div className="shadow-lg mb-8 md:mb-24">
          <div className="bg-[#3d348b] w-auto h-[3.75rem] font-bold text-white text-lg md:text-xl flex items-center justify-center object-center">
            <p>Research Intern</p>
          </div>
          <p className="h-auto md:h-[9rem] bg-white px-4 py-4">
            Support research projects and contribute to content development
            through investigation and analysis.
          </p>
        </div>
        <div className="shadow-lg mb-8 md:mb-24">
          <div className="bg-[#3d348b] w-auto h-[3.75rem] font-bold text-white text-lg md:text-xl flex items-center justify-center object-center">
            <p>Content Writer</p>
          </div>
          <p className="h-auto md:h-[9rem] bg-white px-4 py-4">
            Craft compelling web copy, blog posts, and brand messages that align
            with tone, creativity, and clarity.
          </p>
        </div>
        <div className="shadow-lg mb-8 md:mb-24">
          <div className="bg-[#3d348b] w-auto h-[3.75rem] font-bold text-white text-lg md:text-xl flex items-center justify-center object-center">
            <p>Tech Officer</p>
          </div>
          <p className="h-auto md:h-[9rem] bg-white px-4 py-4">
            We're seeking a detail-oriented Administrative Officer to handle
            daily operations, coordinate office activities, and support
            management in ensuring smooth workflow.
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-9 gap-6 mt-8 mb-12">
        <div className="rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#3d348b] text-white font-bold text-xl md:text-2xl h-[5rem] flex items-center justify-center text-center">
            <p>HR & Operations Coordinator</p>
          </div>
          <div className="bg-white text-black h-auto md:h-[9rem] flex flex-col items-center justify-start text-center pt-8 pb-6">
            <p className="w-[80%] font-normal text-sm px-4">
              Looking for a proactive HR & Operations Coordinator to manage
              recruitment, employee engagement, and day-to-day operational
              processes.
            </p>
            <div className="mt-8 relative pt-4">
              <div className="absolute inset-0 top-1 left-1 bg-[#00e3ff] rounded"></div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#3d348b] text-white font-bold text-xl md:text-2xl h-[5rem] flex items-center justify-center text-center">
            <p>Client Relations Officer</p>
          </div>
          <div className="bg-white text-black h-auto md:h-[9rem] flex flex-col items-center justify-start text-center pt-8 pb-6">
            <p className="w-[80%] font-normal text-sm px-4">
              We're hiring a Client Relations Officer to maintain positive
              relationships with clients, handle inquiries, and ensure client
              satisfaction.
            </p>
            <div className="mt-8 relative pt-4">
              <div className="absolute inset-0 top-1 left-1 bg-[#00e3ff] rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl md:text-3xl font-bold px-4">
        Grow With Uddheshya Group
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12 px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/career/simpleandprofessional.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Simple & Professional</p>
          <p></p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/career/modernandfriendly.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Modern & Friendly</p>
          <p></p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/career/tech-focused.jpg"
            alt=""
            className="w-[5rem] h-[5rem] rounded-full mb-4 object-cover "
          />
          <p className="font-bold text-2xl">Tech-Focused Tone</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default careerpage;
