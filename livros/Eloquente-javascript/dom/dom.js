(function(){
	
	/* 
		A função abaixo escaneia um documento procurando
		por nós de texto contendo uma determinada string
	*/
	function talksAbout(node, string) {
	  	if (node.nodeType == document.ELEMENT_NODE) {
	    	for (var i = 0; i < node.childNodes.length; i++) {
	      		if (talksAbout(node.childNodes[i], string))
	        	return true;
	    }
	    return false;
	  	} else if (node.nodeType == document.TEXT_NODE) {
	    	console.log(node.nodeValue.indexOf(string) > -1);
	    	return node.nodeValue.indexOf(string) > -1;
	 	}
	}

	console.log(talksAbout(document.body, "book"));

	// more example
	var link = document.getElementsByTagName('p')[0];
	console.log(link);

	var paragraphs = document.body.getElementsByTagName("p");
  	document.body.insertBefore(paragraphs[2], paragraphs[0]);

  	/* 
		Substituir todas as img pelos seus atributos de alt
	*/

	function replaceImg() {
		var images = document.getElementsByTagName("img");
		for (var i = 0; i < images.length; i++) {
			var image = images[i];
			if (image.alt) {
				var text = document.createTextNode(image.alt);
				image.parentNode.replaceChild(text, image);
			}
		}
	}
	var btn = document.getElementById('btn');
	btn.addEventListener("click", replaceImg);

	/* 
		Atributos:  Se você quiser fazer seus próprios nomes de atributos,
		porém, esses atributos não estarão presentes como uma propriedade
		no nó do elemento. Use os métodos getAttribute e setAttribute
	*/
	var paragr_s = document.body.getElementsByTagName("p");
	Array.prototype.forEach.call(paragr_s, function(paragr) {
		if(paragr.getAttribute("data-classified") == "secret") {
			paragr.parentNode.removeChild(paragr);
		}
	});

})();