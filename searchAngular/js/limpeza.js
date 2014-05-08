/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	APAGANDO OS LI VAZIOS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function clearList(event) {
	// varre todos os listas
	var list = document.querySelectorAll(".sublist");
	for(var i = 0; i < list.length; i++) {
		var contentLink = list[i].firstChild;
		// verifica-se os links tem conteúdo de texto
		if(contentLink.textContent == "" || contentLink.textContent == null || contentLink.textContent == undefined) {
			list[i].style.display="none";
		}
	}
}
// ao carregar a pagina
$(document).ready(function(){
	clearList();
});
// e também quando digitar no input e perder o foco do mesmo
$( "#pesquisar" ).bind("keydown", "blur",function(){
	clearList();
});

function teste2() {
	var ola = $( ".teste" );
	
	ola.each(function(){
		$(this).click(function(){
			console.log("bicha");
		});
		$(this).css("color", "red");	
	});
}

	teste2();
