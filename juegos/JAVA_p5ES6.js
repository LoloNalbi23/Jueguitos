let n
let intentos = 0;
function setup(){
    createCanvas(400,400);
    let input = createInput();
    input.attribute('type','number');
    input.position(300,100);
    n = random(0,1000);
}
function draw(){
    n===input.value() ? correcto : nocorrecto
}

function correcto(){
    background(150);
    textSize(50);
    fill(0);
    stroke(0);
    text('Ganastee, muy bien, lo hiciste en ${intentos} intentos', 50, 50);
}
function nocorrecto(){
    intentos++
    n<input.value() ? verdadero : falso
}

function verdadero(){
    text('>',100,200);
    textSize(100);
}

function falso(){
    text('<',100,200);
    textSize(100);
}