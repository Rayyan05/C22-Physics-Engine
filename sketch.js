//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground,ball;

function setup() {
  createCanvas(400,400);
  //lower case - engine, world are the ones we created
  //Creating our physics engine
  engine = Engine.create();
  //create world using our engine
  world = engine.world;

    var ground_options = {
        isStatic: true
    }

  //create bodies(objects ) in the world
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //Add the object to the world we created
  World.add(world, ground);

 var ball_options = {
   restitution:1
 }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}