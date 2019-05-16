 function setup() {
   createCanvas(400, 400);

    for (var x=0;  x<width;  x++) {
       for (var y=0;  y<height;  y++) {

          var grigio = noise( x/30, y/30 );

          set( x, y, color(grigio*255) );
       }
    }
    updatePixels();
 }
 
 function draw() {
   
 }
