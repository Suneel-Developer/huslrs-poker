import React from "react";
import MissionIcon from "../assets/mission-icon.svg";

const Mission = () => {
  return (
    <section className="px-5 pt-14 pb-16 mission-border block overflow-hidden relative">
      <div>
        <div className="mb-[80px]">
          <h2 className="text-white text-[28px] f-helvetica-black uppercase">
            the mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col">
            {/* List 01 : Eradicating Entry Fees */}
            <div className="flex gap-6 items-start mb-3 md:mb-10">
              <div className="w-[100px] md:w-[80px]">
                <img
                  src={MissionIcon}
                  alt="mission icon"
                  loading="lazy"
                  className="w-11"
                />
              </div>

              <div>
                <h3 className="text-white f-helvetica-black leading-[26px] text-[22px]">
                  Eradicating Entry Fees
                </h3>
                <ul className="my-[22px] pl-10 list-disc">
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Liberating players from the burden of paying individual
                    tournament fees.
                  </li>
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Making poker accessible to all by removing financial
                    barriers.
                  </li>
                </ul>
              </div>
            </div>

            {/* List 02 : Ownership of Avatars */}
            <div className="flex gap-6 items-start mb-3 md:mb-10">
              <div className="w-[100px] md:w-[80px]">
                <img
                  src={MissionIcon}
                  alt="mission icon"
                  loading="lazy"
                  className="w-11"
                />
              </div>
              <div>
                <h3 className="text-white f-helvetica-black leading-[26px] text-[22px]">
                  Ownership of Avatars
                </h3>
                <ul className="my-[22px] pl-10 list-disc">
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Empowering players to take charge of their gaming
                    experience.
                  </li>
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Creating a personalised and immersive atmosphere with unique
                    avatars.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* List 03 : Earning with Every Play */}
            <div className="flex gap-6 items-start mb-3 md:mb-10">
              <div className="w-[100px] md:w-[80px]">
                <img
                  src={MissionIcon}
                  alt="mission icon"
                  loading="lazy"
                  className="w-11"
                />
              </div>
              <div>
                <h3 className="text-white f-helvetica-black leading-[26px] text-[22px]">
                  Earning with Every Play
                </h3>
                <ul className="my-[22px] pl-10 list-disc">
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Turning every moment at our tables into an opportunity to
                    earn.
                  </li>
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Demonstrating our commitment to rewarding and valuing our
                    community.
                  </li>
                </ul>
              </div>
            </div>

            {/* List 04 : Building Trust and Transparency */}
            <div className="flex gap-6 items-start mb-3 md:mb-10">
              <div className="w-[100px] md:w-[80px]">
                <img src={MissionIcon} alt="mission icon" loading="lazy" />
              </div>
              <div>
                <h3 className="text-white f-helvetica-black leading-[26px] text-[22px] flex-1">
                  Building Trust and Transparency
                </h3>
                <ul className="my-[22px] pl-10 list-disc flex-1">
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Eliminating mistrust between players and the platform.
                  </li>
                  <li className="text-white f-helvetica-light leading-[26px] pb-[30px] text-[22px]">
                    Ensuring a transparent and secure gaming environment for all
                    participants.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
