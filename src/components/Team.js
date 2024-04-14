import React from "react";
import RoadMap1 from "../assets/roadmap-1.svg";
import RoadMap2 from "../assets/roadmap-2.svg";
import RoadMap3 from "../assets/roadmap-3.svg";
import RoadMap4 from "../assets/roadmap-4.svg";
import jeff1 from "../assets/jeff1.svg";
import JJ from "../assets/jj1.svg";
import Vans from "../assets/vans1.svg";
import Els from "../assets/els1.svg";
import Yellowman from "../assets/yellowman1.svg";
import ArtDirection from "../assets/art-direction1.svg";
import Twitter from "../assets/twiter_x.png";

const Team = () => {
  return (
    <section className="lg:pr-[80px] pb-5 mt-5 md:mt-20 team-border block overflow-hidden relative" id="team">
      <div className="text-white flex flex-col lg:flex-row lg:gap-5">
        <div className="w-full lg:w-[37%] -mb-40 lg:-mb-0 lg:mt-16 flex flex-col mx-auto lg:mx-0 px-0 sm:px-40 lg:px-0 gap-5">
          <div className="lg:min-h-[131px]">
            <img
              src={RoadMap1}
              alt="The Team"
              className="max-w-full w-full lg:h-[121px]"
              loading="lazy"
            />
          </div>

          <div className="lg:min-h-[131px]">
            <img
              src={RoadMap2}
              alt="The Team"
              className="max-w-full w-full lg:h-[121px]"
              loading="lazy"
            />
          </div>

          <div className="lg:min-h-[131px]">
            <img
              src={RoadMap3}
              alt="The Team"
              className="max-w-full w-full lg:h-[121px]"
              loading="lazy"
            />
          </div>

          <div className="lg:min-h-[131px]">
            <img
              src={RoadMap4}
              alt="The Team"
              className="max-w-full w-full lg:h-[121px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full lg:w-[63%] flex flex-row px-5 lg:px-0 justify-between">
          <div className="w-full md:w-[97%] lg:pt-[30px] lg:pb-[130px] lg:pl-[50px] grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="image-container">
                <img
                  src={jeff1}
                  alt="JEFF"
                  className="base-image"
                  loading="lazy"
                />

                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>

              <h2 className="text-xl f-helvetica-black mt-5">JEFF</h2>
              <span className="text-base f-helvetica-medium text-center">
                Founder & Business Development
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="image-container">
                <img src={JJ} alt="JJ" className="base-image" loading="lazy" />
                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl f-helvetica-black mt-5">JJ</h2>
              <span className="text-base f-helvetica-medium text-center">
                Founder & Marketing & Strategy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="image-container">
                <img
                  src={Vans}
                  alt="DAVID EVANS"
                  className="base-image"
                  loading="lazy"
                />
                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>

              <h2 className="text-xl f-helvetica-black mt-5 text-center">DAVID EVANS</h2>
              <span className="text-base f-helvetica-medium text-center">
                Project Manager
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="image-container">
                <img
                  src={Els}
                  alt="EL.S"
                  className="base-image"
                  loading="lazy"
                />
                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl f-helvetica-black mt-5">EL.S</h2>
              <span className="text-base f-helvetica-medium text-center">
                Creative Lead
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="image-container">
                <img
                  src={Yellowman}
                  alt="BLUEFOXX"
                  className="base-image"
                  loading="lazy"
                />
                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl f-helvetica-black mt-5">BLUEFOXX</h2>
              <span className="text-base f-helvetica-medium text-center">
                Community Lead
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="image-container">
                <img
                  src={ArtDirection}
                  alt="JASON ST.PAUL"
                  className="base-image"
                  loading="lazy"
                />
                {/* image overlay  */}
                <img
                  src={Twitter}
                  alt="twitter"
                  className="overlay-image"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl f-helvetica-black mt-5 text-center">JASON ST.PAUL</h2>
              <span className="text-base f-helvetica-medium text-center">
                Art Direction
              </span>
            </div>
          </div>

          <div className="text-white w-[3%] mt-5 hidden md:flex flex-col items-end">
            <p className="text-sm  f-helvetica-light">
              <span className="block leading-[40px]">H</span>
              <span className="block leading-[40px]">U</span>
              <span className="block leading-[40px]">S</span>
              <span className="block leading-[40px]">L</span>
              <span className="block leading-[40px]">E</span>
              <span className="block leading-[40px]">R</span>
              <span className="block leading-[40px]">S</span>

              <br />
              <br />

              <span className="block leading-[40px]">P</span>
              <span className="block leading-[40px]">O</span>
              <span className="block leading-[40px]">K</span>
              <span className="block leading-[40px]">E</span>
              <span className="block leading-[40px]">R</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
