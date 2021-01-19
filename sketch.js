//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
}


function draw() { 
  backGround(46,139,87);
  
  dog=createSprite(200,200);
  dog.addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);


  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
} else{
    x=x-1;
}

  database.ref('/').update({
    food:x 
})
}





