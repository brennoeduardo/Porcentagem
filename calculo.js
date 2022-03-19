const moeda = document.getElementById("input-numero")
const porcentagem =document.getElementById("input-porcentagem")
var resultado = document.getElementById("resultado2")
const  calcular =document.getElementById("botao")


calcular.addEventListener("click", function(){

    if(porcentagem.value == "" || moeda.value == "" && porcentagem.value <= 0 || moeda.value <= 0 ){
        resultado.style.color = "red"
        resultado.innerText = "Insira valores válidos!"
    } else {
        var calculo = Number(porcentagem.value) * Number(moeda.value) / 100
        resultado.innerHTML = calculo.toFixed(3)
    }
})