var gameState = 1
var player
var enemy
var background
var pineapple
var gameoverImg
var gameover
function preload() {
  player = loadImage("hee.png")
  enemy = loadImage("heehee.png")
  backgroundImage = loadAnimation("funky background.jpg")
  pineapple = loadImage("apple.png")
  platformImg = loadImage("rocket.png")
  backgroundImage2 = loadAnimation("background.jpg")
  gameoverImg = loadImage("gameover.png")
}


function setup() {
  createCanvas(1280, 720);
  bg = createSprite(width / 2, height / 2)
  bg.addAnimation('backgroundImage', backgroundImage)
  bg.addAnimation("backgroundImage2", backgroundImage2)
  if (gameState === 1)
    bg.changeAnimation("backgroundImage")
  platformGroup = new Group()
  invisiblePlatformGroup = new Group()
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 100; i < 1280; i = i + 200) {
    platform = createSprite(i, 700, Math.round(random(50, 100)), Math.round(random(100, 500)))
    platform.shapeColor = color
    platformGroup.add(platform)
    invisiblePlatform = createSprite(platform.x, platform.y - platform.height / 2, platform.width, 10)
    invisiblePlatform.visible = false
    invisiblePlatformGroup.add(invisiblePlatform)
  }
  fruit = createSprite(platform.x, platform.y - (platform.height / 2 + 50))
  fruit.addImage(pineapple)
  fruit.scale = 0.5

  character = createSprite(100, platformGroup[0].position.y / 2 - 50)
  character.addImage(player)
  character.scale = 0.5
  character.velocityY = 2
  character.debug = true
  character.setCollider
 
  ground=createSprite(width/2,height-10,width,20)
  ground.visible=false
}

function draw() {
  background(0)
  character.collide(invisiblePlatformGroup)
  character.collide(platformGroup)
  if (character.collide(fruit)) {
    gameState = 2

  }
  if (gameState === 2) {
    bg.changeAnimation("backgroundImage2")
    window.location.reload()
  }
 
  if (keyDown("UP_ARROW") && character.y > 300) {
    character.velocityY = -13;

  }
  if (keyDown("RIGHT_ARROW") && character.y > 300) {
    character.x += 10;
  }
  if (keyDown("LEFT_ARROW") && character.y > 300) {
    character.x -= 10;
  }
  character.velocityY = character.velocityY + 0.8
if(character.isTouching(ground)){
  gameState=3
}
if(gameState === 3 ){
  gameover=createSprite(width/2,height/2)
  gameover.addImage(gameoverImg)
character.velocityY=0
}
  drawSprites()
}














