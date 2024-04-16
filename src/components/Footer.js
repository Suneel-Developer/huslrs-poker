import React from "react";
import Logo from "../assets/logo.png";
import FooterLine from "../assets/footer_line.png";
import RightArrow from "../assets/email-right-arrow.svg";
import TopWhiteArrow from "../assets/top-arrow.svg";
import TopRedArrow from "../assets/top-red-arrow.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="bg-black border-t border-red-600">
      <div className="pt-36 px-5 xsm:px-10 md:px-20 xmd:px-5 flex items-start flex-col xmd:flex-row gap-5 justify-center xmd:justify-between">
        <div className="flex flex-col xmd:flex-row items-center xmd:items-start gap-12 w-full justify-center xmd:justify-start lg:w-[42%]">
          <img
            src={Logo}
            alt="Huslrs Poker"
            className="w-[250px]"
            loading="lazy"
          />
          <ul className="flex flex-col gap-3 items-center xmd:items-start w-full xmd:w-[168px]">
            <li className="text-white block cursor-pointer px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500">
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

            <li className="text-white block cursor-pointer px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500">
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

            <li className="text-white block cursor-pointer px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500">
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

            <li className="text-white block cursor-pointer px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500">
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
        </div>

        <div className="flex items-start flex-col lg:flex-row gap-12 xmd:gap-4 w-full lg:w-[58%]">
          <div className="w-full flex flex-col items-center xmd:items-start lg:w-[600px]">
            <h5 className="text-white text-center xmd:text-start f-helvetica-medium  mb-[20px] font-normal uppercase text-sm md:text-lg">
              SIGN UP FOR OUR LATEST NEWS AND INSIGHTS
            </h5>

            <div className="mb-[1.2em] bg-email-input pl-5 h-[41px] flex w-full">
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent placeholder:text-white placeholder:text-sm border-none outline-none h-full flex-1 f-helvetica-light font-normal text-xs text-white"
              />

              <div className="h-full w-[47px] cursor-pointer hover:bg-[#202020] transition-all ease-linear duration-200 text-red_500 bg-white flex justify-center items-center">
                <img src={RightArrow} alt="" />
              </div>
            </div>

            <img
              src={FooterLine}
              alt="Footer Line"
              className="w-full mt-7 h-[2px]"
              loading="lazy"
            />

            <ul className="flex items-center w-28 justify-between mt-8">
              <li>
                <a
                  href="#"
                  className="text-white text-[28px] transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-2xl transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-2xl transition-all duration-200 ease-linear hover:text-red_500"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:max-w-[323px] w-full flex justify-center xmd:justify-end relative ">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="image-container w-[180px] h-[180px] relative inline-block cursor-pointer"
            >
              <img
                src={TopWhiteArrow}
                alt="White Arrow"
                className="bottom w-full h-full block"
              />
              <img
                src={TopRedArrow}
                alt="Red Arrow"
                className="top w-full h-full block"
              />
            </Link>
          </div>

        </div>
      </div>

      {/* Copy Right Section  */}
      <div className="min-h-[90px] flex items-center justify-center text-white px-9 mt-2">
        <p className="f-helvetica-light font-normal text-base text-center">
          All rights reserved to Huslrs Poker ©
        </p>
      </div>
    </section>
  );
};

export default Footer;
