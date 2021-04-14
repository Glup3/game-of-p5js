function Cell(x, y, w, h, d) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.isDead = d;

  this.draw = function () {
    if (this.isDead) {
      fill(255);
    } else {
      fill(255, 204, 0);
    }

    rect(this.x, this.y, this.w, this.h);
  };

  this.clicked = function () {
    if (isInArea(this.x, this.y, mouseX, mouseY, this.w, this.h)) {
      this.isDead = this.isDead ? false : true;
      this.draw();
    }
  };
}

function isInArea(x, y, mX, mY, width, height) {
  const xDif = mX - x;
  const yDif = mY - y;

  if (xDif < width && xDif >= 0 && yDif < height && yDif >= 0) {
    return true;
  }

  return false;
}
