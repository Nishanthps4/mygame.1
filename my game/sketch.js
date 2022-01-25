var bg, bgimg
var ship, shipimg
var wall1, wall2
var ast1, ast1img
var ast2, ast2img
var ast3, ast3img

function preload(){
bgimg=loadImage("space.png");
shipimg=loadImage("spaceship.png");
ast1img=loadImage("asteroid1.png");
ast2img=loadImage("asteroid2.png");
ast3img=loadImage("asteroid3cracked.png");

}
function setup(){
createCanvas(windowWidth - 1200, windowHeight - 20);

bg=createSprite((windowWidth-100)/2, (windowHeight-100)/2, windowWidth-100, windowHeight-100);
bg.addImage(bgimg);
bg.velocityY=0

ship=createSprite((windowWidth-1200)/2, (windowHeight-100)/2, 30, 30);
ship.addImage(shipimg);
ship.scale = 0.4;
ship.velocityY=8

}
function draw(){
  background(0);
  if(bg.y>windowHeight){
    bg.y=windowHeight/2;
  }


  if (keyIsDown(LEFT_ARROW)){
    ship.velocityX = -10;
  }
  else{
    ship.velocityX=0;
    ship.velocityY=8;
  }

  if (keyIsDown(RIGHT_ARROW)){
    ship.velocityX = 10;
  }
  else{
    ship.velocityX=0;
    ship.velocityY=8;
  }

  drawSprites();
}

