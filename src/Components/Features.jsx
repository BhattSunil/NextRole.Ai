import React from 'react'

function Features() {
  return (
    <>
      <div id="features">
        <h1 className="text-3xl font-bold flex justify-center pr-8 mt-8  ">
          Key Features
        </h1>
        <div className="mt-8 sm-ml-5 md:flex flex-row ml-8 space-x-2 cursor-pointer ">
          <div className="p-6 bg-white shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 rounded-2xl">
            <div className="text-4xl mb-3 sm-ml-5 "></div>
            <h3 className="text-xl font-semibold mb-2  md:text-center">
              Career Recommendations
            </h3>
            <p className="text-gray-600">
              Get personalized career paths <br />
              based onyour interests and skills.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-2 md:text-center">
              Course Recommendations
            </h1>
            <p>
              {" "}
              Find the best online courses to <br /> upskill for your dream job.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-2  md:text-center">
              Personalized Roadmap
            </h1>
            <p>
              {" "}
              Follow a clear, AI-generated roadmap <br /> to reach your career
              goals.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300">
            <h1 className="text-xl font-semibold mb-2 md:text-center">
              Skill Gap Analysis
            </h1>
            <p>
              {" "}
              Identify which skills you need to <br /> learn to advance in your
              career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features
