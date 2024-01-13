import React from "react";
import copa from "../../assets/images/icons/copa.svg";
import palmares from "../../assets/images/graphs/palmares.png";
export default function Honors() {
  return (
    <div className="h-full flex flex-col bg-blue-700/20">
      <div className="h-24 w-full flex justify-center items-center bg-white">
        {/* <span className="text-black text-4xl border-2 border-blue-400 px-4 py-2 rounded-lg ">
          PALMARÉS
        </span> */}
        <img src={palmares} alt="" />
      </div>
      <div className="relative flex flex-col justify-start py-24 items-center h-full">
        <div className=" w-96 h-96  bg-white text-blue-900  flex flex-col gap-2 rounded-lg p-4">
          <section className="flex border-b border-blue-700 py-1">
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="font-extrabold">CAMPEÓN U.N.CUYO</span>
            </div>
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="text-sm">2016 (INFERIORES)</span>
            </div>
          </section>
          <section className="flex border-b border-blue-700 py-1">
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="font-extrabold">CAMPEÓN GODOY CRUZ</span>
            </div>
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="text-sm">2018 (6° DIVISIÓN)</span>
            </div>
          </section>
          <section className="flex border-b border-blue-700 py-1">
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="font-extrabold">CAMPEÓN ARGENTINO</span>
            </div>
            <div className="w-1/2 border-b border-blue-900 p-1">
              <span className="text-sm">2023 (1° DIVISIÓN)</span>
            </div>
          </section>
          <img
            src={copa}
            alt="suela-producciones"
            className="object-contain h-40"
          />
        </div>
      </div>
    </div>
  );
}
