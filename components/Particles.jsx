"use client";

import { useEffect, useRef } from "react";

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");

    const colorParticle = "rgba(180, 180, 180, 0.65)";

    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    let particlesArray = [];
    const mouse = { x: null, y: null, radius: 170 };

    /* const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      mouse.radius = 170;
    }; */

    const handleMouseStop = (() => {
      let thread;
      return () => {
        clearTimeout(thread);
        thread = setTimeout(() => (mouse.radius = 0), 10);
      };
    })();

    const handleResize = () => {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
      mouse.radius = 170;
      init();
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = colorParticle;
        ctx.fill();
      }

      update() {
        if (this.x > cvs.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > cvs.height || this.y < 0)
          this.directionY = -this.directionY;

        /* const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < cvs.width - this.size * 10)
            this.x += 10;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
          if (mouse.y < this.y && this.y < cvs.height - this.size * 10)
            this.y += 10;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
        } */

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (cvs.height * cvs.width) / 40000; // Menos partículas
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 25 + 1; // Ajusta el tamaño si lo deseas
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 1.5 - 0.75; // Movimiento más lento horizontal
        let directionY = Math.random() * 1.5 - 0.75; // Movimiento más lento vertical
        let color = colorParticle;
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (const particle of particlesArray) {
        particle.update();
      }
    };

    // Initialize and animate
    init();
    animate();

    // Event listeners
    /* window.addEventListener("mousemove", handleMouseMove); */
    /* window.addEventListener("mousemove", handleMouseStop); */
    window.addEventListener("resize", handleResize);
    /* window.addEventListener("mouseout", handleMouseOut); */

    // Cleanup on component unmount
    return () => {
      /* window.removeEventListener("mousemove", handleMouseMove); */
      window.removeEventListener("mousemove", handleMouseStop);
      /* window.removeEventListener("resize", handleResize); */
      /* window.removeEventListener("mouseout", handleMouseOut); */
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Asegura que quede debajo del contenido
        pointerEvents: "none", // Evita que interfiera con interacciones del mouse
      }}
    />
  );
};

export default Particles;
