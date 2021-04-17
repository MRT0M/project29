const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  polygonImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  groundObj=new Ground();
  stand=new Stand(400, 200, 50, 50);
  block1=new Box(330,235,30,40);
  block2=new Box(360,235,30,40);
  block3=new Box(390,235,30,40);
  block4=new Box(420,235,30,40);
  block5=new Box(450,235,30,40);
  block6=new Box(360,195,30,40);
  block7=new Box(390,195,30,40);
  block8=new Box(420,195,30,40);
  block9=new Box(390,155,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(0);  
  groundObj.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:100,y:200});
}

function mouseReleased(){
  slingshot.fly();
}