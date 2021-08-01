

var bg;
var snow, snowImage;

function preload(){
  snowImage = loadImage("snow4.webp");
  bg = loadImage("snow3.jpg");

}


function setup() {
  createCanvas(1600,800);
  
  
  
}



function draw() {
  background(bg);
  createSnow();
  drawSprites();
}
function createSnow() {
 
  if (frameCount % 60 === 0) {
    snow = createSprite(random(0,1600),0,50,50);
    
    snow.scale = 0.5;
    snow.velocityY = 5;
    snow.velocityX=2;
    snow.addImage(snowImage);
     
    
    
    
    
  
    
  }
}