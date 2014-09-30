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
		    minhaDiv = $( "#myDiv" ), ul = $( "<ul>" );
		    for( i = 0; i < data.length; i++ ) {
		    	li = $( "<li>" ).text( data[i].capitulo.assunto );
		    	ul.append( li );
		    }
		    // DOM 
		    minhaDiv.append( ul );
    	}
	});
}

/* EVENTOS */
$( "#gerarLista" ).on( "click", function (e) {
	$( "#myDiv li" ).length < 1 ? minhaFuncao() : e.preventDefault();
});
$( "#apagarLista" ).on( "click", function (e) {
	$( "#myDiv ul" ).remove();
});
