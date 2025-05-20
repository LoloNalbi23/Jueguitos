const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ];
    console.log(inventory.filter((i)=>i.type==="machine").reduce((acum,i)=>acum += i.value,0));



    const personas = [
        { nombre: 'Juan', apellido: 'Pérez', edad: 28 },
        { nombre: 'María', apellido: 'García', edad: 22 },
        { nombre: 'Luis', apellido: 'Fernández', edad: 35 }
        ];
        let nombres;
    //console.log(nombres = personas.reduce((nombrecompleto,x)=>nombrecompleto += x.nombre +" "+ x.apellido,0));
    console.log(personas.reduce((nombrecompleto,x)=>nombrecompleto += x.nombre + x.apellido,0));