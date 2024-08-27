let lista = [[3, 1, 5],
             [4, 7, 2],
             [9, 8, 6]];
//no es cubo magico
let lista1 = [[2, 7, 6],
              [9, 5, 1],
              [4, 3, 8]];
//es cubo magico

let resultado
let resultado1

function magicSquare() {
    //Parte 1 = sumar filas
    resultado = lista1[0][0] + lista1[0][1] + lista1[0][2]
    resultado1= lista1[1][0] + lista1[1][1] + lista1[1][2]
    //lista[1][0] + lista[1][1] + lista[1][2]===aux?: return false

    //Pregunto si son lo mismo
    if(resultado==resultado1){
        resultado1= lista1[2][0] + lista1[2][1] + lista1[2][2]
        if(resultado==resultado1){
            console.log("filas:si")
        } else {
            return false
        }
    } else {
        return false
    }
    console.log(resultado)
    console.log(resultado1)

    //Parte 2 = sumar columnas
    resultado = lista1[0][0] + lista1[1][0] + lista1[2][0]
    resultado1= lista1[0][1] + lista1[1][1] + lista1[2][1]

    //Pregunto si son lo mismo
    if(resultado==resultado1){
        console.log("columnas:si")
    } else {
        return false
    }
    console.log(resultado)
    console.log(resultado1)
    /*

    //Parte 3 sumo en diagonal
    resultado = lista1[0][0] + lista1[1][1] + lista1[2][2]
    resultado1= lista1[0][2] + lista1[1][1] + lista1[2][0]

    //Pregunto si son lo mismo
    if(resultado==resultado1){
        console.log("diagonales:si")
    } else {
        return false
    }
    console.log(resultado)
    console.log(resultado1)
}*/

}
magicSquare();