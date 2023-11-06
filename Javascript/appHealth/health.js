/**
 * APP -HEALTH
 * @author Vitor Fialho Bergami
 */

let peso, altura, idade, imc, fcm, tmb //fmc: frequecia cardiaca maxima/tmb: taxa metabolica basal

function calcular() {
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value
    //validação do formulario
    if (frmIMC.txtIdade.value === "") {
        alert("preencha a idade")
        frmIMC.txtIdade.focus()//focus serve para jogar a pessoa n area que não foi preenchida
    } else if (frmIMC.txtPeso.value === "") {
        alert("preencha o peso")
        frmIMC.txtPeso.focus()
    } else if (frmIMC.txtAltura.value === "") {
        alert("preencha a Altura")
        frmIMC.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o seu sexo")
    } else if (frmIMC.nivel.value === "") {
        alert("Selecione o nivel de atividade")
        frmIMC.nivel.focus()
    } else {
        //imc
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = (`IMC: ${imc.toFixed(2)}`)
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "icons/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "icons/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "icons/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade Grau 1"
            document.getElementById("grafico").src = "icons/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade Grau 2"
            document.getElementById("grafico").src = "icons/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade Severa"
            document.getElementById("grafico").src = "icons/obesidadeExtrema.png"
        }
        //fcm - formula de Tanaka
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = (fcm)

        //TMB - formula de Harris Benedict
        //variaveis locais para capturar o conteudo da lista (vetor)
        let select = document.getElementById("atividade")
        let opcaoValor = Number(select.options[select.selectedIndex].value) // esse pega o valor 
        //let opcao = select.options[select.selectedIndex].text // esse pega o texto 
        //alert(opcaoValor) //apoio verificação do valor 
        if(document.getElementById("m").checked === true){
            tmb = (66 + (13.7 * peso) + (5 * altura * 100) - (6.8 * idade) ) * opcaoValor
        }
        //formula para mulheres 
        if(document.getElementById("f").checked === true){
            tmb = ( 655 + (9.6 * peso) + (1.8 * altura * 100) - (4.7 * idade)) * opcaoValor
        }
        //resultado final 
        document.getElementById("calorias").innerHTML = tmb
    }




}


function limpar() {
    document.getElementById("imc").innerHTML = ""
    document.getElementById("status").innerHTML = ""
    document.getElementById("freq").innerHTML = ""
    document.getElementById("grafico").scr = "icons/reset.png"
    document.getElementById("calorias").innerHTML = ""
}