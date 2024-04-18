import React from "react";
import About from "../assets/about-us.webp";

const AboutUs = () => {
  return (
    <section className="border-b-2 border-border_red" id="aboutUs">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-5 pl-5 pb-[100px] lg:pb-2 pr-5 lg:pr-[100px]">
          <h1 className="mb-10 md:mb-16 text-white text-[40px] lg:text-[60px] xlg:text-[80px] f-helvetica-black">
            ABOUT <span className="text-border_red">US</span>
          </h1>

          <p className="text-white text-lg md:text-[22px] md:leading-[26px] f-helvetica-light">
            The next evolution of Social Poker Clubs. <br />
            <br />
            Club Members will have access to the most dedicated and passionate
            poker community online, the ability to play where ever you are,
            whenever you want and will be at the forefront of the next
            generation of online poker players. <br />
            <br />
            Delivering a greater poker experience while bringing communities
            together, HUSLRS in cooperation with the community is building a
            native poker and gaming platform.
            <br />
            <br /> Community members will also gain access to an environment
            focused on poker. They will earn benefits as being a part of HUSLRS,
            get to interact with other players, earn additional cash prizes and
            vote on the future direction of the project.
          </p>
        </div>

        <div>
          <img
            src={About}
            alt="About Us"
            loading="lazy"
            className="about-us w-full h-[300px] md:h-[600px] lg:h-[809px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
