/**
 * APP Flex
 * @author Vitor Fialho Bergami
 */


function calcular() {
    let etanol = frmFlex.txtetanol.value
    alert(etanol)
    let gasolina = frmFlex.txtgasolina.value
    if (etanol < 0.7 * gasolina){
        document.getElementById("status").src="icons/etanol.png"
    }else{
        document.getElementById("status").src="icons/gasolina.png"
    }
}

function limpar(){
    document.getElementById("status").src="icons/neutro.png" /**getElementById serve para pegar o nome que voce colocou no html  e fazer o codigo no JS*/
}