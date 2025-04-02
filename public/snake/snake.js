const scoreNumber = document.querySelector(".score-number");

const Snake = {
  position: { x: 0, y: Math.floor(ROWS / 2) },
  velocity: { x: 1, y: 0 },
  length: 4,
  segments: [],
  score: 0,
  readyToMove: true,
  velocityMove: 250,
  draw(context) {
    this.segments.forEach((segment, i) => {
      this.setSpriteFrame(i);

      context.drawImage(
        image,
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
    scoreNumber.innerHTML = this.score;
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
      GAME.gameOver = true;
    }

    //Come la fruta
    if (this.position.x === Food.x && this.position.y === Food.y) {
      Food.reset();
      this.length++;
      this.score += 1;
      this.velocityMove -= 10
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
    this.score = 0;
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
