var canvas, backgroundImage;

var board
var mapper
var cells = 17
var size = 35

function setup(){
  canvas = createCanvas(800,800);

  mapper = new Mapper(400, 400, size, cells)
}


function draw(){
  rectMode(CENTER)
}
