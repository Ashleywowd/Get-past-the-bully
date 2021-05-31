var Blue_stick , Red_stick;
var Platform , ground;
var swords;
var backgroundImage, Blue_stick_Image , Red_stick_Image

function preload()
{   
    backgroundImage = loadImage("background.png")
    Blue_stick_Image = loadImage("BlueStickFigure.png")
    Red_stick_Image = loadImage("Png ow.png")
}

function setup()
{
    createCanvas(1000,500)

    Blue_stick = createSprite(200,200)
    Blue_stick.addImage(Blue_stick_Image)
    Blue_stick.scale = 0.5

    Red_stick = createSprite(800,220)
    Red_stick.addImage(Red_stick_Image)
    Red_stick.scale = 0.7
      //  Red_stick.debug=true

    Blue_stick.setCollider("rectangle",0,0,200,200)
    Red_stick.setCollider("rectangle",0,0,100,100)

 //   console.log(Blue_stick.x)

    ground = createSprite(500,300,700,10)
   // ground.debug=true
}

function draw()
{
    background(backgroundImage)
    
Blue_stick.velocityX=0

    if(keyDown("W"))
    {
        Blue_stick.velocityY= -5
    }
    Blue_stick.velocityY= Blue_stick.velocityY+ 0.5

    Blue_stick.collide(ground)
  //  Red_stick.collide(ground)
    
    if(keyDown("D"))
    {
        Blue_stick.x= Blue_stick.x+5
    }   
    if(keyDown("A"))
    {
        Blue_stick.x= Blue_stick.x-5
    }
   
    if(Blue_stick.isTouching(Red_stick)){
//Blue_stick.x= Blue_stick.x-10
Blue_stick.velocityX= -4
    }
    
    if(Blue_stick.x>500&&Red_stick.x<1000){
        Red_stick.x= Blue_stick.x+50
    }
   


    drawSprites()
   
    


}