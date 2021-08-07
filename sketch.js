const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	
   ball = new Ball(120,300,15);

   ground = new Ground(500,370,1000,20);

   leftStump = new Dustbin(750,300,20,120);
   rightStump = new Dustbin(900,300,20,120);
	
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 
  ground.display();

  ball.display();

  leftStump.display();
  rightStump.display();

  
  drawSprites();
  
  
}

