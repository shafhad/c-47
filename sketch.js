const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var forestImg;
var player1;
var playerSprite;
var playerSpriteImg;
var ground;
var zombieImg,zombieGroup;

function  preload() 
{
    forestImg = loadImage("WallpaperDog-17001210.jpg");  
    playerSpriteImg = loadImage("player.png");
    zombieImg = loadImage("zombie.jepg.png")
}

function setup()
{
createCanvas(1200,600); 
engine = Engine.create();
world = engine.world;
//player1 = new Player(50, 200);
playerSprite = createSprite(50,480,20,50); 
playerSprite.addImage("player", playerSpriteImg);
playerSprite.scale=0.05;
ground = new Ground(600,height,1200,20);

}


function draw()
{
 background(forestImg);
 Engine.update(engine);

 if(keyDown("space") && playerSprite.y >= 159) 
 {
    playerSprite.velocityY = -14;
 }

 if(keyDown("left"))
 {
     playerSprite.x=playerSprite.x-5;
 }
 if(keyDown("right"))
 {
     playerSprite.x=playerSprite.x+5;
 }

  playerSprite.velocityY =  playerSprite.velocityY + 0.8
 ground.display();
 spawnZombie();

 drawSprites();
}



function spawnZombie()
{
    if(frameCount % 60===0)
    {
        var zombie=createSprite(1200,575,50,50);
        zombie.addImage(zombieImg);
        zombie.velocityX=-3;
        zombie.lifetime=400;
        zombie.depth = playerSprite.depth + 1;
    }
}
