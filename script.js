// Code goes here

var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var id;
var entityImage = new Image();

function InitTests() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvasWidth = 100;
  canvasHeight = 100;
  id = ctx.getImageData(0, 0, 1, 1);
  ctx.scale(5,5);
  entityImage.src = 'pizza.png';
}

function FillRectTest() {
  var cycles = document.getElementById('cycles');

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for (var i = 0; i < cycles.value; ++i) {
    x = Math.floor(Math.random() * canvasWidth);
    y = Math.floor(Math.random() * canvasHeight);
    r = 180;
    addEntityImage(x,y,r);
  }
  
}

function addEntityImage(x,y,r) {
  rotateEntityImage(r);
  ctx.drawImage(entityImage, x, y, 5, 5);
}

function DownloadCanvas(){
  var download = document.getElementById("downloadCanvas");
  var image = document.getElementById("canvas").toDataURL("image/png")
  .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}

function rotateEntityImage(r){
  //entityImage.style.transform = "rotate("+r+"deg)";
}

