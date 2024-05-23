let posx1 = 400;
let posx2;
let vidas = 3;
let puntos = 0;

function setup(){
createCanvas(800,600);
background(0);
}

function draw(){
posx2 = random(20,780);
square(posx1,550,50);
if(vidas > 0){
    ellipse(-30,posx2,20)
}
}
function keyPressed() {
if(key === 'a'){
    posx1 -= 10
    }else if (key === 'd'){
    posx1 += 10
    }
}