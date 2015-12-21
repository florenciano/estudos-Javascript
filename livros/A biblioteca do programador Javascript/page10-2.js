$(function(){

	$( "#horario tbody tr:odd" ).addClass( "impar" );
	$( "#horario tbody tr:even" ).addClass( "par" );

	// clicando em cada 'th' da tabela
	$( "#horario tr#horizontal th" ).each(function(i) {
		// guardando o numero da coluna
		var n = i + 1;

		// pegando o texto da celula clicada
		var textoColuna = $( this ).text();

		// aplicando/retirando estilos ao passar o mouse sobre
		$( "#horario tbody tr td:nth-child(" + n + ")" ).hover(
			function(){
			$( this ).addClass( "destacar-um" );
			// pegando o texto da célula
			var textoCelula = $( this ).text();

			// criando o tooltip e add dentro da celula
			$( "<div class='tooltip'>Clique para destacar as linhas<br><b>"
				+ textoCelula + " : " + textoColuna + "</b></div>" ).prependTo( this );

			// ao clicar procurar na tabela
			$( this ).click( function() {
				// retirando o estilo da linha clicada
				// esta linha é importante qdo o usuário continuar o click em outra linhas
				$( "#horario tbody tr" ).removeClass( "destacar" );
				$( ".tooltip" ).remove();

				// procure na tabela o conteúdo desejado
				$( "#horario tbody tr td:nth-child(" + n + "):contains(" + textoCelula + ")" )
				.parents( "tr" ).addClass( "destacar" );
			});
		},
			function() {
				$( this ).removeClass( "destacar-um" );
				$( ".tooltip" ).remove();

		});
	});

});