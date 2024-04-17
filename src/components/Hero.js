import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero-container mt-10 md:mt-[100px] mb-3 py-20 px-5 h-full flex items-center flex-col relative">
      <div className="w-full">
        <h1 className="text-5xl xsm:text-[64px] md:text-[96px] text-white leading-[65px] xsm:leading-[80px] md:leading-[100px] f-helvetica-black pb-10">
          THE
          <span className="text-red_500 ml-6">
            NEXT <br /> EVOLUTION
          </span>
          <br /> IN <span className="text-red_500">SOCIAL</span> <br /> POKER
          ONLINE
        </h1>

        <div className="flex flex-col md:flex-row gap-5 xsm:gap-10 md:items-center">
          <div className="flex flex-col gap-2">
            <h5 className="text-white text-3xl xsm:text-[36px] tracking-[1px] f-helvetica-light">
              Join us weekly for
            </h5>
            <h3 className="text-2xl xsm:text-[32px] text-red_500 f-helvetica-bold">
              SOCIAL POKER GAMES
            </h3>
          </div>
          <a href="https://t.me/joinhuslrspoker" target={"_blank"} className="the-club-button relative h-[60px] w-[225px] rounded-[50px] overflow-hidden flex justify-center items-center border border-red_500">
            <span className="absolute text-white text-xl z-10 f-helvetica-black">
              Enter the Club
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 md:bottom-2 left-auto right-auto mx-auto">
        <div className="flex flex-col items-center gap-2">
          <Link
            to="howtoplay"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            href="google.com"
            className="border-white border h-[46px] cursor-pointer w-[23px] rounded-[50px] inline-block box-border text-center"
          >
            <div className="w-[2px] h-[8px] bg-white mt-0 scroller"></div>
          </Link>
          <span className="text-white text-sm f-helvetica-light">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
