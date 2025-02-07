HTMLCanvasElement.prototype.createCanvasContext = function (...args) {
  let context;

  if (args.length == 2) {
    this.width = args[0];
    this.height = args[1];
  }

  context = this.getContext("2d");

  return context;
};

CanvasRenderingContext2D.prototype.fillDraw =
  CanvasRenderingContext2D.prototype.fill;
CanvasRenderingContext2D.prototype.strokeDraw =
  CanvasRenderingContext2D.prototype.stroke;
CanvasRenderingContext2D.prototype.closePathDraw =
  CanvasRenderingContext2D.prototype.closePath;

const canvasutils = {
  fillColor: [255, 255, 255],
  strokeColor: [0, 0, 0],

  background: function () {
    if (arguments[0] == String) {
      this.fillStyle = arguments[0];
    } else {
      this.fillStyle =
        "rgb( " +
        arguments[0] +
        ", " +
        arguments[1] +
        ", " +
        arguments[2] +
        ")";
    }

    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.fillStyle =
      "rgb( " +
      this.fillColor[0] +
      ", " +
      this.fillColor[1] +
      ", " +
      this.fillColor[2] +
      ")";
  },

  fill: function () {
    if (arguments[0] == String) {
      this.fillStyle = arguments[0];
    } else {
      this.fillColor = arguments;
    }
    this.fillStyle =
      "rgb( " +
      this.fillColor[0] +
      ", " +
      this.fillColor[1] +
      ", " +
      this.fillColor[2] +
      ")";
  },

  stroke: function () {
    if (arguments[0] == String) {
      this.strokeStyle = arguments[0];
    } else {
      strokeColor = arguments;
    }
    this.strokeStyle =
      "rgb( " +
      this.strokeColor[0] +
      ", " +
      this.strokeColor[1] +
      ", " +
      this.strokeColor[2] +
      ")";
  },

  closePath: function () {
    this.closePathDraw();
    this.fillDraw();
    this.strokeDraw();
  },

  point: function (x, y) {
    this.fillStyle =
      "rgb( " +
      this.strokeColor[0] +
      ", " +
      this.strokeColor[1] +
      ", " +
      this.strokeColor[2] +
      ")";
    this.beginPath();
    this.arc(x, y, this.lineWidth/2, 0, Math.PI * 2, false);
    this.closePath();
    this.fillStyle =
      "rgb( " +
      this.fillColor[0] +
      ", " +
      this.fillColor[1] +
      ", " +
      this.fillColor[2] +
      ")";
  },

  rect: function (x, y, w, h) {
    ctx.fillRect(x, y, w, h);
  },
};

Object.keys(canvasutils).forEach((e) => {
  CanvasRenderingContext2D.prototype[e] = canvasutils[e];
});

window.addEventListener("load", function () {
  if (window["main"]) {
    try {
      window["main"]();
    } catch (e) {
      throw e;
    }
  }
});
