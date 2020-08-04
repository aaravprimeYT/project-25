
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall3img;


function preload()
{ 
wall3img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;

	
  groundSprite=createSprite(width/2, 690, width,10);
  groundSprite.shapeColor=color(255,255,0);
  
  ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true});
  World.add(world, ground);
  ground.debug = true;
	
  ball = new Paper(150,675,100);
  wall1 = new Bin(1460,650,20,200);

  wall2 = new Bin(1350,675,200,20);
  wall2.shapeColor = color(0);
  wall3 = new Bin(1250,650,20,200);
  wall3.shapeColor = color(0);
	Engine.run(engine);
  
}


function draw() {

  background(255);

  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
  image(wall3img,1300,475,200,200);
 

keyPressed(ball,wall1);

  
  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-75});
  }
 if (keyCode === DOWN_ARROW) {
   Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:25})
 }

}

