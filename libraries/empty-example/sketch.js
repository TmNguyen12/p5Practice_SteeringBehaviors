var font; 

function preload() {
  font = loadFont('https://github.com/Lothiraldan/feedlight/blob/master/static/font/AvenirNextLTPro-Demi.otf'); 
}


function setup() {
  // put setup code here
  createCanvas(800,300); 
  background(51); 
  textFont(font);
  textSize(128); 
  fill(255); 
  text('rainbow', 10, 200);
}

function draw() {
  // put drawing code here
  ellipse(50, 50, 80, 80);
}