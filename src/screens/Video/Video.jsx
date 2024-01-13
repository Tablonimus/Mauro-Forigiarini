import React from "react";
import video from "../../assets/images/graphs/video.png";
export default function Video() {
  return (
    <div className="h-full flex flex-col bg-blue-900/50">
      <div className="h-24 w-full flex justify-center items-center bg-white">
        {/* <span className="text-black text-4xl border-2 border-blue-400 px-4 py-2 rounded-lg ">
          VIDEO
        </span> */}
        <img src={video} alt="" />
      </div>
      <div className="py-24 flex flex-col w-full  justify-center h-2/3 lg:h-[50em] lg:rounded-lg card-container   md:py-5 md:px-5">
        <iframe
          className="rounded-lg w-full h-96 md:h-full"
          src="https://www.youtube.com/embed/Y7a8cj2BXzA?si=lI13DmEAZ52ipRCr"
          title="Luciano Gonzalez"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
