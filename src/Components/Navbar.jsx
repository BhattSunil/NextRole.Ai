import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"; 

function Homepage() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="">
        <nav className=" hidden md:flex flex-row text-2xl space-x-12 ml-10 border-b border-gray-300 h-25 mt-0 fixed top-0 left-0 bg-white y-0 z-50 w-screen ">
          <img
            src="/nxtrole.png"
            alt="NxtRole Logo"
            className="h-40 w-40 cursor-pointer pb-7 "
          />
          <ul className="flex flex-row text-2xl space-x-12 mt-10 ml-30 border-b border-gray-300">
            <li>
              <a href="#home" className="font-semibold hover:text-pink-500 ">
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="font-semibold hover:text-pink-500 "
              >
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="font-semibold hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="font-semibold hover:text-pink-500 ">
                Contact
              </a>
            </li>
          </ul>

          <button className="bg-pink-500 hover:bg-pink-800 rounded-2xl h-13 w-35 mt-6 cursor-pointer">
            Get Started
          </button>
        </nav>

        {/* //For Small Devices */}

        <nav className="md:hidden flex">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden ml-3 w-10 h-20">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {menuOpen && (
            <div className="flex flex-col items-center mt-6 space-y-4 text-2xl">
              <a
                href="#home"
                className="font-semibold hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="font-semibold hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="font-semibold hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="font-semibold hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
          <div className='ml-10 '>
            <button className="bg-pink-500 hover:bg-pink-800 rounded-2xl h-13 w-35 mt-6  cursor-pointer ml-5">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Homepage
