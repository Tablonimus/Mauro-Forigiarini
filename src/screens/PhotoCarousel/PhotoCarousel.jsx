import React from "react";
import { Carousel } from "flowbite-react";
import f1 from "../../assets/images/carrousel/1.jpg";
import f2 from "../../assets/images/carrousel/2.jpg";
import f3 from "../../assets/images/carrousel/3.jpg";
import f4 from "../../assets/images/carrousel/4.jpg";
import f5 from "../../assets/images/carrousel/5.jpg";
import f6 from "../../assets/images/carrousel/6.jpg";
import f7 from "../../assets/images/carrousel/7.jpg";
import fotos from "../../assets/images/graphs/fotos.png";

export default function PhotoCarousel() {
  return (
    <div className="h-full flex flex-col bg-blue-700/20">
      <div className="h-24 w-full flex justify-center items-center bg-white">
        <img src={fotos} alt="" />
      </div>
      <div className="h-full flex flex-col py-0 justify-center">
        <div className="bg-point h-96  md:h-[50em] overflow-hidden ">
          <Carousel indicators={true}>
            <img
              src={f1}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f2}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f3}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f4}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f5}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f6}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
            <img
              src={f7}
              alt=""
              className=" object-contain w-96 h-72 md:h-full md:w-full rounded-lg"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
