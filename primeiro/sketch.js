function setup() {

  createCanvas(200,200);
  bgcolor = color(51);
  txt = createP('Ola outra vez');
  txt.style("background-color","pink");
  button = createButton("vai");
  button.mousePressed(changeStyle);
}

function draw() {

  background(bgcolor);
  fill(255,0,175);
  ellipse(100,100,50,50);
}

function changeStyle(){
  txt.style("background-color","white");
  txt.style("padding","24px");
}
