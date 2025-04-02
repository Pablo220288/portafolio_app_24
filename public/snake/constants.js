const CELL_SIZE = 25;
const COLUMNS = 15;
const ROWS = 15;
const GAME = {
  width: COLUMNS * CELL_SIZE,
  height: ROWS * CELL_SIZE,
  gameOver: false,
  loop: 0,
};

function resetGame() {
  GAME.gameOver = false;
  Snake.reset();
  Food.reset();
}

function pauseGame() {
  clearInterval(GAME.loop);
}

const image = document.getElementById("snake-graphics");
const spriteWidth = 64;
const spriteHeight = 64;

var buttons = document.querySelectorAll(".btn");

for (var i = 0; i < buttons.length; i++) {
  // Click
  buttons[i].addEventListener("mousedown", function () {
    this.classList.add("btn-active");
  });
  buttons[i].addEventListener("mouseup", function () {
    this.classList.remove("btn-active");
  });

  // Hover
  buttons[i].addEventListener("mouseleave", function () {
    this.classList.remove("btn-center", "btn-right", "btn-left", "btn-active");
  });

  buttons[i].addEventListener("mousemove", function (e) {
    var leftOffset = this.getBoundingClientRect().left;
    var btnWidth = this.offsetWidth;
    var myPosX = e.pageX;
    var newClass = "";
    // if on left 1/3 width of btn
    if (myPosX < leftOffset + 0.3 * btnWidth) {
      newClass = "btn-left";
    } else {
      // if on right 1/3 width of btn
      if (myPosX > leftOffset + 0.65 * btnWidth) {
        newClass = "btn-right";
      } else {
        newClass = "btn-center";
      }
    }
    // remove prev class
    var clearedClassList = this.className
      .replace(/btn-center|btn-right|btn-left/gi, "")
      .trim();
    this.className = clearedClassList + " " + newClass;
  });
}
