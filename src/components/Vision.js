import React from "react";
import Vision5 from "../assets/visoin_img_5.webp";
import Vision4 from "../assets/visoin_img_4.webp";
import Vision3 from "../assets/visoin_img_3.webp";
import Vision2 from "../assets/visoin_img_2.webp";
import Vision1 from "../assets/visoin_img_1.webp";

const Vision = () => {
  return (
    <section
      className="px-5 pt-10 pb-20 md:pb-32 vision-border block overflow-hidden relative"
      id="vision"
    >
      <h1 className="my-[80px] text-white text-[40px] md:text-[80px] f-helvetica-black">
        VISION
      </h1>
      <div className="flex flex-col justify-between items-center lg:flex-row gap-16">
        {/* Left Side  */}
        <div className="w-full lg:w-[40%] text-white">
          <h3 className="mb-[52px] text-[28px] f-helvetica-black">
            THE HISTORY
          </h3>

          <p className="text-[22px] leading-[26px] f-helvetica-light">
            Giving our poker players that little bit extra to do what they love
            - we’ve taken a bold leap into the future with tournaments over the
            past year. <br /><br /> Our vision remains unwavering – to redefine the poker
            experience. Dedicated on giving our members the best experience,
            we’re actively changing the game, leveraging cutting-edge technology
            to transform how you play poker. <br /><br /> ​No longer confined by tradition,
            we’re infusing excitement and modernity into every aspect of the
            poker landscape with our Social Poker Club.
          </p>
        </div>

        {/* Right Side  */}
        <div className="w-full lg:w-[60%] lg:pr-10 gap-4 flex-col flex justify-end items-center lg:items-end relative">
          <div className="relative flex gap-10 sm:gap-20">
            <div className="animation-img1 animation-img ">
              <img src={Vision5} alt="" className="max-w-[200px] w-full " />
            </div>
            <div className="animation-img2 animation-img">
              <img
                src={Vision4}
                alt=""
                className="max-w-[160px] sm:max-w-[220px] w-full"
              />
            </div>
            <div className="animation-img3 animation-img">
              <img src={Vision3} alt="" className="max-w-[200px] w-full" />
            </div>
          </div>
          <div className="relative flex gap-10 sm:gap-20">
            <div className="animation-img4 animation-img">
              <img src={Vision2} alt="" className="max-w-[260px] w-full" />
            </div>
            <div className="animation-img5 animation-img">
              <img src={Vision1} alt="" className="max-w-[260px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
