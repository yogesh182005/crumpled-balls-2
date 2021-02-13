
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var engine;
var ground;
var box1 ,box2,box3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
	//Create the Bodies Here.
	paper=new Paper(200,200,20);
	ground=new Ground(400,600,800,10);

	box1 = new Box(630,540,100,130);
	

	
	Engine.run(engine);
  
}


function draw() {
  
  background(250);
  Engine.update(engine);
 ground.display();
 
 box1.display();
 


  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Body.applyForce(paper.body,paper.body.position, {x:85,y:-85});
  }
	
}


