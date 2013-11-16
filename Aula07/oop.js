// OOP Padrao de orientacao a objetos
// pra reutilizar o seu objeto
console.log("---OOP ---");


/*

// padrao do construtor
// 1 letra maiuscula
function Carro(model) {
	//add propriedade
	this.modelo = model;
	this.cor = "";
	// add método
	this.setColor = function(color) {
		this.cor = color;
	}

	this.getInfo = function() {
		return this.modelo + " " + this.cor;
	}
}

// criando os objetos
// ox ex abaixo estao nascendo a partir do function Carro
var carro1 = new Carro("fiat 147");
// aplicando uma cor ao obj carro
carro1.setColor("vermelho")
console.dir(carro1);

var carro2 = new Carro("belina");
carro2.setColor("bege");
console.dir(carro2);

// criando outro objeto mais amplo
var carro3 = new Carro("dell Rey");
carro3.setColor("azul");
console.dir(carro3.getInfo());

*/

function Conta() {
	// propriedades
	this.titular = "";
	this.saldo = 0;
}
// add método [portanto function] com prototype
// prototype é uma cadeia de objetos. Lugar unico para compartilhar entre todos os objetos
// prototype é o lugar pra vc compartilhar todas as funcoes q vc criar a partir de um obj
Conta.prototype.getSaldo = function() {
	return this.saldo;
}

Conta.prototype.deposita = function(val) {
	return this.deposita += val;
}

var conta1 = new Conta();
var conta2 = new Conta();

conta1.deposita(500);
conta2.deposita(2500);

console.log(conta1, conta1.getSaldo());
console.log(conta2, conta2.getSaldo());

console.dir(conta1);
console.dir(conta2);