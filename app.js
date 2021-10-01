function Chutar(){
    console.log("Função Chutar")


//sortear um numero aleatorio secreto
let numeroSecreto = 3


//pegar um numero digitado
let chute = parseInt(document.querySelector("#valor").value)
console.log(numeroSecreto , chute)

/**

     * OPERADORES RELACIONAIS

     * < --> menor

     * > --> maior

     * <= --> menor ou igual

     * >= --> maior ou igual

     * == --> igual

     * != --> diferente

     */

//comparar o numero digitado com o numero aleatorio secreto
if(numeroSecreto == chute){


//se tiver correto e os numeros forem iguais, mostrar a mensagem que a pessoa ganhou
document.querySelector(".resultado").innerHTML = "Você acertou"

}
else
{

//se tiver errado e os numeros forem diferentes, mostrara mensagem que a pessoa errou
document.querySelector(".resultado").innerHTML = "Voçê errou"


}



}