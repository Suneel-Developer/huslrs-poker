import React, { useState } from "react";
import NftGif1 from "../assets/nft_animation_1.gif";
import NftGif2 from "../assets/nft_animation_1.gif";

const Play = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="play-border block overflow-hidden relative md:py-4"
      id="howtoplay"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col xmd:flex-row gap-5 items-start xmd:items-center">
        <div
          className={`w-full md:w-[52.5%] px-5 md:pl-5 transition-all ${
            hovered ? "hover-visible" : "initial-hidden"
          }`}
        >
          <div className="pt-[68px] pb-14 md:pb-24">
            <h2 className="text-white f-helvetica-black text-[40px] md:text-[80px] uppercase">
              How to <span className="text-red_500">play</span>
            </h2>
          </div>

          <div className="mb-10 md:mb-[76px] max-w-[640px] w-full">
            <p className="pb-4 text-white leading-[26px] text-[22px] f-helvetica-light">
              Devilfish Poker is an NFT project which focuses on poker players
              invovled in WEB3. By purchasing one of our Genesis NFTs you get
              access to our exclusive Poker Club and have the opportunity to
              enter 80+ tournaments with cash prizes available.
            </p>
            <p className="pb-4 text-white leading-[26px] text-[22px] f-helvetica-light">
              With over{" "}
              <span className="text-red_500 f-helvetica-medium">
                1000 + traits
              </span>{" "}
              and the ability to customise your NFTs in the future we give you
              the opportunity to create the perfect table identity.
            </p>

            <p className="pb-4 text-white leading-[26px] text-[22px] f-helvetica-light">
              To play in{" "}
              <span className="text-red_500 f-helvetica-medium">
                FREE TOURNAMENTS{" "}
              </span>
              leading up to our upcoming mint day.
            </p>
          </div>

          <h5 className="text-white text-xl f-helvetica-bold">
            Join the Poker Club
          </h5>
          <h3 className="text-2xl xsm:text-[22px] text-red_500 f-helvetica-bold uppercase">
            For more details
          </h3>
          <div className="mt-8 mb-12">
            <button className="the-club-button relative h-[60px] w-[225px] rounded-[50px] overflow-hidden flex justify-center items-center border border-red_500">
              <span className="absolute text-white text-xl z-10 f-helvetica-black">
                Enter the Club
              </span>
            </button>
          </div>
        </div>

        <div
          className={`w-full md:w-[47.5%] transition-all duration-500 ${
            hovered ? "opacity-100" : "images-hidden"
          }`}
        >
          <div>
            <img
              src={NftGif1}
              alt="Nft gif"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div>
            <img
              src={NftGif2}
              alt="Nft Gif"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Play;
