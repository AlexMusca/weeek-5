function setup() {
  createCanvas(800, 1000);
background(200);
  strokeWeight(2);
}

var x = 150
var y = 450
var d = 40
var a = 80
var b = 40
var c = 40


function draw() {
  for(var i = 1; i < 7; i++){
    noFill();
    ellipse(x, y, d*i, d*i)
  }
for(var i = 1; i < 7; i++) {
  noFill();
  ellipse(x*3, y, d*i, d*i)

  for(var i = 1; i < 15; i++) {
    fill(240);
    rect (a*i, b*i, c*2, c)
  }
  rect(0, 0, 80, 40);

}

}
