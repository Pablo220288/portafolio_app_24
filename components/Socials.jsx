"use client";

import Link from "next/link";
import {
  RiGoogleFill,
  RiTwitchFill,
  RiWhatsappFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  { path: "/", name: <RiWhatsappFill /> },
  { path: "/", name: <RiGoogleFill /> },
  { path: "/", name: <RiTwitchFill /> },
  { path: "/", name: <RiYoutubeFill /> },
  { path: "/", name: <RiLinkedinFill /> },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
