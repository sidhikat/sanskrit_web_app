var reset_photo=true;

function setup() {
  var canvas = createCanvas(500, 400);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('drawing_container');
  //img = createImg('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
  //img.hide();
  background(255);
  mybool=true
}


function draw() {
  if(reset_photo){
    //image(img, 0,0,width,height);
    reset_photo=false;
  }
  stroke(0);
  strokeWeight(10);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


function  keyTyped() {
  if (keyCode === ENTER) {
    clear();
    background(255);
    reset_photo=true;
  }
}
