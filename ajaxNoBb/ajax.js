/* AJAX COM JQUERY 
$(function() {
	var url = "livro.json";
	
	$.getJSON(url)
		.done( function (data) {
			console.log("Acessei o JSON. Veja um exemplo do ano: " + data.capitulo_1.assunto);
		})
		.fail( function (data) {
			console.log("Não consegui acessar o JSON" + data);
		});
});
*/

/* AJAX NO JAVASCRIPT */
var xmlhttp;
function abrirDocJSON (url, cfunc) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function minhaFuncao () {
	abrirDocJSON("livro.json?t=" + Math.random(), function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			
		    // criando as listas
			var minhaDiv, ul, li;
				minhaDiv = document.getElementById('myDiv'),
				ul = document.createElement('ul');

		    for( i = 0; i < data.length; i++ ) {
		    	li = document.createElement('li');
		    	li.innerText = data[i].capitulo.assunto;
		    	ul.appendChild( li );
		    }
		    // inserindo no DOM
		    minhaDiv.appendChild( ul );
    	}
	});
}

/* EVENTOS */
var a = document.getElementById('apagarLista'),
	b = document.getElementById('gerarLista'),
	d = document.getElementById('myDiv'),
	u = d.getElementsByTagName('ul'),
	l = d.getElementsByTagName('li');

// gerar lista
b.addEventListener( 'click', function (e) {
	l.length < 1 ? minhaFuncao() : e.preventDefault();
});


// apagar lista
function remove (element) { element.parentNode.removeChild(element) }

a.addEventListener( 'click', function (e) {
	u.item(0).remove(u);
	e.preventDefault();
});

