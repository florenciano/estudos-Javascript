$(function(){

	// construindo uma tabela zebrada em dois por dois
	$( "#horario tbody tr:nth-child(9n-8)" ).addClass( "estilo1" );
	$( "#horario tbody tr:nth-child(9n-7)" ).addClass( "estilo1" );
	$( "#horario tbody tr:nth-child(9n-6)" ).addClass( "estilo1" );

	$( "#horario tbody tr:nth-child(9n-5)" ).addClass( "estilo2" );
	$( "#horario tbody tr:nth-child(9n-4)" ).addClass( "estilo2" );
	$( "#horario tbody tr:nth-child(9n-3)" ).addClass( "estilo2" );

	$( "#horario tbody tr:nth-child(9n-2)" ).addClass( "estilo3" );
	$( "#horario tbody tr:nth-child(9n-1)" ).addClass( "estilo3" );
	$( "#horario tbody tr:nth-child(9n)" ).addClass( "estilo3" );

	// efeito hover
	$( "#horario tbody tr" ).hover(
		function() {
			$( this ).addClass( "destaca" );
		},
		function() {
			$( this ).removeClass( "destaca" );
		}
	);

	// destacar colunas
	$( "tr#horizontal th[scope=col]" ).each(function(i) {
		// cada 'i' equivale ao número da coluna

		$( this ).css( "cursor","pointer" );

		$( this ).click( function() {
			$( this ).parents( "thead" )
			.siblings( "tbody" )
			.children( "tr" )
			.each(function() {
				$( this ).children( "td:eq(" + i + ")").toggleClass( "destaca" );
			});
		});
	});

});