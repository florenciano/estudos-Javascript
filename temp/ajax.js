/* com jQuery
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

// Na unha
var xmlhttp;
function loadJSONDoc (url, cfunc) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
function minhaFuncao () {
	loadJSONDoc("livro.json?t=" + Math.random(), function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var doidao = JSON.parse(xmlhttp.responseText);
		    $( "#myDiv" ).html( doidao.capitulo_1.assunto );
    	}
	});
}
document.getElementById("bosta").addEventListener("click", minhaFuncao);
