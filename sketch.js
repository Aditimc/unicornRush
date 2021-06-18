var canvas ;
var groundImg, lotousImg , rainbowImg , unicornImg, ground2Img;
var ground, lotous, rainbow , unicorn, ground2;






function preload (){
  groundImg = loadImage("images/gr2.png");
  lotousImg = loadImage("images/lotus.png");
  rainbowImg = loadImage("images/bg.png");
  unicornImg = loadImage("images/unicorn.png");
  ground2Img = loadImage("images/gr.png");
  
}





function setup() {
    canvas = createCanvas (displayWidth-30,displayHeight-95)

    ground = createSprite (displayWidth/2,displayHeight-315,displayWidth,300);
    ground.addImage (ground2Img);
    ground.scale = 0.3;
    ground.velocityX = -2;

    ground2 = createSprite (displayWidth+100,displayHeight-300,displayWidth,300);
    ground2.addImage (groundImg);
    ground2.scale = 2;
    ground2.velocityX = -2;

    rainbow = createSprite (displayWidth/2,160);
    rainbow.addImage (rainbowImg)

    unicorn = createSprite (displayWidth/2,displayHeight-315,displayWidth,300);
    unicorn.addImage (unicornImg)
    unicorn.velocityX = 1;

    
}



function draw() {
  background("lightblue"); 
  if (ground.x <0) {
  ground.x = displayWidth+50;
  } 

  if (ground2.x <0) {
    ground2.x = displayWidth+100;
    } 
  drawSprites();
}