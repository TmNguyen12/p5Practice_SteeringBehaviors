
// constructor
function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height)); 
  this.target = createVector(x, y); 
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8; 
  this.maxspeed = 10; 
  this.maxforce = 0.3; 
  this.fleeing = false; 
  // this.maxforce = 1; 
}

Vehicle.prototype.behaviors = function() {
  let arrive = this.arrive(this.target); 
  this.applyForce(arrive);
  this.show();
  let mouse = createVector(mouseX, mouseY);
  let flee = this.flee(mouse); 
  // arrive.mult(1); 
  // flee.mult(3); 
  
  this.applyForce(flee); 
}; 

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f); 
};  

Vehicle.prototype.flee = function(target) {
  let desired = p5.Vector.sub(target, this.pos); 
  this.fleeing = true; 
  let d = desired.mag(); 
  if (d < 60) {
    desired.setMag(this.maxspeed);
    desired.mult(-1); // multiply force in opposite direction
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(15); 
    return steer; 
  } else {
    return createVector(0, 0); 
  }
}; 

Vehicle.prototype.arrive = function(target) {
  let desired = p5.Vector.sub(target, this.pos); 
  this.fleeing = false; 
  let d = desired.mag(); 
  let speed = this.maxspeed; 
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed); 
  } 
  desired.setMag(speed); 
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce); 
  return steer; 
}; 

Vehicle.prototype.update = function() {
  this.pos.add(this.vel); 
  this.vel.add(this.acc);
  this.acc.mult(0); 
  
}; 

Vehicle.prototype.show = function() {
  if (this.fleeing){
    stroke(66, 82, 188);
  } else {
    stroke(255); 
  }
  strokeWeight(6);
  point(this.pos.x, this.pos.y); 
};

