"use client";

import Link from "next/link";
import {
  RiInstagramFill,
  RiGoogleFill,
  RiTwitchFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  { path: "/", name: <RiWhatsappFill /> },
  { path: "/", name: <RiInstagramFill /> },
  { path: "/", name: <RiGoogleFill /> },
  { path: "/", name: <RiTwitchFill /> },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
