let bee;
function setup() {
  createCanvas(640, 540);
  bee = new Bee(8,4);;
}

/** This function redraws the sketch multiple times a second. */
function draw() {
  background("#0097fe")
  bee.show()
  bee.fly()
}
