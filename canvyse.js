
const canvasutils = {

  background: function () {
    if (arguments[0] == String) {
      this.fillStyle = arguments[0];
    } else {
      this.fillStyle = "rgb( " + arguments[0] + ", " + arguments[1] + ", " + arguments[2] + ")";
    }
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

}

Object.keys(canvasutils).forEach(e => {
  CanvasRenderingContext2D[e] = canvasutils[e];
})
 