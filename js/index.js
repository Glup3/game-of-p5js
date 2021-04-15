/// <reference path="../TSDef/p5.global-mode.d.ts" />

const rows = 15;
const cols = 20;
const width = 30;
const height = 30;

let game;
let penType = 'draw';

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

function mousePressed() {
  for (let i = 0; i < game.grid.length; i++) {
    game.grid[i].clicked(mouseX, mouseY);
  }
}

function mouseDragged() {
  for (let i = 0; i < game.grid.length; i++) {
    game.grid[i].dragged(penType === 'draw', mouseX, mouseY);
  }
}

function setupDOM() {
  createCanvas(width * cols, height * rows).parent('gameArea');

  const startBtn = select('#startBtn');
  const stopBtn = select('#stopBtn');
  const nextBtn = select('#nextBtn');
  const penTypeSelect = select('#penTypeSelect');

  startBtn.mousePressed(() => loop());
  stopBtn.mousePressed(() => noLoop());
  nextBtn.mousePressed(() => redraw());
  penTypeSelect.changed(() => {
    penType = penTypeSelect.value();
  });
}

function setup() {
  setupDOM();
  game = new Game(cols, rows, width, height);

  game.draw();
  frameRate(5);
  noLoop();
}

function draw() {
  nextGeneration();
  game.draw();
}
