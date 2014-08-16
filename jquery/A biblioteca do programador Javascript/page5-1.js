$(function() {

	// blur()
	$( ":text:eq(0)" ).blur( function() {

		$( this ).css( "backgroundColor","orange" );

	});

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// focus()

	$( ":text:eq(1)" ).focus( function() {

		$( this ).css( "backgroundColor","yellow" );
		$( ".mensagem" ).html( "Use apenas números" );

	});

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// mouseup()

	$( "h2" ).mouseup( function() {

		$( this ).append( "Evento mouseup" );

	});

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// change()

	$( "select" ).change( function() {

		var escohido = $( "option:selected").text();
		$( ".mensagem" ).html( "O valor escolhido é: <strong>" + escohido + "</strong>" );

	});

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// mousemove()
	$( ".board" ).mousemove( function(o) {
		var coord = "[ x = " + o.clientX + " y = " + o.clientY + " ]";
		$( ".display" ).text( coord );
	});

	$( ".board" ).mouseout( function() {
		$( ".display" ).empty();
	})

});