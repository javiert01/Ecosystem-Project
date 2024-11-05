let bee;
let fish;
let lake;
function setup() {
  createCanvas(640, 540);
  bee = new Bee(8,4);
  fish = new Fish(18, 6)
  lake = new Lake(400, 150)
}

/** This function redraws the sketch multiple times a second. */
function draw() {
  background("#0097fe")
  noStroke()
  fill("#581d11")
  rect(0, height/2, width, height/2)
  lake.show()
  fill(255,0,120)
  ellipse(lake.position.x - 150, lake.position.y, 8)
  bee.show()
  bee.fly()
  fish.show()
  fish.swim(lake.position, lake.wLake, lake.hLake, createVector(lake.position.x - 150, lake.position.y))
}
