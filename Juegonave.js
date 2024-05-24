let posx1 = 400;
let obstx;
let posy2;
let vidas = 3;
let puntos = 0;
let fondo = 

function setup(){
createCanvas(800,600);
background(fondo);
}

function draw(){
obstx = random(20,780);
fill(0,0,255);
square(posx1,530,70);
if(vidas > 0){
    fill(fondo);
    ellipse(obstx,obsty,20);
    fill(255,0,0);
    ellipse(obstx,obsty,20);
}
}
function keyPressed() {
if(key === 'a'){
    fill(fondo);
    square(posx1,530,70);
    posx1 -= 10
    }else if (key === 'd'){
        fill(fondo);
        square(posx1,530,70);
        posx1 += 10
    }
}