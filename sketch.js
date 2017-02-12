function setup() {
  frameRate(5);
  createCanvas(800, 600);  
  rectMode(CENTER);
}

function draw() {
  var r =0;
  var s =0;
  var m=10;
  background(20,40,120);
  noStroke;
  
  
  for (r = 0; r <= width; r += 30) {
    for (s = 0; s <= height; s += 30) {
    fill(random(20), 20, random(20));
    rect(r, s, 20, 20);
  }
  
  for (var x = 0; x <= mouseX; x += 30) {
    for (var y = 0; y <= mouseY; y += 30) {
    fill(random(120), random(100), 120);
    ellipse(x, y, m, m);
    }
    
if (keyIsPressed === true) {
    m=27;
  }
}
}
}
