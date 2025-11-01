import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div id='footer' className='mb-15'>
        <hr className='border-1 border-slate-200  mb-5' />
        <footer className="">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-pink-400 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © 2025 NxtRole.AI — All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer
