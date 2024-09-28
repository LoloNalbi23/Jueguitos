let n;
let secuencia = [];   //variables auxiliares
let respuesta = [];
let empezar;
let tiempo;
let tiempo2;
let reiniciar;

let rojo;
let verde;
let azul;   //Definiendo variables de sprites
let amarillo;

let Sound1;
let Sound2;
let Sound3;
let Sound4;

let secuenciasi = false
let spritepres = false

function preload() {
    Sound1 = loadSound('Sound1.mp3');
    Sound2 = loadSound('Sound2.mp3');
    Sound3 = loadSound('Sound3.mp3');
    Sound4 = loadSound('Sound4.mp3');
}

setup = () => {
    createCanvas(windowWidth,windowHeight);
    background(0);

    textSize(100);
    fill('blue')
    text('Lolo dice', 830, 100);
    
    rojo = createSprite((width/2)-100, (height/2)-100, 200, 200);
    rojo.shapeColor = color('darkred');

    verde = createSprite((width/2)+100, (height/2)-100, 200, 200);
    verde.shapeColor = color(110, 154, 22);    //Sprites definidos
    
    azul = createSprite((width/2)-100, (height/2)+100, 200, 200);
    azul.shapeColor = color('darkblue');
    
    cyan = createSprite((width/2)+100, (height/2)+100, 200, 200);
    cyan.shapeColor = color('darkcyan');

    empezar = createButton('Empezar');
    empezar.position(880, 150);
    empezar.size(300, 100);
    empezar.style('font-size', '70px');
    empezar.mousePressed(empezamos);


    rojo.onMousePressed = () => {
        if (!secuenciasi && !spritepres) {
            spritepres = true;
            rojo.shapeColor = color('red');
            Sound1.play()
            respuesta.push(0);
        }
    }
    rojo.onMouseReleased = () => {
        if (!secuenciasi) {
            spritepres = false;
            rojo.shapeColor = color('darkred');
            verificarjugada(); // Verifica la jugada
        }
    }
    
    verde.onMousePressed = () => {
        if (!secuenciasi && !spritepres) {
            spritepres = true;
            verde.shapeColor = color(0, 255, 0);
            Sound2.play()
            respuesta.push(2);
        }
    }
    verde.onMouseReleased = () => {
        if (!secuenciasi) {
            spritepres = false;
            verde.shapeColor = color(110, 154, 22);
            verificarjugada(); // Verifica la jugada
        }
    }
    azul.onMousePressed = () => {
        if (!secuenciasi && !spritepres) {
            spritepres = true;
            azul.shapeColor = color('blue');
            Sound3.play()
            respuesta.push(1);
        }
    }
    azul.onMouseReleased = () => {
        if (!secuenciasi) {
            spritepres = false;
            azul.shapeColor = color('darkblue');
            verificarjugada(); // Verifica la jugada
        }
    }
    cyan.onMousePressed = () => {
        if (!secuenciasi && !spritepres) {
            spritepres = true;
            cyan.shapeColor = color('cyan');
            Sound4.play()
            respuesta.push(3);
        }
    }
    cyan.onMouseReleased = () => {
        if (!secuenciasi) {
            spritepres = false;
            cyan.shapeColor = color('darkcyan');
            verificarjugada(); // Verifica la jugada
        }
    }
}
draw = () => {
    drawSprites();
}

empezamos = () => {
    empezar.remove();
    secuencia_activa = true;

    n = random(0,4);       //creo la secuencia
    n = floor(n);
    secuencia.push(n)
    console.log(secuencia);


    for (let i = 0; i < secuencia.length; i++) {
        tiempo = (i + 1) * 2000;
        tiempo2 = (tiempo + 1000);

        if (secuencia[i] == 0) {
            setTimeout(PintarRed, tiempo);
            Sound1.play()
        }
        if (secuencia[i] == 1) {
            setTimeout(PintarBlue, tiempo);
            Sound2.play()
        }
        if (secuencia[i] == 2) {
            setTimeout(PintarGreen, tiempo);
            Sound3.play()
        }
        if (secuencia[i] == 3) {
            setTimeout(PintarCyan, tiempo);
            Sound4.play()
        }

        setTimeout(despintar, tiempo2);
    }
    
    setTimeout(() => {
        secuenciasi = false;  // Desactiva la bandera al final de la secuencia
    }, secuencia.length * 2000 + 1000);  // Calcula el tiempo total de la secuencia

    respuesta = []; // Reinicia el arreglo de la jugada del jugador
}

verificarsecuencia = (arr1,arr2)  => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
/*if(patronJ[i]==secuencia[i]){
i++
}else {
return false
}
*/
verificarjugada = () => {
    if (respuesta.length === secuencia.length) {
        if (verificarsecuencia(respuesta, secuencia)) {
            console.log("¡Correcto!");
            empezamos();
        } else {
            perdiste();
        }
    }
}

perdiste = () => {
    rojo.remove();
    verde.remove();
    azul.remove();
    cyan.remove();

    empezar.remove();

    background('red');

    textSize(400)
    text('Perdiste', width / 2 - 700, height / 2);

    reiniciar = createButton('reiniciar');
    reiniciar.position(2000 - 400, 1400);
    reiniciar.size(800, 200);
    reiniciar.style('font-size', '70px');
    reiniciar.mousePressed(reiniciarpag);

}
    PintarRed = () => {
        rojo.shapeColor = color('red');
}

    PintarGreen = () => {
        verde.shapeColor = color(0, 255, 0);
}

    PintarBlue = () => {
        azul.shapeColor = color('blue');
}

    PintarCyan = () => {
        cyan.shapeColor = color('cyan');
}

// Función para regresar los colores originales
despintar = () => {
    rojo.shapeColor = color('darkred');
    verde.shapeColor = color(110, 154, 22);
    azul.shapeColor = color('darkblue');
    cyan.shapeColor = color('darkcyan');
}

reiniciarpag = () => {
    location.reload();
}
