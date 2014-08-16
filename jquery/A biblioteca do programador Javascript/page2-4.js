// forma reduzida de dizer: $( document ).ready(function(){ ... });
// também pode ser entendida como Callback
$(function() {

	$( "button" ).click(function() {

		// 1. exemplo de ancestral descendente
		// $( "div span" ).css( "background","violet" );

		// 2. pai filho
		// $( "div > p" ).css( "background","violet" );

		// 3. anterior próximo
		// um elemento imediatamento após
		// $( "hr + div" ).css( "background","violet" );

		// 4. anterior irmãos
		// $( "div ~ ul" ).css( "background","violet" );

		/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

		// $( "li:not(li.special)" ).css( "background","orange" );

		// $( "li:nth-child(2)" ).css( "background","violet" );
		// $( "li:gt(1)" ).css( "background","violet" );
		// $( "li:lt(4)" ).css( "background","violet" );

		// $( ":header" ).css( {"background":"orange" , "color":"#fff"} );

		// contains é sensível smallcase / uppercase
		// $( "div span:contains('texto')" ).css( {"background":"salmon", "padding":"0 .25em"} );

		// $( "div:empty" ).css( "background","green" );

		// $( "li:has('span')" ).css( {"background":"blue", "color":"#fff"} );

		// $( "p:not(p:parent)" ).css( "background","orange" );

		var container = [ ];
		var ocultos = $( ":hidden" );

		ocultos.each(function() {
			container.push( this.innerHTML );
		});

		$( ".vazio" ).text( container.join( " - " ) ).css( "color","violet" );

		$( "a[href ^= 'http://']" ).css( "background","orange" );

	})

});