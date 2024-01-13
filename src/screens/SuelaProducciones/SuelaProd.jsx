import React from "react";

import sp from "../../assets/images/graphs/sp.png";
import promo from "../../assets/images/graphs/suelaPromo.png";
export default function SuelaProd() {
  return (
    <div className=" flex flex-col bg-blue-700/20">
      <div className="h-24 w-full flex justify-center items-center bg-white">
        <img src={sp} alt="" />
      </div>
      <div className="py-24">
        <div
          id="promo"
          className=" px-4 pb-1 h-96 flex flex-col items-center justify-end"
        >
          {/* <img src={promo} alt="" className="rounded-2xl" /> */}
          <div className="bg-white text-black rounded-2xl w-2/3 h-24 flex flex-col items-center justify-center">
            <span className="text-[12px]">CONVERTITE EN PROFESIONAL</span>
            <span className="font-bold">¡TU OPORTUNIDAD ES AHORA!</span>
            <button className=" bg-blue-300 py-1 px-2 rounded-lg shadow-xl">Contactanos</button>
          </div>
        </div>
      </div>
    </div>
  );
}
