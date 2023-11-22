function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("blue");
  strokeWeight(1)
  fill("lime");
  if(mouseIsPressed){
  rect(mouseX,mouseY,20,30);
  }
}
