var pet, pet_eating;
var foodImg;

function preload(){
  foodImg = loadImage("./img/food.png");
  pet_eating = loadAnimation("./img/pet1.png", "./img/pet2.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight-100);

  pet_eating.playing = true;
  pet_eating.looping = false;

  food = createSprite(300,650,220,200)
  food.addImage(foodImg);
  food.scale = 0.2;

  pet = createSprite(1000,500,30,30)
  pet.addAnimation("eating", pet_eating);
  pet.scale = 0.6;
}

function draw(){
  background(255, 204, 0);
  drawSprites();

  if(keyIsDown(UP_ARROW)){
    food.y -= 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    food.y += 2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    food.x += 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    food.x -= 2;
  }

  if(food.isTouching(pet)){
    pet.changeAnimation("eating");
  }
}