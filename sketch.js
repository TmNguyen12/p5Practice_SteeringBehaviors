var font; 

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf'); 
}

function setup() {
  createCanvas(800,300); 
  background(51); 
  textFont(font);
  textSize(128); 
  fill(255); 
  text('rainbow', 10, 200); 
}

function draw() {
  
}

