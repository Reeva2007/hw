var sea,seaImage,ship1,ship1Image,ship2,ship3,ship4,ship2Image,ship3Image,ship4Image,shipping;
function preload(){
seaImage=loadImage("sea.png")
ship1Image=loadImage("ship-1.png")
ship2Image=loadImage("ship-2.png")
ship3Image=loadImage("ship-3.png")
ship4Image=loadImage("ship-4.png")
shiping=loadAnimation("ship1.png",ship2.png)
}

function setup(){
  createCanvas(600,300);
  sea=createSprite(10,200,600,12)
  ship1=createSprite(155,200,100,100)
  ship2=createSprite(200,200,1,1)
  ship3=createSprite(200,200,1,1)
  ship4=createSprite(200,200,1,1)
  ship1.scale=0.2
  sea.velocityX=-2
  sea.x=sea.width/2
  sea.addImage(seaImage)
  ship1.addImage(ship1Image)
}

function draw() {
background("blue")
 drawSprites();
}