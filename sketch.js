var bgImg,sleepImg, brushImg, gymImg, eatImg, drinkImg, moveImg;
var bg,sleep,brush,gym,eat,drink,move;

function preload() {
bgImg = loadImage("images/iss.png");
sleepImg = loadAnimation("images/sleep.png");
brushImg = loadAnimation("images/brush.png");
gymImg = loadAnimation("images/gym11.png","images/gym12.png");
drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
eatImg = loadAnimation("images/eat1.png","images/eat2.png");
moveImg = loadAnimation("images/move.png","images/move1.png")
}
function setup() {
  createCanvas(1000,600);
  sleep = createSprite(500,350)
  sleep.addAnimation("Sleep",sleepImg);
  sleep.scale = 0.2
  sleep.visible = false;
  brush = createSprite(800,350)
  brush.addAnimation("Brush",brushImg);
  brush.scale = 0.2
  brush.visible = false;
  gym = createSprite(200,350)
  gym.addAnimation("Gym",gymImg);
  gym.scale = 0.2
  gym.visible = false;

}

function draw() {
  background(bgImg);  
  drawSprites();
  if (keyIsDown(UP_ARROW)) {
    sleep.visible = true;
    brush.visible = false
    gym.visible = false;
  }
  if (keyIsDown(DOWN_ARROW)) {
    brush.visible = true;
    sleep.visible = false
    gym.visible = false
  }
  if (keyIsDown(LEFT_ARROW)) {
    gym.visible = true;
    sleep.visible = false
    brush.visible = false 
  }
}
