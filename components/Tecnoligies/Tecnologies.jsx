import React from "react";
import { tecOps } from "./tecops";

const Tecnologies = () => {
  return (
    <div>
      <h2 className="text-2xl px-5 py-5 font-bold text-center mb-5">
        Tecnologías que utilizo
      </h2>
      <div className="bg-white h-50 m-0 py-5 overflow-hidden relative w-full before:slider-before after:slider-after">
        <div className="slider-track flex w-[calc(250px * 4)] animate-scroll  ">
          {tecOps.map((tec, index) => (
            <div
              className="slide w-screen mx-3 md:mx-5 lg:mx-4 hover:scale-110"
              key={index}
            >
              <img className="w-[75px]" src={tec.logo} alt={tec.name} />
              <h4 className=" w-[75px] capitalize text-center">{tec.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
