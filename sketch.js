
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var papper1,dustbin1,ground1;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
	
	papper1=new paper(200,450,40);
	ground1=new ground(width/2,670,width,20);
    dustbin1=new DUSTBIN(1200,650);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	Engine.run(engine);

	
  
}


function draw() {
	rectMode(CENTER)
  background(0);
  
  drawSprites();
  papper1.display();
  ground1.display();
  dustbin1.display();
}

function keyPressed(){



	if(keyCode==UP_ARROW){
    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  	}
}

