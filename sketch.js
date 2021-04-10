
class rof{
  constructor(bodyA, bodyB){
  var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 0.04,
      length: 10
  }
  this.body = Constraint.create(options);
  World.add(world, this.body);
}

display(){
  var pointA = this.body.bodyA.position;
  var pointB = this.body.bodyB.position;
  strokeWeight(4);
  fill("black");
  stroke("black");
  line(pointA.x, pointA.y, pointB.x, pointB.y);
  
}

}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var constraind;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  log1 = new log(200,40,100,30);
  log2 = new log(300,40,100,30);
  log3 = new log(400,40,100,30);
  log4 = new log(500,40,100,30);
  log5 = new log(600,40,100,30);

bob1 = new bob(200,500,35,35);
bob2 = new bob(300,500,35,35);
bob3 = new bob(400,500,35,35);
bob4 = new bob(500,500,35,35);
bob5 = new bob(600,500,35,35);

Slingshot1= new rof(log1.body,bob1.body);
Slingshot2= new rof(log2.body,bob2.body);
Slingshot3= new rof(log3.body,bob3.body);
Slingshot4= new rof(log4.body,bob4.body);
Slingshot5= new rof(log5.body,bob5.body);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("grey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display()
  bob5.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();

  Slingshot1.display();
  Slingshot2.display();
  Slingshot3.display();
  Slingshot4.display();
  Slingshot5.display();
  drawSprites();
 
}



