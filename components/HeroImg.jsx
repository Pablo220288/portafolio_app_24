import Image from "next/image";
import React from "react";

const HeroImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="Hero Image" fill priority />
    </div>
  );
};

export default HeroImg;
