let n;
let secuencia = [];   //variables auxiliares
let respuesta = [];
let contador = 1;

let rojo;
let verde;
let azul;   //Definiendo variables de sprites
let amarillo;

let rojosound;
let verdesound;
let azulsound;   //Definiendo variables de sonidos
let amarillosound;

/*function preload() {
    soundFormats('mp3', 'ogg');
    rojosound = loadSound('/assets/doorbell');
    verdesound = loadSound('/assets/doorbell');
    azulsound = loadSound('/assets/doorbell');   //Precargando sonidos
    negrosound = loadSound('/assets/doorbell');
}*/

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(150);

    textSize(100);
    text('Simon dice', 100, 100);
    
    rojo = createSprite((width/2)-100, (height/2)-100, 200, 200);
    rojo.shapeColor = color(255, 0, 0, 2);

    verde = createSprite((width/2)+100, (height/2)-100, 200, 200);
    verde.shapeColor = color(0, 255, 0, 2);    //Sprites definidos
    
    azul = createSprite((width/2)-100, (height/2)+100, 200, 200);
    azul.shapeColor = color(0, 0, 255, 2);
    
    amarillo = createSprite((width/2)+100, (height/2)+100, 200, 200);
    amarillo.shapeColor = color(255, 251, 0, 2);

    rojo.onMousePressed = function () {
        rojo.shapeColor = color(255,0,0,5)
        respuesta.push(0)
        console.log(respuesta);
    }
    verde.onMousePressed = function () {
        verde.shapeColor = color(0,255,0,5)
        respuesta.push(1)
        console.log(respuesta);
    }
    azul.onMousePressed = function () {
        azul.shapeColor = color(0,0,255,5)
        respuesta.push(2)
        console.log(respuesta);
    }
    amarillo.onMousePressed = function () {
        amarillo.shapeColor = color(225,210,0,5)
        respuesta.push(3)
        console.log(respuesta);
    }
} 
function draw(){
    drawSprites();
}
function gensecuencia(){
    n = random(0,4);       //creo la secuencia
    n = floor(n);
    secuencia.push(n)
}
function leersecuencia(){
    for(let i = 0;i <= secuencia.length;i++){
        secuencia[i]==0 ? rojo.shapeColor = color(255, 0,0,1) : secuencia[i]==1 ? verde.shapeColor = color(0, 255, 0,1) : secuencia[i]==1 ? azul.shapeColor = color(0,0, 255,1) : secuencia[i]==1 ? amarillo.shapeColor = color(255, 210, 0,1) : console.log('Que?')
    } // recorro
}
/*fill('rgba(0, 255, 0, 0)');  //iluminar el color que quiero

    rojosound.play(); //para que el sonido suene
    verdesound.play();
    azulsound.play();
    negrosound.play();
    */

    //<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/addons/p5.sound.min.js"></script>