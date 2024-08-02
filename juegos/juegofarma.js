let Sprite;
let GroupEnemy;
let Enemigo;
let Vidas = 3;
let Score = 0;
let TimeSpawn;
let GroupFire;
let fire;


function preload() {
}

function setup() {
  createCanvas(600, 800)

  //Grupo de fire
  GroupFire = new Group();
  
  // Grupo de enemigos
  GroupEnemy = new Group();
  
  // Creacion de jugador
  Sprite = createSprite(300, 700, 40, 40);
  Sprite.shapeColor = color(112, 23, 224);
  
  // Creacion de enemigos
  for (let i = 0; i < 1; i++) { 
  console.log("q")

  TimeSpawn = setInterval(SpawnEnemy, 500);
  
  function SpawnEnemy() { 
  Enemigo = createSprite(random(0, 575), -100, 50, 50)
  Enemigo.shapeColor = color(200, 200, 200);
  GroupEnemy.add(Enemigo)

    }
  }
}

function draw() {
  background(100)
  drawSprites()

  // Datos
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("❤ " + Vidas, 15, 85);
  text("Score = " + Score, 20, 50)

  // contador de puntaje / movimiento de enemigos / movimiento de fire
  if (Vidas > 0 ) {
    for (let i = 0; i < GroupEnemy.length; i++){
    GroupEnemy[i].position.y += GroupEnemy[i].height * 0.10;

      if (GroupEnemy[i].position.y > height) {
        GroupEnemy[i].position.y = 0;
    
      }
    }

    for ( let i = 0; i < GroupFire.length; i++) {
      GroupFire[i].position.y -= GroupFire[i].height * 0.60;
    }

  }

  // colision de Enemy con player / reubicacion de enemigos / reubicacion de fire
  if (GroupEnemy.overlap(Sprite)) {
    for ( let i = 0; i < GroupEnemy.length; i++) { 
    GroupEnemy[i].position.y = -100
    GroupEnemy[i].position.x = -200

    }

    for ( let i = 0; i < GroupFire.length; i++) {
      GroupFire[i].position.y = -100
      GroupFire[i].position.x = -300
    }
    
    Sprite.position.x = 300
    Sprite.position.y = 700

    Vidas -= 1
  }
  
  // flechas de movimiento
  if (keyIsDown(65)) {
    Sprite.position.x -= 4
  }

  if (keyIsDown(68)) {
    Sprite.position.x += 4
  }

  //Pantalla de Game Over
  if (Vidas == 0) {
    textSize(80);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("GAME OVER", 65, 400);
    textSize(40)
    text("Score = " + Score, 230, 440 )
  }

  //Limitadores de movimiento

  if ( Sprite.position.x > 580) {
    Sprite.position.x = 580
  }
  if ( Sprite.position.x < 20) {
    Sprite.position.x = 20
  }

  // Dead Enemy
  for ( let i = 0; i < GroupEnemy.length; i++) {
    if (GroupEnemy[i].overlap(GroupFire)) {
      GroupEnemy[i].position.x = -300

      Score++
    }
  }

}

// Creacion de Fire
function mousePressed() {

  if ( Vidas > 0) {
    fire = createSprite(Sprite.position.x, Sprite.position.y, 10, 10)
    fire.shapeColor = color(255, 0, 0)
    GroupFire.add(fire)
  }

}