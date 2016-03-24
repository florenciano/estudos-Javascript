(function(){
	/* ajax: XMLHttpRequest */

	// // simples requisição
	// // Assíncrona e preparando a ser chamadda no momento certo
	var req = new XMLHttpRequest();
	req.open("GET", "data.json", true);
	req.addEventListener("load", function () {
		console.log("Done:", req.status);
		console.log(req.responseText);
		// console.log(req.status, req.statusText);
		// console.log(req.getResponseHeader("content-type"));
	});
	req.send(null);

	/*
		Abstraindo requisições
		Se você está escrevendo um programa que precisa fazer requisições
		HTTP, é uma boa ideia usar uma função auxiliar para que você não
		acabe repetindo o esquisito padrão XMLHttpRequest por todo o seu código.
	*/
	function getURL(url, callback) {
  		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.addEventListener("load", function() {
	    if (req.status < 400)
	    	callback(req.responseText);
	    else
	    	callback(null, new Error("Request failed -> " + req.statusText));
	  	});
	  	req.addEventListener("error", function(){
	  		callback(null, new Error("Network error"));
	  	});
	  	req.send(null);
	}

	// tratando caso algo dê errado
	getURL("data.json", function(content, error) {
  		if (error != null)
	    	console.log("Falho a busca por 'nonsense.json': " + error);
		else
	    	console.log("nonsense.json: " + content);
	});

})();