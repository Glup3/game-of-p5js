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
        this.grid.push(new Cell(x * this.cellW, y * this.cellH, this.cellW, this.cellH));
      }
    }
  };

  this.draw = function () {
    for (let i = 0; i < rows * cols; i++) {
      this.grid[i].draw();
    }
  };
}
