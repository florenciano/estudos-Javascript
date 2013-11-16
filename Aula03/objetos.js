/* ============================================================================
	Objects
	Formas de organizar seus códigos em javascript
============================================================================ */
console.log("== objetos.js ==");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Objeto literal
	variavel sera o elemento de acesso para o objeto
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
var carro = {
	// propriedade e suas associações
	cor			: 	"vermelho",
	marca		: 	"fox",
	ano			: 	2013,
	motor		: 	1.6,
	fabricante	:  "volks",
	status		: 	"off",
	// métodos e suas associações
	ligar		: 	function() {
		// so ligar se o status for off
		if(carro.status == "off") {
			carro.status = "on";
			// incrementando a resposta
			return "O carro " + carro.marca + " foi ligado";
		} else {
			return "O carro já esta ligado. Presta atenção!";
		}
	},
	desligar	: 	function() {
		if(carro.status == "on") {
			carro.status = "off";
			return "O carro " + carro.marca + " foi desligado";
		} else {
			return "O carro já esta desligado. Presta atenção!";
		}
	},
};
// testando o objeto log ou dir interfere na visualização do conteúdo
console.dir(carro);

console.log("-----");
// outher example com uso de this
var people = {
	nome	: 	"John",
	idade	: 	24,
	falar	: 	function() {
		// this = este objeto q estou agora people
		return this.nome + " disse: Eae maluco!";
	},
	dormir 	: 	function() {
		return "O " + this.nome + " tem " + this.idade + " (bichona) e esta dormindo";
	},
};
console.log(people.nome);
console.log(people.idade);
console.log(people.falar());
console.log(people.dormir());

console.log("-----");
// other example
var cake = {
	status 			: 	"Pronto",
	ingredientes 	: [],

	baterCake		: function() {
		if(this.ingredientes.length >= 2) {
			return "Batendo o bolo... aguarde!";
		} else {
			return "Cadê os ingredientes carai?";
		}
	},

	assarCake 		: function() {
		if(this.status == "Pronto") {
			return "Assando o bolo... aguarde!";
		} else {
			return "Falta bater o bolo";
		}
	},

	addIngrediente	: function(produto) {
		this.ingredientes.push(produto);
		return this.ingredientes.join(", ")
	},
};