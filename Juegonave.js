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
fill(0,0,255);
square(posx1,530,70);
if(vidas > 0){
    ellipse(-30,posx2,20)
}
}
function keyPressed() {
if(key === 'a'){
    fill(0);
    square(posx1,530,70);
    posx1 -= 10
    }else if (key === 'd'){
        fill(0);
        square(posx1,530,70);
        posx1 += 10
    }
}