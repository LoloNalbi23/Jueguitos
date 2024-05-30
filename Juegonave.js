let posx1 = 400;
let obstx;
let obsty = -1;
let vidas = 3;
let puntos = 0;
let fondo = 150;
let size = 70;
let barrera;

function setup(){
createCanvas(800,600);
background(fondo);

}

function draw(){
if(posx1 < 0){
    posx1 = 0
    }
    if(posx1 > 730){
        posx1 = 730
}

noStroke()    
fill(0,0,255);
square(posx1,500,70);

fill(255,0,0);
circle(obstx,obsty,30);
obsty++
console.log(obsty)

if(keyIsDown(65)){
    noStroke()    
    fill(fondo);
    square(posx1,500,70);
    posx1 -= 10
    fill(0,0,255);
    square(posx1,500,70);
        }
if (keyIsDown(68)){
    noStroke()
    fill(fondo);
    square(posx1,500,70);
    posx1 += 10
    fill(0,0,255);
    square(posx1,500,70);
        }
        if(obsty > 610){
            obstx = random(20,780);
            obsty = 0
        }
    }
    noStroke()
        fill(fondo);
        circle(obstx,obsty,30);
        
        fill(255,0,0);
        circle(obstx,obsty,30);