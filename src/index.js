const express = require("express");
const app= express();

app.use(express.json());

let usuarios=[
    {
        nome: "Jungkook", idade: 24
    },

    { nome:"Jennie", idade:26}
]

app.get("/paodequeijo", (request, response) => {
    return response.json(usuarios);
});

app.post("/paodequeijo", (request, response) =>{
    console.log(request.body);
    usuarios.push(request.body);
    console.log(usuarios); 
    return response.send("ok");
});


app.listen(1313, console.log("ta no forninho")); 