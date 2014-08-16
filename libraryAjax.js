/* ==========================================================================
   Author: 		Rodrigo Florenciano
   Assunto: 	Ajax: CrossBrowser, Biblioteca, Acessibilidade, Proxy
========================================================================== */

window.onload=function() {

	document.getElementById("btn").onclick=function() {

		// especificando o arquivo remoto
		requisitar("http://localhost/ajax/arquivo.xml");

		return false;
	}

	// feedback ao usuario sobre o processamento da pagina
	function carregando(c) {
		while (c.hasChildNodes()) {
			c.removeChild(c.lastChild);
		}
		var img = document.createElement("img");
		img.setAttribute("src", "ajax/ajax-loader.gif");
		c.appendChild(img);
	}

	// mostrar conteudo do resultado ajax no div da pagina
	function mostrar(ajax) {
		var r = document.getElementById("resposta");
		while (r.hasChildNodes()) {r.removeChild(r.lastChild); }

		var xml = new XML(ajax.responseText);
		r.appendChild(document.createTextNode(xml.url));
	}

	// fazer solicitação para o servidor
	function requisitar(url) {
		var ajax = iniciaAjax();
		carregando(document.getElementById("resposta"));
		ajax.onreadystatechange = function() { //resposta da requisição
			if (ajax.readyState == 4) { // status da requisição valor entre 0 a 4
				mostrar(ajax);
			}
		}
		ajax.open("POST", url); //função para conectar com o servidor, txt, xml
		ajax.send(null); // função q irá comuicar com o servidor
	}


	// inicia a chamada ajax
	function iniciaAjax() {
		var ajax = null;

		// configuração cross-browser
		if (window.XMLHttpRequest) {
			ajax = new XMLHttpRequest();
		} else if (window.ActiveXObject) { //ie6
			try {
				ajax = new ActiveXObject("Msxml2.XMLHTTP"); //objeto + recent do ie
			}	catch(e) {
				ajax = new ActiveXObject("Microsoft.XMLHttpRequest"); //objeto old do ie
			}
		}
		return ajax;
	}

}
