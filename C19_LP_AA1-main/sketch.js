var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  Ghost= createSprite(300,370);
  //Ghost.addAnimation("")
  Ghost.addImage("ghost-standing.png",ghostImg);
  Ghost.scale= 0.450
  if(keyDown("space")&& Ghost.y >= 100){
 Ghost.velocityY= -12
}
if(keyDown("left")){
Ghost.x=Ghost.x-10
}
if(keyDown("right")){
  Ghost.x=Ghost.x+10
  }
}

function draw() {
  background(200);
  if(tower.y > 400){
      tower.y = 300

}
drawSprites();
}
