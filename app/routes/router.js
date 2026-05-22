
router.post("/classificar", (req, res)=>{

    // recuperar dados do formulário
    let nota1 = parseFloat(req.body.nota1);
    let nota2 = parseFloat(req.body.nota2);

    // calcular média
    let media = (nota1 + nota2) / 2;

    // realizar a manipulação
    if(media > 9 && media <= 10){
        var conceito = "A";
    }else if(media > 7.5 && media <= 9){
        var conceito = "B";
    }else if(media > 6 && media <= 7.5){
        var conceito = "C";
    }else if(media > 4 && media <= 6){
        var conceito = "D";
    }else{
        var conceito = "E";
    }

    // formatar os dados resultantes
    let objJson = {
        "media": media.toFixed(2),
        "conceito": conceito
    }

    // enviar os dados para mesclar com o html
    res.render("pages/index", {
        "retorno": objJson,
        "valores":{
            "nota1": req.body.nota1,
            "nota2": req.body.nota2
        }
    })

})

module.exports = router;