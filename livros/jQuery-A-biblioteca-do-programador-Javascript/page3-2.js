$(function() {

	$( "#btn1" ).click( function() {

		/*

		var tagLink = $( "<a>" ).attr({
			href: 	"#",
			title: 	"link1",
			target: "_blank"
		});

		//  se o alvo do 'append' for único o elemento é MOVIDO
		// se o alvo do 'append' for múliplos o elemento é COPIADO

		$( "ul li" ).prepend( tagLink.text( "Item 1" ) );

		*/

		/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

		/*
		var tagLink = $( "<a>" ).attr({
			href: 	"#",
			title: 	"link1",
			target: "_blank"
		}).appendTo( "ul li:first" ).text( "8=D" );
		*/


		// var createDiv = $( "<div>" ).addClass( "wrapper" );

		$( "div" ).wrapAll( "<div class='wrapper'></div>" );


	});

})