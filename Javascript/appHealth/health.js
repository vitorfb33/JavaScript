/**
 * APP -HEALTH
 * @author Vitor Fialho Bergami
 */

    let peso, altura

function calcularIMC(){
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value
    imc = peso / (altura * altura)
    document.getElementById("imc").innerHTML= (`IMC: ${imc.toFixed(2)}`)
    if(imc < 18.5){
        document.getElementById("status").innerHTML="Abaixo do peso"
        document.getElementById("grafico").src="icons/baixo.png"
    }else if (imc < 25 ){
        document.getElementById("status").innerHTML="Peso normal"
        document.getElementById("grafico").src="icons/normal.png"
    }else if (imc < 30 ){
        document.getElementById("status").innerHTML="Sobrepeso"
        document.getElementById("grafico").src="icons/sobrepeso.png"
    }else if (imc < 35 ){
        document.getElementById("status").innerHTML="Obesidade Grau 1"
        document.getElementById("grafico").src="icons/obesidade1.png"
    }else if (imc < 40 ){
        document.getElementById("status").innerHTML="Obesidade Grau 2"
        document.getElementById("grafico").src="icons/obesidade2.png"
    }else {
        document.getElementById("status").innerHTML="Obesidade Severa"
        document.getElementById("grafico").src="icons/obesidadeExtrema.png"
    }
}

function limpar(){
    document.getElementById("imc").innerHTML=""
    document.getElementById("status").innerHTML=""
    document.getElementById("grafico").scr="icons/reset.png"
}