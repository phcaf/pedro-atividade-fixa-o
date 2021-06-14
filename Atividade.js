//Questão1
function quesitoUm(text) 
{
console.log(`OLÁ ${text} !`)
}

//Questão2
function quesitoDois(valorUm,valorDois,callback) 
{
console.log(callback(valorUm,valorDois));
}
quesitoDois(10,12, function(valorUm,valorDois){
    return valorUm + valorDois;
}) 
quesitoDois(14,25, function(valorUm,valorDois){
    return valorUm - valorDois;
}) 
quesitoDois(20,40, function(valorUm,valorDois){
    return valorUm / valorDois;
}) 
quesitoDois(2,35, function(valorUm,valorDois){
    return valorUm * valorDois;
}) 
//Questão3
function verificaValor(a, callback) {
    return function verificaValorDenovo(b) {
        callback(a, b);
    };
}
var valoresNumeros = verificaValor(10, function (a, b)
{
    a % b == 0 ? true : false;
});

