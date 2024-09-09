let n
let intentos = 0;
let button;
let input;
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(150);

    input = createInput();
    input.attribute('type','number');
    input.position((windowWidth/2)-100,windowHeight-300);

    n = random(0,1000);
    n = floor(n);
    button = createButton('probar');
    button.position((windowWidth/2)-50,windowHeight-250);

    square((windowWidth/2)-240, 200, 400);
}
function draw(){
    button.mousePressed(input.value()==n ? correcto : nocorrecto);
    
}

function correcto(){
    console.log('si');
    textSize(40);
    fill(0);
    stroke(0);
    text('Ganastee, muy bien, lo hiciste en ' + intentos + ' intentos',300, 300);// ${intentos}
}
function nocorrecto(){
    intentos++
    console.log(input.value())
    console.log(n)
    if(input.value() < n){
        console.log('es mayor')
        textSize(100);
        text('>',(windowWidth/2)-60, 430);
    } else {
        console.log('es menor')
        textSize(100);
        text('<',(windowWidth/2)-60, 430);
    }

}
