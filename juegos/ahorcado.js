let palabras = ["amigo", "barco", "cielo", "donde", 
                "fuego", "gente", "huevo", "lápiz", 
                "mango", "nieve", "papel", "queso", 
                "rocas", "soles", "tigre", "unión", 
                "voces", "zorro", "árbol", "banco", 
                "campo", "diosa", "feliz", "golpe", 
                "honor", "islas", "luzco", "manos", 
                "nubes", "punto", "salud", "tarde", 
                "usado", "valle", "barca", "cinta", 
                "ducha", "focos", "guapo", "horno", 
                "imán", "leche", "moras", "nueva", 
                "plaza", "ratas", "temas", "vejez", 
                "ancho", "bravo", "circo", "dieta", 
                "flaca", "giras", "humor", "ideal", 
                "jugos", "lazos", "menta", "nueve", 
                "palma", "regla", "sonar", "tenis", 
                "urano", "verde", "beber", "cabra", 
                "fresa", "globo", "jaula", "lejos", 
                "monta", "peces", "reina", "sello", 
                "viven", "zafiro", "armas", "baile", 
                "cabos", "dedos", "grito", "hotel", 
                "infla", "jugar", "lamas", "medir", 
                "papas", "radio", "salto", "tinte", 
                "urnas", "virus", "arena", "baño", 
                "camas", "deseo", "fines", "habla", 
                "joven", "lindo", "mover", "noche", 
                "puros", "ratón", "salva", "anexo", 
                "broma", "costa", "fruto", "gatos", 
                "hurto", "junta", "lucir", "mixto", 
                "niñas", "pelos", "rubor", "tenaz", 
                "útil", "volar", "yerba", "zanjo", 
                "altar", "bolso", "corto", "flojo", 
                "grano", "hecho", "luces", "mecha", 
                "nadar", "poder", "razón", "siglo", 
                "terco", "velas", "yogur", "zarza", 
                "avión", "banda", "costo", "dudas", 
                "ganar", "horas", "jorge", "laico", 
                "marco", "noble", "pauta", "ronda", 
                "suelo", "temer", "volca", "álbum", 
                "bebes", "cruel", "denso", "iluso", 
                "jefes", "niños", "pelar", "rumor", 
                "soñar", "unico", "vuelo", "zorra", 
                "ancla", "burla", "coral", "dólar", 
                "furia", "hotel", "inglés", "japon",
                "lucha", "meter", "norma", "punto", 
                "rival", "sueño", "trato", "yermo", 
                "aceite", "acento", "alberg", "ángulo", 
                "bailar", "barrer", "brillo", "botón", 
                "colina", "correr", "dócil", "drama", 
                "entero", "elegir", "fábula", "fijado", 
                "flotar", "gritar", "guitra", "herida", 
                "icono", "impacto", "jaguar", "lógica", 
                "mandar", "noble", "ñandu", "perlas", 
                "pulgas", "ramita", "saltar", "tierra", 
                "valija", "zapato", "zarpar"];
let n;
let palabra
let contador
let intentos = 7
let respuesta = "";
let jugar
let index
let valor 
let jugando = true

elegi = () =>{
    jugar.remove()
    palabra = random(palabras)              //convierto la palabra a mayuscula
    palabra = palabra.toUpperCase();
    console.log(palabra)
}

function keyPressed() {
    if(keyIsDown(ENTER)===true){
    for(let i=0;i<palabra.length;i++){
        if(valor == palabra[i]){
            console.log('Si');
            estaletra(i)
            contador++                               //ve si la letra esta en la palabra
        }
    }
    dibujaman()//no esta asi que bajo intentos
    contador = 0
    input.value('')
    }
}

setup = () => {
    createCanvas(1400,800);
    background('lightblue');

    jugar = createButton('Jugar');
    jugar.position(600, 700);
    jugar.size(200, 100);
    jugar.style('font-size', '50px');
    jugar.mousePressed(elegi);

    input = createInput();
    input.attribute('type','letters');
    input.position(100,700);

    fill(0);
    rect(200,500,140,50)
    stroke('black');
    strokeWeight(5);
    line(270,500,270,300)  //ahorcadora
    stroke('black');
    strokeWeight(5);
    line(270,300,400,300)
    stroke('black');
    strokeWeight(5);
    line(400,300,400,320)

    
}
function draw(){

    input.input(() => { // Input.lenght = 1
        valor = input.value();
        valor = valor.toUpperCase()  //que solo se pueda poner 1 letra
        if (valor.length > 1) {
            input.value(valor.charAt(0));
        }
    });

}

estaletra = (i) => {
    if(i==0){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,120,200)
    }
    if(i==1){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,200,200)
    }
    if(i==2){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,280,200)
    }
    if(i==3){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,360,200)
    }
    if(i==4){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,440,200)
    }
    if(i==5){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,520,200)
    }
    if(i==6){
        textSize(80);
        fill('black')
        noStroke();
        text(valor,600,200)
    }
    
}


dibujaman = () => {
    if(contador===0){
        intentos--
    if(intentos==6){
        fill('lightblue')
        stroke('white')
        circle(400, 340, 50);
    } else if(intentos==5){
        stroke('white');
        strokeWeight(3);
        line(400,365,400,460)
    } else if(intentos==4){
        stroke('white');
        strokeWeight(3);
        line(400,370,350,430)
    } else if(intentos==3){
        stroke('white');
        strokeWeight(3);
        line(400,370,450,430)
    } else if(intentos==2){
        stroke('white');
        strokeWeight(3);
        line(400,460,350,530)
    } else if(intentos==1){
        stroke('white');
        strokeWeight(3);
        line(400,460,450,530)
    }else if(intentos==0){
        Perdiste();
    }
}
}

Perdiste = () => {
    background('red')
    textSize(220)
    text('Perdiste bobi', width / 2 - 700, height / 2);
}
/*      
        
*/