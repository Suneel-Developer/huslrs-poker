import React from "react";
import Vision5 from "../assets/visoin_img_5.webp";
import Vision4 from "../assets/visoin_img_3.webp";
import Vision3 from "../assets/visoin_img_3.webp";
import Vision2 from "../assets/visoin_img_2.webp";
import Vision1 from "../assets/visoin_img_1.webp";

const Vision = () => {
  return (
    <section className="px-5" id="vision">
      <div className="flex flex-row">
        <div className="w-[40%] text-white">The Vision</div>
        <div className="w-[60%] flex flex-row gap-0 flex-wrap mt-[168px]">
          <div>
            <img src={Vision5} alt="" className="max-w-[315px] w-full" />
          </div>
          <div>
            <img src={Vision4} alt="" className="max-w-[315px] w-full" />
          </div>
          <div>
            <img src={Vision3} alt="" className="max-w-[315px] w-full" />
          </div>
          <div>
            <img src={Vision2} alt="" className="max-w-[315px] w-full" />
          </div>
          <div>
            <img src={Vision1} alt="" className="max-w-[315px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
