// Escuchar eventos del teclado
window.addEventListener("keydown", function (e) {
  handleMovement(e.key);
});

// Obtener los botones y agregar eventos de clic
document.getElementById("up").addEventListener("click", () => handleMovement("ArrowUp"));
document.getElementById("left").addEventListener("click", () => handleMovement("ArrowLeft"));
document.getElementById("down").addEventListener("click", () => handleMovement("ArrowDown"));
document.getElementById("right").addEventListener("click", () => handleMovement("ArrowRight"));

// Función para manejar el movimiento
function handleMovement(direction) {
  if (direction === "ArrowUp") Snake.moveUp();
  else if (direction === "ArrowDown") Snake.moveDown();
  else if (direction === "ArrowLeft") Snake.moveLeft();
  else if (direction === "ArrowRight") Snake.moveRight();
}

let velocity = Snake.velocityMove;
console.log(velocity);

const start = document.getElementById("start");
const spanLabel = document.getElementById("label-start-reset");

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = GAME.width;
canvas.height = GAME.height;
ctx.font = "50px Impact";
ctx.textBaseline = "top";

spanLabel.setAttribute("label", "Start");

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Snake.draw(ctx);
  Food.draw(ctx);

  Snake.update();

  if (GAME.gameOver) {
    document.fonts.load('30px "Press Start 2P"').then(() => {
      ctx.textAlign = "center";
      ctx.fillStyle = "black";
      ctx.font = '20px "Press Start 2P"';
      ctx.fillText("Game Over", canvas.width * 0.5, canvas.height * 0.5);
    });
    clearInterval(GAME.loop);

    spanLabel.setAttribute("label", "Start");
  }
}

start.addEventListener("click", function () {
  if (spanLabel.getAttribute("label") === "Start") {
    spanLabel.setAttribute("label", "Pause");
    GAME.loop = setInterval(animate, velocity);
    resetGame();
  } else if (spanLabel.getAttribute("label") === "Pause") {
    spanLabel.setAttribute("label", "Play");
    if (!GAME.gameOver) {
      clearInterval(GAME.loop);
    }
  } else {
    spanLabel.setAttribute("label", "Play");
    if (!GAME.gameOver) {
      GAME.loop = setInterval(animate, velocity);
    }
  }
});

window.addEventListener("load", function () {});
