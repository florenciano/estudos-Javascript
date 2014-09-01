/*
/////////////////////////////////////////////////////////////////////
	CALCULANDO O VALOR TOTAL
/////////////////////////////////////////////////////////////////////
*/

// convertendo string no formato "R$ 10,00" em números
function converterEmNumber (text) {
	var cleanText = text.replace("R$ ","").replace(",",".");
	return parseFloat(cleanText);
}

// aplicando máscara de "R$ 10,00" em valores numéricos
function converterEmText (value) {
	var cleanNumber = (value < 1 ? "0" : "") + Math.floor(value * 100); // add 2 casas no texto
	cleanNumber = "R$ " + cleanNumber // add unid. monetária
	return cleanNumber.substr(0, cleanNumber.length - 2) + "," + cleanNumber.substr(-2); // -2 faz a contagem da string do fim ao começo
}

// Alterando o valor total da lista de compras
function escreverTotal (value) {
	var total = $( "#total" );
	$(total).text(converterEmText(value));
}

/*
/////////////////////////////////////////////////////////////////////
	CALCULANDO O VALOR DOS SUBTOTAIS
/////////////////////////////////////////////////////////////////////
*/

// fazendo os cálculos necessários para ter o valor total
function calculateTotalProducts () {
	var produtos, totalProdutos;
		produtos = $( ".produto" ), // array
		totalProdutos = 0;

	$(produtos).each(function (pos, produto) {
		var $produto = $(produto);
		var quantity = converterEmNumber(
			$produto.find( ".quantity" ).val() );
		var price = converterEmNumber(
			$produto.find( ".price" ).text() );

		totalProdutos += quantity * price;
	});
	return totalProdutos;
}

// recalculando a cada mudança no campo qtde
$(function(){
	$( ".quantity" ).change(function () {
		escreverTotal(calculateTotalProducts()); // chama a funcão do cálculo
	});
});

