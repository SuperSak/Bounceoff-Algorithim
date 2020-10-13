var fixedRect, movingRect

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200, 100, 50, 100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,700,50,20);
  movingRect.shapeColor="green";
  //fixedRect.velocityX=3
  fixedRect.velocityY=3
  //movingRect.velocityX=3
  movingRect.velocityY=-3
  
}

function draw() {
  background(0);
  
  
  console.log(movingRect.x-fixedRect.x);
  if (movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
    
    ){
    movingRect.velocityX=-movingRect.velocityX
    fixedRect.velocityX=-fixedRect.velocityX
  }
  if (movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2
    ){
      movingRect.velocityY=-movingRect.velocityY
      fixedRect.velocityY=-fixedRect.velocityY
  }

  drawSprites();
}