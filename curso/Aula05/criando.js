// como criar elementos HTML com jQuery

// wrapper
$(document).ready(function() {
	// criando um img
	$("<img>").attr("src", "http://lorempixel.com/100/100").appendTo("body");
	
	// criando um subtitulo
	$("<h2>").text("Criando um subtitulo").appendTo("body");

	// criando lista de 1 a 10
	var lista = $("<ul>");
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	$.each(numbers, function(index, value) {
		// console.log(index, value);
		$("<li>").text("item " + value).appendTo(lista);
	});
	lista.appendTo("body");

	// criando a tabela
	var data = [
		{id : 1, 	carro : "fox",		marca : "volks"},
		{id : 2, 	carro : "uno",		marca : "fiat"},
		{id : 3, 	carro : "foxsport",	marca : "ford"}
	];
	var table = $("<table>").attr("border", "1");
	var cabecalho = $("<tr>").append("<td>id</td><td>carro</td><td>marca</td>");
	cabecalho.appendTo(table);
	table.appendTo("body");

	// pegando os valores
	$.each(data, function(index, value) {
		var line = $("<tr>")
		.append("<td>" + value.id + "</td>")
		.append("<td>" + value.carro + "</td>")
		.append("<td>" + value.marca + "</td>");
		line.appendTo(table);
	});
	table.appendTo("body");
});
