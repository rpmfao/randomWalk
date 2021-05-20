let x;
let y;

function setup() {
  createCanvas(600, 400);
  background(20);

  x = width/2;
  y = height/2;
}

function draw() {
  stroke(255);
  strokeWeight(1);
  point(x, y);

  let r = floor(random(4));
  
  switch (r) {
    case 0:
      x = x + 3;
      break;
    case 1:
      x = x - 3;
      break;
    case 2:
      y = y + 3;
      break;
    case 3:
      y = y - 3;
      break;
  }

}
