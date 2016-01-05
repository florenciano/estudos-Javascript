$(function(){

	/* Criado um campo para selção de todos checbkox */

	// definindo variaveis
	var newLabel = $( "<label>" ), newInput = $( "<input>" );
	// atribuindo os atributos
	newLabel.html( "<strong>Selecionar todas</strong>" );
	newInput.attr( "type", "checkbox" ).addClass( "todos" );
	// guardando o elemento em uma variavel
	var selAll = newLabel.prepend( newInput );
	// inserindo o elemento antes do container desejado
	// ficando o checkbox acima de todos os demais
	$( selAll ).insertBefore( ".mudar" );

	var todosCheckboxes = $( ".mudar" ).find( ":checkbox" );
	$( ".todos" ).click( function() {
		if( this.checked ) {
			$( this ).next().text( "Desmarcar todas" );
			$( todosCheckboxes ).attr( "checked", "checked" );
		} else {
			$( this ).next().text( "Selecionar todas" );
			$( todosCheckboxes ).removeAttr( "checked" );
		}
	});

	$( ".naoPode" ).hide();
	$( "#enviar" ).click(function(event) {
		event.preventDefault();
		// aqui o recurso length não se aplica
		var u = $( ".mudar input:checked" ).size();
		if ( u > 5 ) {
			$( ".naoPode" ).show();
		} else {
			$( ".naoPode" ).hide();
		}
	});

});