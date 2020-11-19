var PLAY=0
var END=1;
var gameState=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
    var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
    survivalTime=0;
  
  monkey=createSprite(80,520,20,20);
  monkey.scale=0.1;
    monkey.addAnimation("running",monkey_running)

  
  
  ground=createSprite(400,550,900,10);
console.log(ground.x)
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
}


function draw() {
         SurvivalTime=0;

      background("white");
  console.log(gameState)

  
   
stroke("black"); 
  
  textSize(20);
  fill("black"); 
  text("Survival Time: "+ survivalTime, 100,100);
  
if(gameState===PLAY){
    survivalTime=Math.ceil(frameCount/frameRate()) 

  if(keyDown("space")&&monkey.y>400){
    
    monkey.velocityY=-3;
  }


if(ground.x<0)  { 
ground.x=ground.width/2; 
 ground.velocityX=-3;
}
  spawnObstacles();
  spawnfood();
  
  monkey.velocityY=monkey.velocityY+0.1;
  

if(monkey.isTouching(obstacleGroup)){
  gameState=END

}  

}
if(gameState===END){
  
  obstacleGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);

 
}
   monkey.collide(ground)
drawSprites();
  }


   function spawnObstacles(){
  if (World.frameCount % 300 == 0) {

  obstacle=createSprite(400,520,10,10)
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacle.lifetime=300;
    obstacleGroup.add(obstacle)
    
  }
  
}

function spawnfood(){

  if (World.frameCount % 80 == 0) {

  foods=createSprite(200,300,20,20)
            foods.y = Math.round(random(120,300));

  foods.addImage(bananaImage)
  foods.scale=0.1
  foods.velocityX=-2;
    foods.lifetime=-300
    FoodGroup.add(foods)
    
}
}
