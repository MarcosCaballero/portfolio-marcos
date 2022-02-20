import React from "react";

const Banner = (props) => {
  const { text } = props;

  return (
    <div className="xlm:w-full mx-auto p-5 flex justify-center ">
      <h1 className={`text-3xl w-[32ch] banner animate-typing`}>{text}</h1>
    </div>
  );
};

export default Banner;
