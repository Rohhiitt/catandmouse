var tom,tomImg,tom_running,tomCollided;
var jerry,jerryImg,jerryTease,jerry4;
var gardenImg;

function preload() {
    tomImg = loadImage("cat1.png");
    tom_running = loadAnimation("cat2.png","cat3.png");
    tomCollided = loadImage("cat4.png");
    jerryImg = loadImage("mouse1.png");
    jerryTease = loadAnimation("mouse2.png","mouse3.png");
    jerry4 = loadImage("mouse4.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
  canvas = createCanvas(600,600);

  tom = createSprite(475,480,10,10);
  tom.addImage(tomImg);
  tom.scale = 0.1;

  jerry = createSprite(120,480,10,10);
  jerry.addImage(jerryImg);
  jerry.scale = 0.1;


}

function draw() {

    background(gardenImg);
    text(mouseX + "," +mouseY,10,45);

    if(keyDown(LEFT_ARROW)){
      keyPressed();
    }

    if(keyDown(LEFT_ARROW)){
      jerry.addAnimation("jerryTease",jerryTease);
      jerry.changeAnimation("jerryTease");
    }

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("catLastImage",tomCollided);
      tom.changeAnimation("catLastImage");

      jerry.addAnimation("jerryLastImage",jerry4);
      jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("catRunning",tom_running);
    tom.changeAnimation("catRunning");
  }

  //For moving and changing animation write code here


}
