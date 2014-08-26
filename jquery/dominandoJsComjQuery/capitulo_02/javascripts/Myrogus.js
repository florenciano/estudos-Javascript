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
	var total = document.getElementById('total');
	total.innerHTML = converterEmText(value);
}

/*
/////////////////////////////////////////////////////////////////////
	CALCULANDO O VALOR DOS SUBTOTAIS
/////////////////////////////////////////////////////////////////////
*/

// fazendo os cálculos necessários para ter o valor total
function calculateTotalProducts () {
	var produtos = document.getElementsByClassName("produto"); // array: lista do carrinho da compra

	var totalProdutos = 0;
	for(var pos = 0; pos < produtos.length; pos++) {
		// trabalhando com o valor unitário
		var priceElements = produtos[pos].getElementsByClassName("price");
		var priceText = priceElements[0].innerHTML;
		var price = converterEmNumber(priceText);

		// trabalhando com a qtde
		var qtyElements = produtos[pos].getElementsByClassName("quantity");
		var qtyText = qtyElements[0].value;
		var quantity = converterEmNumber(qtyText);
		
		// criando subtotais e add no valor Total
		var subTotal = quantity * price;
			totalProdutos += subTotal;
	}
	return totalProdutos;
}

// qdo houver a mudança no campo faça...
function quantidadeMudou () {
	escreverTotal(calculateTotalProducts());
}

// recalculando a cada mudança no campo qtde
function onDocumentLoad () {
	var textEdits = document.getElementsByClassName("quantity");

	for(var i = 0; i < textEdits.length; textEdits++) {
		textEdits[i].onchange = quantidadeMudou;
	}
}

window.onload = onDocumentLoad;