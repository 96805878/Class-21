//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;   

var ball;

var leftWall, rightWall, topWall;

var ground;

var button1,button2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS); //Position x & y of the ellipse is taken at its centre

  ground = new Ground(200,400,400,10); //arguments
  leftWall=new Ground(0,200,10,400);
  rightWall=new Ground(400,200,10,400);
  topWall=new Ground(200,0,400,10);
  
  var ballOptions={
    restitution:0.95
  }

  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);

  button1 = createImg("right.png");
  button1.position(220, 30);
  button1.size(50,50);
  button1.mouseClicked(hForce);

  button2=createImg("up.png");
  button2.position(75,30);
  button2.size(50,50);
  button2.mouseClicked(vForce);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  leftWall.display();
  rightWall.display();
  topWall.display();

  fill("white");
  ellipse(ball.position.x,ball.position.y,20,20);

}


function hForce(){
  Body.applyForce(ball, {x: 0, y: 0}, {x : -0.05, y: 0})

}


function vForce(){
  Body.applyForce(ball, {x:0, y:0 },{x:0 , y:-0.05})
}