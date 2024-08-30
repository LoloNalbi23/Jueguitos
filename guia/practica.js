/*const inventory = [
    {mst: "crack", value: 3000, age: 20},
    {mst: "mastodonte", value: 10000, age: 50},
    {mst: "maquina", value: 5000, age: 33},
    {mst: "crack", value: 2500, age: 25},
    {mst: "mastodonte", value: 15000, age: 45},
    {mst: "maquina", value: 6500, age:30}
]
let masto = [];

//sumar el valor de cracks
console.log(inventory.filter((i)=>i.mst === "crack").reduce((acum,i)=>acum += i.value,0));
//sumar las edades de maquinas
console.log(inventory.filter((i)=>i.mst === "maquina").reduce((acum,i)=>acum += i.age,0));
//un arreglo de la suma de valor, edad de mastodonte
console.log(masto.push(inventory.filter((i)=>i.mst === "mastodonte").reduce((acum,i,acum2)=>{
    acum += i.value,0
    acum2 += i.age,0
})))
*/
//Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto.
// El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado
const sueldo = {precio : 1230000, descuento : 0.8}

console.log(sueldo.precio * sueldo.descuento)