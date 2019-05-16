function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  background(255);
}

var time = 0;

function draw() {
  for(var i=0; i<height; i++){
    var a = random(255);
    ellipse(i, height * noise(i / 100, time), 2, 5);
    stroke(0, 0, 0);
  }
  time = time + 0.02;
}
