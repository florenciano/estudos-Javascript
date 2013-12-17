/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Trabalhando com Arrays para gerar titulos dinamicos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// define o conteudo desejado
var nomePessoaDesejada = "Maria Betânia";
// pega a marcacao que tera conteudo dinamico
var tituloPage = document.querySelector(".titulo");

for(i = 0; i < Pessoa.length; i++) {
	// define os itens a serem trabalhados
	var nome = Pessoa[i].nome;
	var nacionalidade = Pessoa[i].nacionalidade;

	if(nome == nomePessoaDesejada) {
		tituloPage.textContent = nome;
		tituloPage.className = "selected";

		// criando o conteudo
		var div = document.createElement("div");
		var p = document.createElement("p");
		p.textContent = nacionalidade;
		div.appendChild(p);
		document.body.appendChild(div);
	}
}