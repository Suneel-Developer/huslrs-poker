import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ToggleIcon from "../assets/toggle.svg";
import CloseIcon from "../assets/close.svg";
import { Link } from "react-scroll";

const MobileHeader = () => {
  // State to manage the toggle visibility of links
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex xmd:hidden fixed top-0 w-full left-0 right-0 bg-black z-50">
      <div className="w-full relative">
        <div className="flex items-center justify-between gap-2 h-[100px] px-6 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" loading="lazy" className="h-6" />
          </div>

          {/* Toggle Buttons */}
          <div>
            {isOpen ? (
              <img
                src={CloseIcon}
                alt="Close Icon"
                loading="lazy"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <img
                src={ToggleIcon}
                alt="Toggle Icon"
                loading="lazy"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Links */}
        {isOpen && (
          <div className="fixed top-[100px] w-full bg-black bottom-0 h-full transition-opacity duration-200 ease-linear py-[70px] px-5 flex flex-col items-end">
            {/* Logo  */}
            <img src={Logo} alt="Logo"  loading="lazy" className="w-[300px] h-[44px]" />

            {/* Links  */}
            <ul className="text-white text-xl flex flex-col items-end my-12 gap-7 mr-2">
              <li className="text-white block f-helvetica-bold text-lg uppercase transition-all duration-200 ease-linear hover:text-red_500">
                <Link
                  to="howtoplay"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  How to play
                </Link>
              </li>

              <li className="text-white block f-helvetica-bold text-lg uppercase transition-all duration-200 ease-linear hover:text-red_500">
                <Link
                  to="vision"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Vision
                </Link>
              </li>

              <li className="text-white block f-helvetica-bold text-lg uppercase transition-all duration-200 ease-linear hover:text-red_500">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Team
                </Link>
              </li>

              <li className="text-white block f-helvetica-bold text-lg uppercase transition-all duration-200 ease-linear hover:text-red_500">
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About us
                </Link>
              </li>
            </ul>

            {/* Social LInks  */}
            <ul className="flex items-center mr-2 gap-6">
              <li>
                <a
                  href="#"
                  className="text-white text-[35px] transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-3xl transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-3xl transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileHeader;
