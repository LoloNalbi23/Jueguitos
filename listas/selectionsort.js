let na = 0;

function swap(i,j,datos){
    na = datos[i]
    datos[i] = datos[j]
    datos[j] = na
}

function selectionsort(datos){
    for(let i = 0;i < datos.length - 1;i++){
        for(let j = i + 1;j < datos.length;j++){
            if(datos[j] < datos[i]){
                swap(i,j,datos)
            }
        }
    }
    return datos;
}
    
    let datos = [12,7,5,2,0,10]
    console.log(selectionsort(datos))