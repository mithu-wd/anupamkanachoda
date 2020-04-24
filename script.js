let img;

function setup() {
  createCanvas(img.width, img.height);
}
let x = 0;
let y = 0;
function preload() {
  img = loadImage("index.jpeg");
}
function draw() {
  background(255);
  image(img, 0, 0, img.width, img.height);

  let c = color(get(mouseX, mouseY));
  r = c.levels[0];
  g = c.levels[1];
  b = c.levels[2];
  a = c.levels[3];
  let colv = "RGB(" + r + "," + g + "," + b + "," + a + ")";
  noFill();
  stroke(c);
  strokeWeight(15);
  ellipse(img.width / 2, img.height / 2, img.width / 4);

  fill("red");
  noStroke();
  textSize(10);
  textStyle(BOLD);
  text(colv, img.width / 2 - 60, img.height / 2, 50, 50);
}
