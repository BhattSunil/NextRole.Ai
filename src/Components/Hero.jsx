import React from 'react'

function Hero() {
  return (
    <>
      <div id='home' className='w-screen mb-10 sm:h-fit sm:w-screen'>
        <h1 className="text-5xl mt-42 mb-2 text-center font-bold">NxtRole.AI</h1>
        <p className="text-3xl  text-center mt-2">
          Shaping Careers, Building Futures.
        </p>
        <p className="text-xl text-center mt-5">
          AI-powered platform that helps students and professionals find the{" "}
          <br />
          right career path, discover job roles, and learn skills to grow
        </p>
        <div className='flex justify-center mt-8'>
          <button className='bg-blue-700 hover:bg-blue-900 text-2xl text-white h-15 w-40 rounded-2xl cursor-pointer' >Explore Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero
