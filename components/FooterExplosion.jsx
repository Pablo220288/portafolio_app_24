"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNestjs,
  SiDjango,
  SiTailwindcss,
  SiAstro,
  SiPython,
  SiGithub,
} from "react-icons/si";
import ReactDOMServer from "react-dom/server";

const FooterExplosion = () => {
  const explosionContainerRef = useRef(null);
  const footerRef = useRef(null);
  const [explosionTriggered, setExplosionTriggered] = useState(false);
  const iconsRef = useRef([]);

  const config = {
    gravity: 0.25,
    friction: 0.99,
    size: 100,
    horizontalForce: 10,
    verticalForce: 15,
    rotationSpeed: 10,
    resetDelay: 500,
  };

  const icons = [
    <FaCss3 color="#1572B6" />,
    <FaHtml5 color="#E34F26" />,
    <FaJs color="#F7DF1E" />,
    <FaReact color="#61DAFB" />,
    <FaAws color="#FF9900" />,
    <FaNodeJs color="#3C873A" />,
    <SiNestjs color="#E0234E" />,
    <SiDjango color="#092E38" />,
    <SiTailwindcss color="#38B2AC" />,
    <SiAstro color="#FF5A03" />,
    <SiPython color="#3776AB" />,
    <SiGithub color="#333333" />,
  ];

  class IconParticle {
    constructor(element) {
      this.element = element;
      this.x = 0;
      this.y = 0;
      this.vx = (Math.random() - 0.5) * config.horizontalForce;
      this.vy = -config.verticalForce - Math.random() * 10;
      this.rotation = 0;
      this.rotationSpeed = (Math.random() - 0.5) * config.rotationSpeed;
    }
    
    update() {
      this.vy += config.gravity;
      this.vx *= config.friction;
      this.vy *= config.friction;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      if (this.element) {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`;
      }
    }
  }

  const createIcons = () => {
    if (!explosionContainerRef.current) return;

    explosionContainerRef.current.innerHTML = "";
    iconsRef.current = [];

    icons.forEach((icon) => {
      const iconElement = document.createElement("div");
      iconElement.classList.add("icon");
      iconElement.style.position = "absolute";
      iconElement.style.fontSize = "30px";

      iconElement.innerHTML = ReactDOMServer.renderToString(icon);
      explosionContainerRef.current.appendChild(iconElement);
      iconsRef.current.push(new IconParticle(iconElement));
    });
  };

  const explode = () => {
    if (explosionTriggered) return;

    setExplosionTriggered(true);
    createIcons();

    let animationID;
    let finished = false;

    const animate = () => {
      if (finished) return;

      iconsRef.current.forEach((icon) => icon.update());

      if (
        explosionContainerRef.current &&
        iconsRef.current.every(
          (icon) => icon.y > explosionContainerRef.current.offsetHeight / 2
        )
      ) {
        cancelAnimationFrame(animationID);
        finished = true;
      } else {
        animationID = requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const checkScroll = () => {
    if (!footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (!explosionTriggered && rect.top < viewportHeight * 0.8) {
      explode();
    }

    // Si el footer ya no está visible, permitimos que la explosión se reinicie
    if (rect.bottom < 0 || rect.top > viewportHeight) {
      setExplosionTriggered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [explosionTriggered]);

  return (
    <div
      ref={footerRef}
      id="footer"
      className="bg-transparent absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[600px] w-full"
    >
      <div
        ref={explosionContainerRef}
        className="explosion-container absolute bottom-0 left-0 w-full h-[200%] pointer-events-none"
      ></div>
    </div>
  );
};

export default FooterExplosion;
