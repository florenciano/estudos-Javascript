/* ============================================================================
	Escopo de variaveis
	Toda variavel é uma propriedade do objeto global [window]
	Todas as funções que vc cria vai para os métodos
	do objeto global [window]
============================================================================ */
console.log("== escopo.js ==");

/*
Esta linha abaixo comentada esta anulando o objeto cake do arquivo anterior
Como estava no escopo global as variaveis com o mesmo nome estão colidindos
// var cake = "";

Solução: esconder a função do escopo global
Como?
Usando a expressão de função imediata autoinvocável
iife: Immediately-Invoked Function Expression
Inserir a função dentro dos parenteses

Tudo q estiver um var dentro de uma funcao IIFE
fica escondido e restrita a este escopo
do contrário ele fica no escopo global
*/
(function () {
	alert("teste do IIFE");
	var escondida = true;
})(); // este parentes é para exec da function

