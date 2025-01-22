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
  {
    path: "https://wa.me/5493516342315?text=Hola,%20me%20gustaría%20obtener%20más%20información",
    name: <RiWhatsappFill />,
  },
  {
    path: "mailto:peh7sep@gmail.com?subject=Consulta%20por%20mi%20Pagina%20Web&body=Hola,%20quisiera%20obtener%20más%20información",
    name: <RiGoogleFill />,
  },
  /* { path: "/", name: <RiTwitchFill /> }, */
  { path: "https://www.youtube.com/@DevPaul-yb1ci", name: <RiYoutubeFill /> },
  {
    path: "https://www.linkedin.com/in/pablo-hern%C3%A1ndez-19234b238/",
    name: <RiLinkedinFill />,
  },
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
