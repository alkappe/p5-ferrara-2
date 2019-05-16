function setup() {
  createCanvas(400, 400);
  noFill();
  frameRate(1);
}

function draw() {
  background(255, random(255), random(255));
  ellipse( 200, 200, random(400), 400 );
  ellipse( 200, 200, random(400), 400 );
  ellipse( 200, 200, random(400), 400 );
}
