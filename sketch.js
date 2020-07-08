var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground,rod;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(480,200,30);
	bobObject2= new Bob(540,200,30);
	bobObject3= new Bob(600,200,30);
	bobObject4= new Bob(660,200,30);
	bobObject5= new Bob(720,200,30);

	ground= new Ground(600,600,1200,20);
	rod= new Ground(500,50,1200,20);
	
	rope1= new Rope(bobObject1.body,{x:480,y:50});
	rope2= new Rope(bobObject2.body,{x:540,y:50});
	rope3= new Rope(bobObject3.body,{x:600,y:50});
	rope4= new Rope(bobObject4.body,{x:660,y:50});
	rope5= new Rope(bobObject5.body,{x:720,y:50});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("white");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  ground.display();
  rod.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});
}

