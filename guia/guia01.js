const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ];
    console.log(inventory.filter((i)=>i.type==="machine").reduce((acum,i)=>acum += l.value,0));