import React from "react";
import HaterApe from "../assets/HaterApe.png";
import AlwaysTired from "../assets/alwaysTired.png";
import Casual from "../assets/casual.png";
import Everai from "../assets/everai.png";
import CappedRange from "../assets/cappedRange.png";
import JapaneseApe from "../assets/japaneseApe.png";
import Gac from "../assets/gac.png";
import Fortunefriends from "../assets/fortune-friends.png";
import Subwayrats from "../assets/subway-rats.png";
import Honest from "../assets/honest-ones.png";
import Eat from "../assets/eat-collective.png";
import Children from "../assets/children.png";
import A from "../assets/A.png";
import PiratesApe from "../assets/piratesApe.png";

// Data array for tournament partners
const partners = [
  { id: 1, img: HaterApe, name: "Api Haters Club", mail: "@ApeHaterClub" },
  { id: 2, img: AlwaysTired, name: "ALWAYS TIRED", mail: "@alwaystirednfts" },
  { id: 3, img: Casual, name: "CASUAL SLOTHS", mail: "@CasualSloths" },
  { id: 4, img: Everai, name: "EVERAI", mail: "@THEverai" },
  { id: 5, img: CappedRange, name: "CAPPED RANGE", mail: "@CappedRange" },
  {
    id: 6,
    img: JapaneseApe,
    name: "JAPANESE BORN APE SOCIETY",
    mail: "@Japanese_BAPES",
  },
  { id: 7, img: Gac, name: "GAMING APE CLUB", mail: "@GamingApeClub" },
  {
    id: 8,
    img: Fortunefriends,
    name: "FORTUNE FRIENDS CLUB",
    mail: "@FortuneFriends_",
  },
  { id: 9, img: Subwayrats, name: "SUBWAYRATS", mail: "@SubwayRatsNft" },
  { id: 10, img: Honest, name: "HONEST ONES", mail: "@HonestOnesNFT" },
  { id: 11, img: Eat, name: "EAT COLLECTIVE", mail: "@EAT_COLLECTIVE_" },
  {
    id: 12,
    img: Children,
    name: "CHILDREN OF UKIYO",
    mail: "@childrenofukiyo",
  },
  { id: 13, img: A, name: "ARMOUR", mail: "@PlayArmourX" },
  { id: 14, img: PiratesApe, name: "PIRATE APES", mail: "@BadApePirates" },
];

const TournamentPartners = () => {
  return (
    <section className="tournament-partners-border pt-[70px] pb-[30px] relative block overflow-hidden">
      <div>
        <div className="px-4 md:px-5">
          <h1 className="text-white f-helvetica-black break-words uppercase text-2xl md:text-[36px] lg:text-[60px] lg:leading-[60px]">
            POKER TOURNAMENT PARTNERS
          </h1>
        </div>

        <div className="px-2 mt-20 mb-14">
          <div class="max-w-[1450px] mx-auto w-full flex overflow-hidden whitespace-nowrap">
            <div className="comm flex gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col justify-start items-center w-[250px]"
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="h-[150px]"
                    loading="lazy"
                  />
                  <h2 className="text-white text-base uppercase tracking-[-1px] f-helvetica-black mt-4">
                    {partner.name}
                  </h2>
                  {partner.mail && (
                    <p className="text-white text-sm f-helvetica-light">
                      {partner.mail}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="comm flex gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col justify-start items-center w-[250px]"
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="h-[150px]"
                    loading="lazy"
                  />
                  <h2 className="text-white text-base uppercase tracking-[-1px] f-helvetica-black mt-4">
                    {partner.name}
                  </h2>
                  {partner.mail && (
                    <p className="text-white text-sm f-helvetica-light">
                      {partner.mail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentPartners;
