function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw (){
  if (mouseIsPressed) {
  stroke("white") // cor da liha
  fill ("black") // corn do fundo
  rect (mouseX,mouseY,05,05); // criando retangulo
  }
}
