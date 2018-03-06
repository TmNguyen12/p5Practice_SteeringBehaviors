var font; 

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf'); 
}

function setup() {
  createCanvas(1000,300); 
  background(51); 
  // textFont(font);
  // textSize(192); 
  // fill(255); 
  // noStroke(); 
  // text('rainbow', 30, 200); 

  var points = font.textToPoints('Whimsical', 30, 200, 192); 
  console.log(points); 

  for (let i = 0; i < points.length; i++){
    let pt = points[i]; 
    stroke(255);
    strokeWeight(6);
    point(pt.x, pt.y); 
  }
}

function draw() {
  
}

