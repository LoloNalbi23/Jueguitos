let player;
let size = 80;
let tubos;
let vidas = 1;
let puntos = 0;

function setup(){
    createCanvas(windowWidth,windowHeight)

    tubos = new Group();

    for (let i = 0; i < 3; i++) {
        let t = createSprite(width - 50, 0,20,(width/2) - random(0,50));
        t.shapeColor = color(0,255,0);
        tubos.add(t);
        }

    player = createSprite(150, height/2, size);
    player.shapeColor = color(255,0,0);
    player.velocity.y = 4;

}

function draw(){
background(0);

    textSize(22);
    fill(0, 255, 0);
    text("Puntos=" + puntos, 700, 60);

    if(vidas > 0){
        for (let i = 0; i < tubos.length; i++) {
            tubos[i].position.x += tubos[i].height * -2;
        if (tubos[i].position.x < 150) {
        tubos[i].position.x = windowWidth + 50;
        puntos++
        console.log(10);
    }
}}

if (player.overlap(tubos)) {
    for(let i = 0;i < tubos.width;i++){
    tubos[i].position.y = 1000
    }
    player.position.y = height / 2
    vidas -= 1
}

drawSprites();

}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        player.position.y -= 80;
    }
}