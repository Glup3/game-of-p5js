function Game(cols, rows, cellW, cellH) {
  this.cols = cols;
  this.rows = rows;
  this.cellW = cellW;
  this.cellH = cellH;
  this.grid = [];

  this.init = function () {
    this.grid = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.grid.push(new Cell(x * this.cellW, y * this.cellH, this.cellW, this.cellH, true));
      }
    }
  };

  this.draw = function () {
    for (let i = 0; i < this.rows * this.cols; i++) {
      this.grid[i].draw();
    }
  };

  this.getLivingNeighboursCount = function (pos) {
    let neighbours = 0;

    const north = pos - this.cols;
    const northEast = pos - this.cols + 1;
    const east = pos + 1;
    const southEast = pos + this.cols + 1;
    const south = pos + this.cols;
    const southWest = pos + this.cols - 1;
    const west = pos - 1;
    const northWest = pos - this.cols - 1;

    for (const index of [north, northEast, east, southEast, south, southWest, west, northWest]) {
      if (index < 0) {
        continue;
      }

      if (index >= this.grid.length) {
        continue;
      }

      if (pos % this.cols === 0 && (index === northWest || index === west || index === southWest)) {
        continue;
      }

      if ((pos + 1) % this.cols === 0 && (index === northEast || index === east || index === southEast)) {
        continue;
      }

      if (!this.grid[index].isDead) {
        neighbours++;
      }
    }

    return neighbours;
  };
}
