import React from "react";
import Tecnologies from "../Tecnoligies/Tecnologies";

const Landing = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="w-2/4 h-full">
        <img
          className="m-20 mx-auto"
          src="/foto (2).png"
          width="60%"
          alt="foto landing marcos caballero"
        />
      </div>
      <div className="w-2/4 h-full">
        <h3 className="h-3/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          nihil quod eligendi iure error cum expedita, eius fugit numquam
          tempora ad aut quia, tenetur necessitatibus rem molestiae unde nisi
          nostrum!
        </h3>
        <div className="h-2/5">
          <Tecnologies />
        </div>
      </div>
    </div>
  );
};

export default Landing;
