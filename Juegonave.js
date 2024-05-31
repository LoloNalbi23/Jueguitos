let enem;
let spr1;
let spr2;
let posx;
let vidas = 3;
let puntos = 0;
let size = 70;

function setup() {
    createCanvas(800, 600);

    spr1 = createSprite(width / 2, height - size, size, size);
    spr1.shapeColor = color(0, 0, 255);

    setInterval(() => {
        console.log(puntos);
        for (enem=0; enem < 5; enem++) {
            spr2 = createSprite(random(600), -100, 50);
            spr2.shapeColor = color(255, 0, 0);
            spr2.velocity.y = 2;
        }
    }, 3000);
}

function draw() {
    background(0);

    textSize(22);
    fill(0, 255, 0);
    text("Vidas=" + vidas, 700, 30)

    textSize(22);
    fill(0, 255, 0);
    text("Puntos=" + puntos, 700, 60)

    if (spr1.position.x < 35) {
        spr1.position.x = 35
    }

    if (spr1.position.x > 765) {
        spr1.position.x = 765
    }

    if (keyIsDown(65)) {
        spr1.position.x -= 10
    }
    else if (keyIsDown(68)) {
        spr1.position.x += 10
    }

    if(enem > 0){
        if (spr2.overlap(spr1)) {
            vidas -= 1
            spr1.position.x = width / 2
            spr2.position.y = -100
            console.log(vidas);
        }
        else {
            if (spr2.position.y > 600) {
                puntos++
                spr2.position.y = -100
                console.log(puntos)
            }
        }
    }
    

    if (vidas === 0) {
        textSize(40);
        fill(0, 255, 0);
        text("GAME OVER", 300, height / 2)
    }
    drawSprites();
}
function keyPressed() {

}