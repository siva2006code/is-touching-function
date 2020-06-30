var fixedrect,movingrect,gameobject1,gameobject2,gameobject3,gameobject4
function setup() {
 createCanvas(1200,800);
 fixedrect=createSprite(400, 200, 50, 50);
 movingrect=createSprite(200, 200, 80, 80);
 gameobject1=createSprite(100, 100, 50, 50);
 gameobject1.shapeColor="green";
 gameobject2=createSprite(200, 100, 50, 50);
 gameobject2.shapeColor="green";
 gameobject3=createSprite(300, 100, 50, 50);
 gameobject3.shapeColor="green";
 gameobject4=createSprite(400, 100, 50, 50);
 gameobject4.shapeColor="green";
 fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
 
 fixedrect.debug=true;
 movingrect.debug=true;


}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if (isTouching(movingrect,gameobject2)){
    gameobject2.shapeColor="red";
    movingrect.shapeColor="red";
  }
    else{
      gameobject2.shapeColor="green";
      movingrect.shapeColor="blue";
    
  }
       
     

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
     object2.shapeColor="red";
     object1.shapeColor="red";
     return true; 
    }
    
      return false;
    }


