const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: false
    }

    var ball_option={
        restitution:0.4
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball=Bodies.circle(200,200,20,ball_option);
    World.add(world,ball);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);


    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    function keyPressed(){
        if (keycode===Down_Arrow){
            Matter.Body.setStatic(packageBody,false);
            
        }
    }


    }


}