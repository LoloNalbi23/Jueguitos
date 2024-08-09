const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ];
    console.log(inventory.filter((l)=>l.type="machine").reduce((acum,l)=>acum += l.value,0));