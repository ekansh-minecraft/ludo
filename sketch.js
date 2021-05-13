var canvas, backgroundImage;

var mapper
var cells = 17
var cell_size = 35

var board

function setup(){
  canvas = createCanvas(800,800);
  mapper = new Mapper(100, 100, cell_size)
  board = new Board(mapper, 15)
}


function draw(){
  background("darkblue")
  rectMode(CENTER)

  board.draw()
}
