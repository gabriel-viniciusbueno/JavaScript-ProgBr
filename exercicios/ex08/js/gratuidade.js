// || Avalia se algum dos valores necessários são TRUE e retorna TRUE. Diferente de &&, || não precisa que todos os valores sejam verdadeiros e apenas um já basta.

var idade = 11;

var maior60 = idade >= 60;
var menor10 = idade <= 10;

var gratuidade = maior60 || menor10;

console.log("Rola gratuidade?",gratuidade);