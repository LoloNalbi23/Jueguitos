let player;
let arriba;
let abajo;
let derecha;
let izquierda;
let intentos = 3;
let puntos = 0;
let espacios = 100;
let posx = 1000;

function setup() {
createCanvas(1000,800);

    player = createSprite(100, 300, 100, 600);
    player.shapeColor = color(255, 177, 51);

    arriba = new Group();
    abajo = new Group();
    derecha = new Group();
    izquierda = new Group();

    for (let i = 0; i < 2; i++) {
        let ar = createSprite(posx, 700, 60);
        c.shapeColor = color(random(0,255),random(0,255),random(0,255));
        posx += espacios;
        arriba.add(ar);
        }

    for (let i = 0; i < 2; i++) {
        let ab = createSprite(posx, 100, 60);
        c.shapeColor = color(random(0,255),random(0,255),random(0,255));
        posx += espacios;
        abajo.add(ab);
            }

    for (let i = 0; i < 2; i++) {
        let d = createSprite(posx, 300, 60);
        c.shapeColor = color(random(0,255),random(0,255),random(0,255));
        posx += espacios;
        derecha.add(d);
            }

    for (let i = 0; i < 2; i++) {
        let iz = createSprite(posx, 500, 60);
        c.shapeColor = color(random(0,255),random(0,255),random(0,255));
        posx += espacios;
        izquierda.add(iz);
            }

}
function draw(){
    background(0);

    if(intentos > 0){
        for (let i = 0; i < arriba.length; i++) {
        arriba[i].position.x -= arriba[i].width * 0.07;
        if (arriba[i].position.x < 0) {
        arriba[i].position.x = 1000;
    }
}}

if(intentos > 0){
    for (let i = 0; i < abajo.length; i++) {
    abajo[i].position.x -= abajo[i].width * 0.07;
    if (abajo[i].position.x < 0) {
    abajo[i].position.x = 1000;
}
}}

if (keyIsDown(38)) {
    for(let i = 0;i < arriba.width;i++){
    if(arriba[i].overlap(player)){
    }
    }
    puntos += 1
    console.log(vidas);
}

if (keyIsDown(40)) {
    for(let i = 0;i < abajo.width;i++){
    if(abajo[i].overlap(player)){
    }
    }
    puntos += 1
    console.log(vidas);
}

if (keyIsDown(37)) {
    for(let i = 0;i < izquierda.width;i++){
    if(izquierda[i].overlap(player)){
    }
    }
    puntos += 1
    console.log(vidas);
}

if (keyIsDown(39)) {
    for(let i = 0;i < derecha.width;i++){
    if(derecha[i].overlap(player)){
    }
    }
    puntos += 1
    console.log(vidas);
}

drawSprites()
}
