// navegando entre a estrutura do DOM
var container = document.querySelector(".container");
var teste = container.firstElementChild.nextElementSibling.nextElementSibling;
teste.className = "estilo";

// criando + um li na div container e colocando em primeira na lista
var li = $( "<li>", { class : "first" } ).prependTo( ".container ul" );
$( "<a>" ).attr( "id" , "clickMe" ).attr( "href", "#" )
	.text( "Clique aqui" ).appendTo(li);