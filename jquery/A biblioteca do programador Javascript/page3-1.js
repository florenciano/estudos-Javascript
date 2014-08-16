$(function() {

	// $( "button" ).click(function() {

	// 	var texto = $( "a" ).attr( "href" );
	// 	$( "div span" ).text( texto ).addClass( "teste" );

	// });

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// $( "#btn2" ).click( function() {

	// 	$( "img" ).attr({
	// 		src: "3-1.jpg",
	// 		alt: "quadrado vermelho"
	// 	});

	// 	$( "li.teste" ).removeAttr( "class" );

	// });

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	var info = $( "div span" ).hasClass( "teste" );
	console.log(info);

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$( "#btn2" ).click( function() {
		$( "li.teste" ).toggleClass( "special" );
	});

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$( "#btn2" ).click( function() {
		// var content = $( "li:eq(1)" ).html();
		$( "div span" ).html( "<p class='um'> Conteúdo texto <code>text(<i>val</i>)</code> aqui.</p>" );
		$( "input:text" ).val( "Seu valor agora tem" ).focus();
	});

})