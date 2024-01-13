import React from "react";
import "./mainStyles.css";
import nombreCompleto from "../../assets/images/photos/nombreCompleto.png";
import medio from "../../assets/images/photos/medio.png";
import izquierda from "../../assets/images/photos/izquierda.png";
import derecha from "../../assets/images/photos/derecha.png";

export default function () {
  return (
    <div className="relative h-full flex flex-col items-center justify-center bg-blue-900/50">
      <img
        src={nombreCompleto}
        className="absolute top-0 text-4xl h-96 w-96 md:w-[30rem] md:h-[24rem]  object-contain"
      />

      <img
        src={medio}
        className="absolute object-contain bottom-56  w-56 h-96 md:bottom-[-1rem] md:w-[30rem] md:h-[30rem]"
      />
      <img
        src={izquierda}
        className="absolute object-contain bottom-0 left-0  w-72 h-72 md:bottom-[-2rem] md:left-20  md:w-[30rem] md:h-[30rem]"
      />
      <img
        src={derecha}
        className="absolute object-contain bottom-5 right-0   w-72 h-72 md:bottom-[-5rem] md:w-[30rem] md:h-[30rem]"
      />
    </div>
  );
}
