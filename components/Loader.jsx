import React from "react";

const Loader = () => {
  return (
    <div className="w-full max-w-[1400px] h-screen flex justify-center items-center px-8 mx-auto">
      <div className="loader">
        <span style={{ "--e": 1 }}></span>
        <span style={{ "--e": 2 }}></span>
        <span style={{ "--e": 3 }}></span>
        <span style={{ "--e": 4 }}></span>
        <span style={{ "--e": 5 }}></span>
        <span style={{ "--e": 6 }}></span>
        <span style={{ "--e": 7 }}></span>
      </div>
      <svg className="absolute">
        <filter id="liquid">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          <feColorMatrix
            values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 28 -10
            "
          />
        </filter>
      </svg>
    </div>
  );
};

export default Loader;
