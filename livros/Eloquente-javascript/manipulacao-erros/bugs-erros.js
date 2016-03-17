(function(){
	
	/* Modo estrito */
	"use strict";

	function encontreOProblema() {
		// neste modo não permite, por exemplo, variaveis globais
		for (var i = 0; i <= 10; i++) {
			console.log(i);
		}
	}
	encontreOProblema();

	function Person(name) { this.name = name; }
	var meuNome = new Person("Rodrigo");
	console.log(meuNome);


	/* Propagação de erros */
	// O exemplo abaixo previne a saída de erro add um valor null
		// Algumas desvantagens: 
		// É possível prever todos os valores?
		// Retornando valores especiais pode tornar o programa confuso

	function promptNumber (question) {
		var result = Number(prompt(question, ""));
		if (isNaN(result)) return null;
		else return result;
	}
	// console.log(promptNumber("Quantos dedos no pé você tem?"));

	/* Excecções */
	// Podemos parar o fluxo de um programa.
	// Usamos o comando throw em conjunto com try/catch(error)

	function promptDirection(question) {
		var result = prompt(question, "");
		if (result.toLowerCase() == "left") return "L";
		if (result.toLowerCase() == "right") return "R";
		// exceção em caso de erro
		throw new Error("Invalid direction: " + result);
	}

	function look() {
		if (promptDirection("Which way?") == "L") {
			return "a house";
		} else {
			return "two angry bears";
		}
	}

	try {
		console.log("You see", look());
	} catch (error) {
		console.log("Something went wrong: " + error);
	}

	// example test
	/*
	var a = "A", b = 1;
	function verif(string) {
		if(typeof string == "string") {
			return "Aeeee";
		}
		throw new Error("Valor inválido: " + string);
	}

	try {
		console.log(verif(a));
	} catch (e) {
		console.log("Qhué, qhué! " + e);
	}
	*/

	/* Captura seletiva */
	// Quando se captura erro por exeção não sabemos o que ou qual[no caso de + de 1] exeção será lançada
		// Em vez disso, vamos definir um nobo tipo
		// de erro e usar instanceof para identificá-lo
	function InputError(msg) {
		this.message = msg;
		this.stack = (new Error()).stack;
	}

	InputError.prototype = Object.create(Error.prototype);
	InputError.prototype.name = "InputError";
	/* O prototype é feito para derivar-se de Error.prototype para que
	instanceof Error retorne true para objetos de InputError. Nome da
	propriedade também é dada para tipos de erro padrão (Error, SyntaxError,
	ReferenceError e assim por diante) para que também se tenha uma propriedade. */


	function promptDirection2(question) {
		var result = prompt(question, "");
		if (result.toLowerCase() == "left") return "L";
		if (result.toLowerCase() == "right") return "R";
		// exceção em caso de erro
		throw new InputError("Invalid direction: " + result);
	}

	// Agora podemos fazer um loop e o erro sera tratado com mais cuidado
	for (;;) { // este é um laço infinito, tome cuidado
		try {
			var dir = promptDirection2("Where?");
			console.log("You chose ", dir);
			break;
		} catch (e) {
			if (e instanceof InputError) {
				console.log("Not a valid direction. Try again.");
			} else {
				throw e;
			}
		}
	}

})();