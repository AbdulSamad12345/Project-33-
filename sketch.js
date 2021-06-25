const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;
 
var SnowObjects = [];
var bgImage;
var groundObj;


function preload(){
  bgImage =  loadImage("snow2.jpg");
  santaImg = loadImage("Santa.gif");
  
}
function setup() {
  engine = Engine.create();
  world = engine.world;

 var canvas = createCanvas(windowWidth,windowHeight);
    
  
   
 groundObj = new Ground(600,600,windowWidth,20)
 santa = createSprite(50,250,50,50)
 santa.addImage(santaImg);
 santa.scale = 1.6;
 santa.velocityX = 4
  

}

function draw() {
  background(bgImage); 
  
  Engine.update(engine);


  drawSprites();

  
  
  if(frameCount%30 === 0){
    
      SnowObjects.push(new Snow(random(50,1100),0,10))
  
  }
  
  for(var h = 0; h < SnowObjects.length; h++) {
    SnowObjects[h].display();
    SnowObjects.lifetime=100;
  }



}