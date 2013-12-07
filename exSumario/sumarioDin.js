/*
 * criando lista dinamica com os titulos
 */

(function(){

	// selecionando os titutlos
	var allTitle = document.querySelectorAll(".materia h2");

	// criando o container
	var tagUl = document.createElement("ul");

	// add item na lista e add na ul
	for(i = 0; i < allTitle.length; i++) {
		var tagLi = document.createElement("li");
		var conteudo = document.createTextNode(allTitle[i].textContent);
		tagLi.appendChild(conteudo);
		tagUl.appendChild(tagLi);
	}

	// criando a section e anexando a lista gerada
	if(!allTitle.length == 0) {
		var sectionSumario = document.createElement("section");
		sectionSumario.className = "sumario";

		var titleList = document.createElement("h1");
		titleList.innerText = "Sumário";

		// CONSTRUINDO O DOM
		// insere o [section] antes do primeiro filho do body
		document.body.insertBefore(sectionSumario, document.body.firstChild);

		sectionSumario.appendChild(titleList);
		sectionSumario.appendChild(tagUl);
	}
})();
