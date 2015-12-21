// Mais alguns detalhes sobre DOM
console.log("==== dom.js ====");

// Criando elementos dinamicamente

// imagem
var img = document.createElement("img");
// add atributos para o tag HTML
img.setAttribute("src", "http://lorempixel.com/100/100");
// ou
// img.src = "http://placehold.it/100X100";
img.alt = "Uma img qualquer";
img.title = "Uma img qualquer";
document.body.appendChild(img);



// h2 subtitulo
var h2 = document.createElement("h2");
// criando conteudo do h2
var conteudo = document.createTextNode("lorem ipsum");
h2.appendChild(conteudo);
document.body.appendChild(h2);

// console.log(h2);

// criando lista cpm 10 itens
var ul = document.createElement("ul");
var n = 1;
while ( n <= 10) {
	var li = document.createElement("li");
	var conteudolI = document.createTextNode("item " + n);
	li.appendChild(conteudolI);
	ul.appendChild(li);
	n++
}
document.body.appendChild(ul);

// criando tabela dinamicamente
var data = [
	{id : 1, model : "fox", factory : "volks"},
	{id : 2, model : "uno", factory : "fiat"},
	{id : 3, model : "fusion", factory : "ford"}
];
// console.log(data);
var cols = ["id", "modelo", "fabricante"];

var table = document.createElement("table");
table.setAttribute("border","1");

var tr = document.createElement("tr");
for(i = 0; i < cols.length; i++) {
	var td = document.createElement("td");
	td.textContent = cols[i];
	tr.appendChild(td);
}
table.appendChild(tr);
// gerando os dados
for(i = 0; i < data.length; i++) {
	console.log(data[i].id, data[i].model, data[i].factory);
	
	// criando uma linha para receber os dados
	var tr = document.createElement("tr");

	// gerando conteudo de texto
	var td1 = document.createElement("td");
	td1.textContent = data[i].id;

	var td2 = document.createElement("td");
	td2.textContent = data[i].model;

	var td3 = document.createElement("td");
	td3.textContent = data[i].factory;

	// appendando o texto nas celulasda table
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	// add linha na tabela [como são + de uma]
	table.appendChild(tr);
}
document.body.appendChild(table);