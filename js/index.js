/// <reference path="../TSDef/p5.global-mode.d.ts" />

const rows = 10;
const cols = 15;
const width = 30;
const height = 30;

let game;
let index = 0;

function movingSquare() {
  game.grid[index].isDead = true;
  game.grid[(index + 1) % (rows * cols)].isDead = false;

  index++;
  if (index >= rows * cols) {
    index = 0;
  }
}

function mouseClicked() {
  for (let i = 0; i < game.grid.length; i++) {
    game.grid[i].clicked();
  }
}

function setup() {
  createCanvas(width * cols, height * rows);
  game = new Game(cols, rows, width, height);
  game.init();

  game.draw();
  frameRate(5);
}

function draw() {
  game.draw();
  movingSquare();
}
