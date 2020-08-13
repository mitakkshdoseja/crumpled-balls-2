
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,ball,box2,box3;

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	ball = new Paper(80,200,50);
	//ball.debug = "true";
	dusbin1 = new Box(600,600)
	//box1 = new Box(600,400,8,80);
	//box2 = new Box(660,400,8,80);
	//box3 = new Box(630,400,80,8);

	
	Ground = Matter.Bodies.rectangle(400,680,800,10,{isStatic:true});
	World.add(world,Ground);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(255,255,255);
  
  ball.Display();
 	// box1.Display();
  //box2.Display();
  //box3.Display();
  dusbin1.Display();
  rect(Ground.position.x,Ground.position.y,800,10)
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		
		Body.applyForce(ball.dustbin,ball.dustbin.position,{x:80,y:-200});
		
	}
}
