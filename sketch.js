var canvas;
var music;
 var rect1;
var rect2;
var rect3;
var rect4;
var box;
var edge1;
var edge2;
var edge3;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1=createSprite(80,575, 150, 20);
    rect1.shapeColor="red";
    
    rect2=createSprite(250,575,150,20);
    rect2.shapeColor="yellow";

    rect3=createSprite(430, 575, 150, 20);
    rect3.shapeColor="orange";

    rect4=createSprite(650,575, 200, 20);
    rect4.shapeColor="green";

    //create box sprite and give velocity
    box=createSprite((random(20,750)), 300, 60,60)
    box.velocityX=-4;
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge1=createSprite(10,300,20,600)
    edge2=createSprite(790,300,20,600);
    edge3=createSprite(400,10,760,20);


    //add condition to check if box touching surface and make it box

if(isTouching(box,edge1)){
        
    box.velocityX=box.velocityX*(-1);
    //box.velocityY=box.velocityY* (-1);
        //box.bounceOff(edge1);
 
}

if(isTouching(box,edge2)){
    box.velocityX=box.velocityX*(-1);
//box.velocityY=box.velocityY* (-1);

}

if(isTouching(box,edge3)){
    //box.velocityX=box.velocityX*(-1);
box.velocityY=box.velocityY* (-1);

}


    if(isTouching(box,rect1)){
        box.shapeColor="red";
        //box.velocityX=box.velocityX*(-1);
        box.velocityY=box.velocityY* (-1);
    }


    if(isTouching(box,rect2)){
        box.shapeColor="yellow";
//box.velocityX=box.velocityX*(-1);
        box.velocityY=box.velocityY* (-1);
    }
     
    if(isTouching(box,rect3)){
        box.shapeColor="orange";
       // box.velocityX=box.velocityX*(-1);
        box.velocityY=box.velocityY* (-1);
   }

    if(isTouching(box,rect4)){
        box.shapeColor="green";
        //box.velocityX=box.velocityX*(-1);
        box.velocityY=box.velocityY* (-1);
    }




    drawSprites();
}


function isTouching(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2
        && object2.x-object1.x<object1.width/2+object2.width/2
        && object1.y-object2.y<object1.height/2+object2.height/2
        && object2.y-object1.y<object1.height/2+object2.height/2){
        return true;
    }
    else return false;
}