let spr;
let size = 80

function setup(){
    createCanvas(windowWidth,windowHeight)
    spr = createSprite(150, height/2, size);
    spr.shapeColor = color(0,255,0);
    spr.velocity.y = 4;
}

function draw(){
background(0);
drawSprites();

}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        spr.position.y -= 80;
    }
}