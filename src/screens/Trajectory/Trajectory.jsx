import React from "react";
import boli from "../../assets/images/logos/boli.svg";
import gc from "../../assets/images/logos/gc.svg";
import unc from "../../assets/images/logos/unc.svg";
import trayectoria from "../../assets/images/graphs/trayectoria.png"
export default function Trajectory() {
  return (
    <div className="h-full flex flex-col bg-blue-700/20">
      <div className="h-24 w-full flex justify-center items-center bg-white">
      
        <img src={trayectoria} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row h-full  w-full items-center justify-around">
        <div className="flex flex-col gap-2">
          <img src={unc} alt="UNC-logo" className="h-32 w-32 object-contain" />
          <div className="bg-white text-black font-bold flex justify-center rounded-lg px-4 py-2 shadow-sm shadow-white ">
            <span className="text-xl">2010-2017</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src={gc} alt="UNC-logo" className="h-32 w-32 object-contain" />
          <div className="bg-white text-black font-bold flex justify-center rounded-lg px-4 py-2 shadow-sm shadow-white ">
            <span className="text-xl">2018-2020</span>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2">
          <img src={boli} alt="UNC-logo" className="h-32 w-32 object-contain" />
          <div className="bg-white text-black font-bold flex justify-center rounded-lg px-4 py-2 shadow-sm shadow-white ">
            <span className="text-xl">desde 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
