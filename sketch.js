
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, background;
var rabbit
var carrot

function preload() {
  background = loadImage("./images/garden.gif")
  rabbitImg = loadImage("./images/rab.png")
  carrotImg = loadImage("/images/carrot.png")
}





function setup() {
  createCanvas(1800,800);

  engine = Engine.create();
  world = engine.world;

  rabbit = Bodies.rectangle(100,300,width,height, {isStatic: true})

  
  
}


function draw() 
{
  
   image(background,0,0,width,height)

    if (keyCode === UP_ARROW  ) {
      hop();
    }

  Engine.update(engine);

  push();
  translate(rabbit.position.x, rabbit.position.y);
  rotate(rabbit.angle);
  imageMode(CENTER);
  image(rabbitImg, 0, 0, 160, 310);
  pop();
  
 carrotfall()



}
function hop() {
  Matter.Body.applyForce(rabbit,{x:0,y:0},{x:1,y:0})
  rabbitImg.changeImage("./images/jr.png")
}


function carrotfall() {
  if(frameCount%120===0){
      
    carrot = createSprite(100,70,20,10)
    carrot.addImage(carrotImg)
    carrot.velocityY = 5
   

    carrot.scale = 0.2
    carrot.x = Math.round(random(100,400))
    
    
  }
}