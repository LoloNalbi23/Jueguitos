let lista = [2,54,6,7,9,35,67,23,48];
let listapar = []

function copypairs(){
    listapar = lista.filter((l1)=>l1%2===0);
    console.log(listapar)
}
copypairs();