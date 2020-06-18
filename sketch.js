const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,75,75);
    box2 = new Box(920,320,75,75);
    pig1 = new Pig(810,320);
    log1 = new Log(810,260,300,PI/2)

    box3 = new Box(700,240,75,75);
    box4 = new Box(920,240,75,75);
    pig2 = new Pig(810,240);
    log2 = new Log(810,180,300,PI/2)
    ground = new Ground(600,height,1200,20)

    box5 = new Box(810,160,75,75)
    log3 = new Log(760,150,150,PI/7)
    log4 = new Log(870,140,150,-PI/7)

    bird1 = new Bird(230,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}