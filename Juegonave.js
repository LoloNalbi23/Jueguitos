let spr1;
let spr2;
let posx;
let vidas = 3;
let puntos = 0;
let size = 70;

function setup(){
createCanvas(800,600);
spr1 = createSprite(width/2, height - size, size, size);
spr1.shapeColor = color(0,0,255);
spr2 = createSprite(posx, -100, 50, 50);
spr2.shapeColor = color(255,0,0);
console.log(vidas);

}

function draw(){
    background(0);

    posx = random(0,750);

    spr2.velocity.y = 1.5;

if(spr1.position.x < 0){
    spr1.position.x = 0
}

if(spr1.position.x > 730){
    spr1.position.x = 730
}

if (spr2.overlap(spr1)) {
    vidas -= 1
    spr1.position.x = width/2 
    console.log(vidas);
}
else {
    if(spr2.position.y > 600){
    puntos++
    }
}
drawSprites();
}
function keyPressed() {
    if (keyIsDown(65)) {
        spr1.position.x -= 10
    }
    else if (keyIsDown(68)) {
        spr1.position.x += 10
    }
}