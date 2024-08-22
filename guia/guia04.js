let lista = [[3, 1, 5],[4, 7, 2],[9, 8, 6]];

let lista1 = [[2, 7, 6],[9, 5, 1],[4, 3, 8]];

let resultado = [];
let resultado1 = [];

function magicSquare() {
    resultado = [lista[0].reduce((v,v1)=> v + v1,0),lista[1].reduce((v,v1)=>v + v1,0),lista[2].reduce((v,v1)=>v + v1,0)];
    
    resultado = [lista1[0].reduce((v,v1)=> v + v1,0),lista1[1].reduce((v,v1)=>v + v1,0),lista1[2].reduce((v,v1)=>v + v1,0)];

    if (resultado[0] == resultado[1] & resultado[2] == resultado[1]) {
        console.log("no" + "es" + "mentira");
    } else {
        console.log("es" + "mentira");
    }

    if (resultado1[0] == resultado1[1] & resultado1[2] == resultado1[1]) {
        console.log("no" + "es" + "mentira");
        return true
    } else {
        console.log("es" + "mentira");
        return false
    }
}

magicSquare();