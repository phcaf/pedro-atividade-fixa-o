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

//Questão4

function verificaMes(c)
{
    switch (c)
    {
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5: 
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
    }
}

//Questão5

function atividadeCinco(valorUm, valorDois, callback)
 {
    console.log(callback(valorUm,valorDois));
 }

atividadeCinco(25,23, function(valorUm,valorDois)
 {
    if(valorUm >= valorDois) 
    {
        return valorUm;
    }
 })

