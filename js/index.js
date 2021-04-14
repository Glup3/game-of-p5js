/// <reference path="../TSDef/p5.global-mode.d.ts" />

const rows = 15;
const cols = 20;
const width = 30;
const height = 30;

let game;

function nextGeneration() {
  const nextGen = new Map();

  for (let i = 0; i < game.grid.length; i++) {
    const neighbours = game.getLivingNeighboursCount(i);

    if (game.grid[i].isDead && neighbours === 3) {
      nextGen.set(i, false);
      continue;
    }

    if (!game.grid[i].isDead && (neighbours < 2 || neighbours > 3)) {
      nextGen.set(i, true);
      continue;
    }
  }

  for (let [key, value] of nextGen) {
    game.grid[key].isDead = value;
  }
}

function mouseClicked() {
  for (let i = 0; i < game.grid.length; i++) {
    game.grid[i].clicked();
  }
}

function setupDOM() {
  createCanvas(width * cols, height * rows).parent('gameArea');

  const startBtn = select('#startBtn');
  const stopBtn = select('#stopBtn');
  const nextBtn = select('#nextBtn');

  startBtn.mousePressed(() => loop());
  stopBtn.mousePressed(() => noLoop());
  nextBtn.mousePressed(() => redraw());
}

function setup() {
  setupDOM();
  game = new Game(cols, rows, width, height);
  game.init();

  game.draw();
  frameRate(5);
  noLoop();
}

function draw() {
  nextGeneration();
  game.draw();
}
