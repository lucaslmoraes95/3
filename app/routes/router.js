const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("pages/index", {
        "retorno": null,
        "valores":{"salario":""}
    });
})


router.post("/calcular", (req, res)=>{

    let salario = parseFloat(req.body.salario);

    if(salario <= 1400){
        var percentual = 15;
    }else if(salario > 1400 && salario <= 4500){
        var percentual = 10;
    }else if(salario > 4500 && salario <= 10000){
        var percentual = 7.5;
    }else{
        var percentual = 5;
    }

   let aumento = salario * (percentual / 100);

let novoSalario = salario + aumento;

let objJson = {
    "salario": salario.toFixed(2),
    "percentual": percentual,
    "aumento": aumento.toFixed(2),
    "novoSalario": novoSalario.toFixed(2)
}

    
    res.render("pages/index", {
        "retorno": objJson,
        "valores":{"salario": req.body.salario}
    })

})

module.exports = router;