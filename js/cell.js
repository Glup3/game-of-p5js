class Cell {
  constructor(x, y, w, h, d) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isDead = d;
  }

  draw() {
    if (this.isDead) {
      fill(255);
    } else {
      fill(255, 204, 0);
    }

    rect(this.x, this.y, this.w, this.h);
  }

  clicked(mX, mY) {
    if (isInArea(this.x, this.y, mX, mY, this.w, this.h)) {
      this.isDead = this.isDead ? false : true;
      this.draw();
    }
  }

  dragged(isDrawing, mX, mY) {
    if (isInArea(this.x, this.y, mX, mY, this.w, this.h)) {
      this.isDead = isDrawing ? false : true;
      this.draw();
    }
  }
}

function isInArea(x, y, mX, mY, width, height) {
  const xDif = mX - x;
  const yDif = mY - y;

  if (xDif < width && xDif >= 0 && yDif < height && yDif >= 0) {
    return true;
  }

  return false;
}
