let totalPts = 300;
let steps = totalPts + 1;

function setup() {
  createCanvas(1400, 600);
  stroke(255);
  frameRate(2);
}

function draw() {
  background(0);
  var rand = 0;
  for (var i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    //rand += random(-5, 5);
    print(rand)
  }
}
