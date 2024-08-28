/*
function repeatPattern(cdn1,cdn2){
    const Abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    cdn1 = cdn1.toUpperCase();
    cdn2 = cdn2.toUpperCase();

    for (let i = 0; i < cdn1.length; i++) {
        let LetraCode1 = cdn1[i];
        let index1 = Abc.indexOf(LetraCode1);
        console.log(index1);
    }
    for (let i = 0; i < cdn2.length; i++) {
        let LetraCode2 = cdn2[i];
        let index2 = Abc.indexOf(LetraCode2);
        console.log(index2);
    }
}
let cdn1 = "ABAB"
let cdn2 = "MAMA"
repeatPattern(cdn1,cdn2);
*/

/*let index=palabra.indexOf("M")
console.log(index);


let indexabc= Abc.indexOf("M")
console.log(indexabc);
*/

let palabra="MAMA"
let patron=[];
let patron2=[];
let aux=[0,0,0,0];
const Abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i = 0;i<palabra.length;i++){
    let LetraCode1 = palabra[i];
    let indexabc=Abc.indexOf(LetraCode1);
    patron.push(indexabc)
    console.log(patron)
}
/*for(let i = 0;i<patron.length;i++){
    if(indexabc==patron[i]){
        patron2.push(indexOf(x))
}
}
*/
for (let i = 0; i < patron.length; i++) { 
    if ( i == 0 ) {
        aux[0] = patron[i] // 12
    }
    if ( i == 1 ) {
        aux[1] = patron[i] // 0
    }
    if ( i == 2 ) {
        aux[2] = patron[i] // 12
    }
    if ( i == 3 ) {
        aux[3] = patron[i] // 0
    }
    if ( aux[0] == aux[2] ) {
        console.log('si')
    }
    if ( aux[1] == aux[3] ) {
        console.log('si')
    }

}
/*
if(indexabc==indexabc){

*/