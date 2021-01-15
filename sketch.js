
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bob1,bob2,bob3,bob4,bob5,stand1,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1=new stand(400,200,500,30)
    bob1=new bob(400,500,100,100)
	bob2=new bob(300,500,100,100)
	bob3=new bob(200,500,100,100)
	bob4=new bob(500,500,100,100)
	bob5=new bob(600,500,100,100)
	rope1=new rope(bob1.body,stand1.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stand1.display();
  bob1 .display();
  bob2 .display();
  bob3 .display();
  bob4 .display();
  bob5 .display();
  rope1.display();
  drawSprites();
 
}



