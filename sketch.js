
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand,s1,s2,s3,s4;
var b1,b2,b3,b4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world

	//Create the Bodies Here.
	b1 = new Balls(250,400,40,40);
	b2 = new Balls(350,400,40,40);
	b3 = new Balls(450,400,40,40);
	b4 = new Balls(550,400,40,40);
	stand= createSprite(400,100,400,20);
	s1= new Chain(b1.body,{x:250, y:400});
	s2= new Chain(b2.body,{x:350, y:400});
	s3= new Chain(b3.body,{x:450, y:400});
	s4= new Chain(b4.body,{x:550, y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-300,y:380});
	 }
   }


