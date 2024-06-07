let enem;
let play;
let posx;
let aux;
let vidas = 3;
let puntos = 0;
let size = 70;

function setup() {
    createCanvas(800, 600);

    aux++

    play = createSprite(width / 2, height - size, size, size);
    play.shapeColor = color(0, 0, 255);

    enem = new Group();

    for (let i = 0; i < 6; i++) {
        let c = createSprite(
        random(width), -100,
        random(50,80));
        c.shapeColor = color(random(0,255),random(0,255),random(0,255));
        enem.add(c);
        }
}

function draw() {
    background(0);

    textSize(22);
    fill(0, 255, 0);
    text("Vidas=" + vidas, 700, 30)

    textSize(22);
    fill(0, 255, 0);
    text("Puntos=" + puntos, 700, 60)

    if (play.position.x < 35) {
        play.position.x = 35
    }

    if (play.position.x > 765) {
        play.position.x = 765
    }

    if (keyIsDown(65)) {
        play.position.x -= 10
    }
    else if (keyIsDown(68)) {
        play.position.x += 10
    }
    if(vidas > 0){
        for (let i = 0; i < enem.length; i++) {
        enem[i].position.y += enem[i].height * 0.1;
        if (enem[i].position.y > height) {
        enem[i].position.y = -100;
        puntos++
    }
}}

        if (play.overlap(enem)) {
            for(let i = 0;i < enem.width;i++){
            enem[i].position.x = -200
            }
            play.position.x = width / 2
            vidas -= 1
            console.log(vidas);
        }
    
    if (vidas === 0) {
        textSize(40);
        fill(0, 255, 0);
        text("GAME OVER", 300, height / 2)
        textSize(20);
        fill(0, 255, 0);
        text("Puntos"+ puntos, 400, (height / 2) + 30)
        for(let i = 0;i< enem.length;i++){
        enem[i].position.x = -200
        }
    }
    drawSprites();
}