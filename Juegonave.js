let spr1;
let spr2;
let vidas = 3;
let puntos = 0;
let fondo = 150;
let size = 70;


function setup(){
createCanvas(800,600);
background(fondo);
spr1 = createSprite(width/2, height - size, size, size);
spr1.shapeColor = color(0,0,255);
spr2 = createSprite(posx, -100, 50, 50);
spr2.shapeColor = color(255,0,0);

}

function draw(){
if(spr1.position.x < 0){
    spr1.position.x = 0
}

if(spr1.position.x > 730){
    spr1.position.x = 730
}

if (spr2.overlap(spr1)) {
    vidas -= 1
}
else {
    if(spr2.position.y > 600){
    puntos++
    }
}

spr.velocity.y = 1.5;

function keyPressed() {
    if (keyCode == 65) {
    spr.setSpeed(1.5, 0);
    }
    else if (keyCode == 68) {
    spr.setSpeed(1.5, 180);
    }
}
drawSprites();
}