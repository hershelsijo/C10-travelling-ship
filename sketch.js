var sea,seaImg,ship,shipImg1
function preload(){
seaImg=loadImage("sea.png")
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(400,200) 
 sea.scale=0.2
  sea.addImage(seaImg)
  sea.velocityX=-5
  ship = createSprite(200,200);
  ship.addAnimation("ship",shipImg1)
  ship.scale = 0.25;


}

function draw() {
  background("lightblue");
  if (sea.x<0){
  sea.x=sea.width/2;
  }
 drawSprites()
}