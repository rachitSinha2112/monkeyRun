var monkey,monkeyimg,bananaimg,backimg,banana,ground,rockimg,rock,score;

function preload(){
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png") 
  
  bananaimg=loadImage("banana.png")
  backimg=loadImage("jungle.jpg")
  rockimg=loadImage("stone.png")
}



function setup() {
  createCanvas(800,400);
  monkey=createSprite(40,360,20,20);
  monkey.addAnimation("running",monkeyimg)
  monkey.scale=0.07;
  
  
  back=createSprite(200,200,200,200)
 back.addImage(backimg)
  back.velocityX=-8
  back.x=back.width/2
  back.scale=1.3
  
  back.depth=monkey.depth
  monkey.depth=monkey.depth+1
  
ground=createSprite(390,390,790,10);
  ground.visible=false
  
  bananagroup=new Group()
  rockgroup=new Group()

  score=0;
}

function draw() {
  background(180)
  
  
 
  
  if(keyDown("space") && monkey.y>=340){
     monkey.velocityY=-12
    
     }
   monkey.velocityY=monkey.velocityY+0.5
  
  if(back.x<0){
     back.x=back.width/2
     }
  
  if(rockgroup.isTouching(monkey)){
     monkey.scale=0.05
    rockgroup.destroyEach();
     }
  if(bananagroup.isTouching(monkey)){
     score=score+1;
    bananagroup.destroyEach();
     }
 switch(score){
       case 10: monkey.scale=0.12;
       break;
       case 20: monkey.scale=0.14;
       break;
       case 30: monkey.scale=0.16;
       break; 
       case 40: monkey.scale=0.18;
       break;
       default:break; 
      }
  
  
  monkey.collide(ground)
  bananas();
  rocks();
   
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50)

}


function bananas(){
  if(frameCount%100===0){
     banana=createSprite(780,200,10,10)
   banana.addImage(bananaimg)
    banana.velocityX=-8;
    banana.scale=0.05
    banana.y=Math.round(random(200,380))
    banana.lifetime=400
    bananagroup.add(banana)
    
    banana.setCollider("rectangle",0,0,100,100)
  }
}
function rocks(){
  if(frameCount%200===0){
     rock=createSprite(780,370,10,10)
   rock.addImage(rockimg)
    rock.velocityX=-8;
    rock.scale=0.25 
    rock.lifetime=400
    rockgroup.add(rock)
    rock.setCollider("rectangle",0,0,300,300)
  }
}