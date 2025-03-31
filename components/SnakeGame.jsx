import React, { useEffect, useRef, useState } from "react";

const SnakeGame = () => {
  const [gameOver, setGameOver] = useState(false);
  const [scoreNumber, setScoreNumber] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si el juego está corriendo
  const [direction, setDirection] = useState("RIGHT");

  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const imageRef = useRef(null);

  const CELL_SIZE = 25;
  const COLUMNS = 15;
  const ROWS = 15;
  const GAME = {
    width: COLUMNS * CELL_SIZE,
    height: ROWS * CELL_SIZE,
    loop: 0,
  };

  const spriteWidth = 64;
  const spriteHeight = 64;

  const handleUp = () => {
    setDirection("UP");
  };

  const handleDown = () => {
    setDirection("DOWN");
  };

  const handleLeft = () => {
    setDirection("LEFT");
  };

  const handleRight = () => {
    setDirection("RIGHT");
  };

  const Snake = {
    position: { x: 0, y: Math.floor(ROWS / 2) },
    velocity: { x: 1, y: 0 },
    length: 4,
    segments: [],
    readyToMove: true,
    velocityMove: 100,
    draw(context) {
      this.segments.forEach((segment, i) => {
        this.setSpriteFrame(i);

        context.drawImage(
          imageRef.current,
          segment.frameX * spriteWidth,
          segment.frameY * spriteHeight,
          spriteWidth,
          spriteHeight,
          segment.x * CELL_SIZE,
          segment.y * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );
      });
      /* scoreNumber.innerHTML = scoreNumber; */
    },
    update() {
      this.readyToMove = true;
      //Movimiento
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      //Agregamos o Quitamos Segmentos
      this.segments.unshift({
        x: this.position.x,
        y: this.position.y,
        frameX: 0,
        frameY: 0,
      });
      if (this.segments.length > this.length) {
        this.segments.pop();
      }

      //Colisiones
      if (
        this.position.x < 0 ||
        this.position.x > COLUMNS - 1 ||
        this.position.y < 0 ||
        this.position.y > ROWS - 1
      ) {
        setGameOver(true);
      }

      //Come la fruta
      if (this.position.x === Food.x && this.position.y === Food.y) {
        Food.reset();
        this.length++;
        setScoreNumber(scoreNumber + 1);
        this.velocityMove -= 10;
      }

      //Come su cola
      this.segments.forEach((segment, i) => {
        if (
          i > 0 &&
          segment.x === this.position.x &&
          segment.y === this.position.y
        ) {
          this.segments.length = i + 1;
          this.score -= 5;
          this.length = this.segments.length;
        }
      });
    },

    reset() {
      this.position = { x: 0, y: Math.floor(ROWS / 2) };
      this.velocity = { x: 1, y: 0 };
      this.length = 4;
      this.segments = [];
      setScoreNumber(0);
      for (let i = 0; i < this.length; i++) {
        if (i > 0) {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
        }

        this.segments.unshift({
          x: this.position.x,
          y: this.position.y,
          frameX: 0,
          frameY: 0,
        });
      }
    },

    moveUp() {
      if (this.velocity.y === 0 && this.readyToMove) {
        this.velocity.x = 0;
        this.velocity.y = -1;
        this.readyToMove = false;
      }
    },
    moveDown() {
      if (this.velocity.y === 0 && this.readyToMove) {
        this.velocity.x = 0;
        this.velocity.y = 1;
        this.readyToMove = false;
      }
    },
    moveLeft() {
      if (this.velocity.x === 0 && this.readyToMove) {
        this.velocity.x = -1;
        this.velocity.y = 0;
        this.readyToMove = false;
      }
    },
    moveRight() {
      if (this.velocity.x === 0 && this.readyToMove) {
        this.velocity.x = 1;
        this.velocity.y = 0;
        this.readyToMove = false;
      }
    },

    setSpriteFrame(index) {
      const segment = this.segments[index];
      const nextSegment = this.segments[index + 1] || 0;
      const prevSegment = this.segments[index - 1] || 0;
      if (index === 0) {
        if (segment.y < nextSegment.y) {
          segment.frameX = 3;
          segment.frameY = 0;
        } else if (segment.y > nextSegment.y) {
          segment.frameX = 4;
          segment.frameY = 1;
        } else if (segment.x < nextSegment.x) {
          segment.frameX = 3;
          segment.frameY = 1;
        } else if (segment.x > nextSegment.x) {
          segment.frameX = 4;
          segment.frameY = 0;
        }
      } else if (index === this.segments.length - 1) {
        if (prevSegment.y < segment.y) {
          segment.frameX = 3;
          segment.frameY = 2;
        } else if (prevSegment.y > segment.y) {
          segment.frameX = 4;
          segment.frameY = 3;
        } else if (prevSegment.x > segment.x) {
          segment.frameX = 4;
          segment.frameY = 2;
        } else if (prevSegment.x < segment.x) {
          segment.frameX = 3;
          segment.frameY = 3;
        }
      } else {
        if (nextSegment.x < segment.x && prevSegment.x > segment.x) {
          //Moviviento Horizontla Derecho
          segment.frameX = 1;
          segment.frameY = 0;
        } else if (nextSegment.x > segment.x && prevSegment.x < segment.x) {
          //Moviviento Horizontla Izquierdo
          segment.frameX = 1;
          segment.frameY = 0;
        } else if (nextSegment.y > segment.y && prevSegment.y < segment.y) {
          //Moviviento Vertical Arriba
          segment.frameX = 2;
          segment.frameY = 1;
        } else if (nextSegment.y < segment.y && prevSegment.y > segment.y) {
          //Moviviento Vertical Abajo
          segment.frameX = 2;
          segment.frameY = 1;
        } else if (prevSegment.x < segment.x && nextSegment.y > segment.y) {
          //Moviviento Arriba Izquierda
          segment.frameX = 2;
          segment.frameY = 0;
        } else if (prevSegment.y > segment.y && nextSegment.x > segment.x) {
          //Moviviento Izquierda Abajo
          segment.frameX = 0;
          segment.frameY = 0;
        } else if (prevSegment.x > segment.x && nextSegment.y < segment.y) {
          //Moviviento Abajo Derecha
          segment.frameX = 0;
          segment.frameY = 1;
        } else if (prevSegment.y < segment.y && nextSegment.x < segment.x) {
          //Moviviento Derecha Arriba
          segment.frameX = 2;
          segment.frameY = 2;
        } else if (nextSegment.x < segment.x && prevSegment.y > segment.y) {
          //Moviviento Derecha Abajo
          segment.frameX = 2;
          segment.frameY = 0;
        } else if (nextSegment.y < segment.y && prevSegment.x < segment.x) {
          //Moviviento Abajo Izquierda
          segment.frameX = 2;
          segment.frameY = 2;
        } else if (nextSegment.x > segment.x && prevSegment.y < segment.y) {
          //Moviviento Izquierda Arriba
          segment.frameX = 0;
          segment.frameY = 1;
        } else if (nextSegment.y > segment.y && prevSegment.x > segment.x) {
          //Moviviento Arriba Derecha
          segment.frameX = 0;
          segment.frameY = 0;
        } else {
          segment.frameX = 0;
          segment.frameY = 3;
        }
      }
    },
  };

  const Food = {
    x: Math.floor(Math.random() * COLUMNS),
    y: Math.floor(Math.random() * ROWS),

    draw(context) {
      context.drawImage(
        imageRef.current,
        0 * spriteWidth,
        3 * spriteHeight,
        spriteWidth,
        spriteHeight,
        this.x * CELL_SIZE,
        this.y * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
      );
    },
    reset() {
      this.x = Math.floor(Math.random() * COLUMNS);
      this.y = Math.floor(Math.random() * ROWS);
    },
  };

  /* useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = GAME.width;
    canvas.height = GAME.height;

    if (!isRunning) return; // No ejecutar la animación si el juego no ha iniciado

    let lastTime = 0;

    function animate(timestamp) {
      if (gameOver) {
        document.fonts.load('30px "Press Start 2P"').then(() => {
          ctx.textAlign = "center";
          ctx.fillStyle = "black";
          ctx.font = '20px "Press Start 2P"';
          ctx.fillText("Game Over", canvas.width * 0.5, canvas.height * 0.5);
        });
        return;
      }

      // Si el tiempo transcurrido es mayor que el tiempo de velocidad de la serpiente, actualizamos el estado
      if (timestamp - lastTime >= Snake.velocityMove) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Snake.draw(ctx);
        Food.draw(ctx);
        Snake.update();
        lastTime = timestamp;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Snake.draw(ctx);
      Food.draw(ctx);
      Snake.update();

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning, gameOver, Snake, Food]); */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = GAME.width;
    canvas.height = GAME.height;

    if (!isRunning) return; // No ejecutar la animación si el juego no ha iniciado

    let lastTime = 0; // Para calcular deltaTime
    let timeAccumulator = 0; // Acumulador de tiempo

    function animate(timestamp) {
      if (gameOver) {
        document.fonts.load('30px "Press Start 2P"').then(() => {
          ctx.textAlign = "center";
          ctx.fillStyle = "black";
          ctx.font = '20px "Press Start 2P"';
          ctx.fillText("Game Over", canvas.width * 0.5, canvas.height * 0.5);
        });
        return;
      }

      // Calcular el tiempo transcurrido desde el último fotograma
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp; // Actualizamos el último tiempo

      timeAccumulator += deltaTime; // Acumulamos el tiempo transcurrido

      // Si el acumulador supera el tiempo para un movimiento, actualizamos la serpiente
      if (timeAccumulator >= Snake.velocityMove) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
        Snake.update(); // Actualizamos la serpiente
        Snake.draw(ctx); // Dibujamos la serpiente
        Food.draw(ctx); // Dibujamos la comida
        timeAccumulator = 0; // Reiniciamos el acumulador
      }

      // Continuamos la animación
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning, gameOver, Snake, Food]);

  useEffect(() => {
    const moveSnake = () => {
      switch (direction) {
        case "UP":
          Snake.moveUp(); // Llama a la función que mueve la serpiente hacia arriba
          break;
        case "DOWN":
          Snake.moveDown(); // Llama a la función que mueve la serpiente hacia abajo
          break;
        case "LEFT":
          Snake.moveLeft(); // Llama a la función que mueve la serpiente hacia la izquierda
          break;
        case "RIGHT":
          Snake.moveRight(); // Llama a la función que mueve la serpiente hacia la derecha
          break;
        default:
          break;
      }
    };
  
    moveSnake(); // Llamamos a la función de movimiento
  
    // Continuar con la animación del juego
  }, [direction]); // Se ejecutará cada vez que cambie la dirección

  function startGame() {
    if (!isRunning) {
      setIsRunning(true);
      setGameOver(false);
    }
  }

  function resetGame() {
    setIsRunning(false);
    setGameOver(false);
    Snake.reset();
    Food.reset();
  }

  function pauseGame() {
    setIsRunning(false);
    cancelAnimationFrame(animationRef.current);
  }

  return (
    <div className="content-snake-game">
      <div className="snake-assets">
        <img
          src="./snake/snake-graphics.png"
          id="snake-graphics"
          alt="Snake"
          ref={imageRef}
          className="hidden"
        />
      </div>
      <div className="title-snake"></div>
      <canvas id="snake-canvas" ref={canvasRef}></canvas>
      {gameOver && (
        <div>
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
      <div className="buttons-snake">
        <div role="button" className="retro-btn">
          <a
            className="btn"
            id="start"
            onClick={isRunning ? resetGame : startGame}
          >
            <span className="btn-inner">
              <span className="content-wrapper">
                <span className="btn-content">
                  <span className="btn-content-inner">
                    {isRunning ? "Reset" : "Start"}
                  </span>
                </span>
              </span>
            </span>
          </a>
        </div>

        <div className="content-buttons">
          <div
            role="button"
            className="retro-btn sm btn-up"
            id="up"
            onClick={handleUp}
          >
            <a className="btn" id="up">
              <span className="btn-inner">
                <span className="content-wrapper">
                  <span className="btn-content">
                    <span className="btn-content-inner">
                      <svg className="ionicon" viewBox="0 0 512 512">
                        <path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div
            role="button"
            className="retro-btn sm btn-left"
            id="left"
            onClick={handleLeft}
          >
            <a className="btn" id="left">
              <span className="btn-inner">
                <span className="content-wrapper">
                  <span className="btn-content">
                    <span className="btn-content-inner">
                      <svg className="ionicon" viewBox="0 0 512 512">
                        <path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div
            role="button"
            className="retro-btn sm btn-down"
            id="down"
            onClick={handleDown}
          >
            <a className="btn" id="down">
              <span className="btn-inner">
                <span className="content-wrapper">
                  <span className="btn-content">
                    <span className="btn-content-inner">
                      <svg className="ionicon" viewBox="0 0 512 512">
                        <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div
            role="button"
            className="retro-btn sm btn-right"
            id="right"
            onClick={handleRight}
          >
            <a className="btn" id="right">
              <span className="btn-inner">
                <span className="content-wrapper">
                  <span className="btn-content">
                    <span className="btn-content-inner">
                      <svg className="ionicon" viewBox="0 0 512 512">
                        <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
