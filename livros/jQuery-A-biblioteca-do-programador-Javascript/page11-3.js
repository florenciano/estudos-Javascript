$(function(){

	/* Revelar campos */
	$( "#formulario label:not(.fabricante)" ).hide();

	$( "input:radio" ).click( function() {
		// revela todos os checkboxes do btn clicado
		$( this ).parents( ".fabricante" ).siblings( "label" ).fadeIn( 400 );
		// esconde todos os checkboxes dos demais btns
		$( this ).parents( ".mudar" )
			.siblings( ".mudar" )
			.children( "label:not( .fabricante )" )
			.slideUp()
			.each(function() {
				// resetando cada label
				$( this ).find( ":checkbox" ).removeAttr( "checked" );
			});
	});

	/* Substituindo o 'legend' por um titulo de página */

	// criando um título para a tabela
	// inserindo um h4 após o título da tabela 'legend'
	$( "<h4 class='legenda'></h4>").insertAfter( "legend" );
	// pega o texto do 'legend' e armazena na variavel
	var textoLegenda = $( "legend" ).remove().text();
	// insira no h4.legenda o texto da variavel
	$( ".legenda" ).append( textoLegenda );
	// aplica um novo estilo no 'fieldset'
	$( "fieldset" ).addClass( "fieldset" );

	/* Criado um campo para selção de todos checbkox */
	var newLabel = $( "<label>" ), newInput = $( "input" );
	newInput.attr( "type", "checkbox" ).text( "Selecionar todas" );
	newLabel.append( newInput );
	$( ".mudar" ).insertBefore( newLabel );


});