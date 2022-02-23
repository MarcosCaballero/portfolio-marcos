import React from "react";
import Tecnologies from "../Tecnoligies/Tecnologies";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="w-2/4 h-full">
        <img
          className="mt-[15%] mx-auto"
          src="/foto (2).png"
          width="60%"
          alt="foto landing marcos caballero"
        />
      </div>
      <div className="w-2/4 h-full">
        <div className="h-3/5 pt-20">
          <h3 className="text-4xl text-center p-10 ">
            Soy un programador de argentina con muchas ganas de trabajar y
            realizar proyectos innovadores.
          </h3>
          <p className="text-center py-10 mx-auto">
            Pasate por
            <Link href="/projects">
              <a className="pl-2">Proyectos</a>
            </Link>
          </p>
        </div>
        <div className="h-2/5">
          <Tecnologies />
        </div>
      </div>
    </div>
  );
};

export default Landing;
