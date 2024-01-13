import React from "react";
import bio from "../../assets/images/photos/bio2.png";
import biografia from "../../assets/images/graphs/biografia.png"
export default function Bio() {
  return (
    <div className="h-full flex flex-col bg-blue-700/20">
      <div className="h-24 w-full flex justify-center items-center bg-white">
      
        <img src={biografia} alt="" />
      </div>
      <div className="relative flex flex-col justify-start pt-24 items-center h-full">
        <div className=" w-96 h-96  bg-[#302b63]  flex flex-col gap-2 rounded-lg p-4">
          <section className="flex border-b border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">NOMBRE</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">Mauro Edgardo Forgiarini</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">APODO</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">"El Flaco"</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">NACIMIENTO</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">11/10/2001</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">PUESTO</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">Arquero</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">MANO HABIL</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">Derecha</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">PIE HABIL</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">Derecha</span>
            </div>
          </section>
          <section className="flex border-b  border-gray-400 py-1">
            <div className="w-1/3 border-b p-1">
              <span className="text-sm">ALTURA</span>
            </div>
            <div className="w-2/3 border-b p-1">
              <span className="font-extrabold">190 cm</span>
            </div>
          </section>
        </div>
        <img src={bio} alt="suela-producciones" className="absolute right-0 bottom-24 object-contain h-2/3" />
      </div>
    </div>
  );
}
