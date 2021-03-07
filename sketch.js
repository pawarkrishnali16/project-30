const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,
box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box28,box29,box30,
box31,box32,box33,box34,box35,box36,box37,box38,box39;
var ball;
var spring;
var ground;
var groundHovering;
var polygon_img

function preload(){
    polygon_img=loadImage("polygon.png");
  }

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new BlueBox(500,360,20,30)
    box2 = new  YellowBox(520,360,20,30);
    box3 = new  GreenBox(540,360,20,30);
    box4 = new  RedBox(560,360,20,30);
    box5 = new  GreenBox(580,360,20,30);
    box6 = new  YellowBox(600,360,20,30);

    box7 = new RedBox(510,330,20,30);
    box8 = new YellowBox(530,330,20,30);
    box9 = new BlueBox(550,330,20,30);
    box10 = new GreenBox(570,330,20,30);
    box11 = new RedBox(590,330,20,30);

    box12 = new YellowBox(520,310,20,30);
    box13 = new BlueBox(540,310,20,30);
    box14 = new RedBox(560,310,20,30);
    box15 = new GreenBox(580,310,20,30);

    box16 = new YellowBox(530,280,20,30);
    box17 = new RedBox(550,280,20,30);
    box18 = new GreenBox(570,280,20,30);

    box19 = new BlueBox(540,250,20,30);
    box20 = new RedBox(560,250,20,30);

    box21 = new GreenBox(550,220,20,30);

    box22 = new GreenBox(500,135,20,30);
    box23 = new BlueBox(520,135,20,30);
    box24 = new YellowBox(540,135,20,30);
    box25 = new RedBox(560,135,20,30);
    box26 = new GreenBox(580,135,20,30);
    box27 = new YellowBox(600,135,20,30);

    box28 = new BlueBox(510,105,20,30);
    box29 = new RedBox(530,105,20,30);
    box30 = new YellowBox(550,105,20,30);
    box31 = new GreenBox(570,105,20,30);
    box32 = new RedBox(590,105,20,30);

    box33 = new YellowBox(520,75,20,30);
    box34 = new BlueBox(540,75,20,30);
    box35 = new RedBox(560,75,20,30);
    box36 = new GreenBox(580,75,20,30);

    box37 = new YellowBox(530,45,20,30);
    box38 = new BlueBox(550,45,20,30);
    box39 = new GreenBox(570,45,20,30);

    ball = new Ball(0,0,50);

    spring = new Projectile(ball.body,{x:200,y:200});

    ground = new Platform(400,390,800,20);

    groundHovering = new Platform(550,160,200,20);

    
}

function draw(){
    background(247,223,178);
    Engine.update(engine);

    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box17.display();
    box18.display();
    box16.display();

    box19.display();
    box20.display();

    box21.display();

    box27.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    box33.display();
    box34.display();
    box35.display();
    box36.display();

    box37.display();
    box38.display();
    box39.display();

    ball.display();
    spring.display();
    ground.display();
    groundHovering.display();

    

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    spring.release();
}

function keyPressed(){
    if(keyCode === 32){
        spring.attach(ball.body);
    }
}