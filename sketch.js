var dog, database, foodS, foodStock;
var dogImg, happydogImg

function preload()
{
  dogImg = loadImage('dogImg.png');
  happydogImg = loadImage('dogImg1.png');
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}


function draw() {  

  
  drawSprites();
  //add styles here

}



