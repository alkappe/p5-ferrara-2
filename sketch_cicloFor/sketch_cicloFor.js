function setup() {
  createCanvas(400,400);
  background(0, 0, 0);
}


function draw() {
  //ciclo for costrutto 
  for (var e = 0; e < width;  e = e + 50 ) {
    for (var i = 0; i < height; i = i + 50 ) {
      fill(255, 255, 0);
      ellipse( e, i, 20, 20 );
      fill(0, 255, 0);
      ellipse( e, i, 10, 10 );
      rect(i, e, 50, 50);
    }
  }
}
