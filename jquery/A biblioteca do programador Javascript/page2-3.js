// forma reduzida de dizer: $( document ).ready(function(){ ... });
// também pode ser entendida como Callback
$(function() {

	function conteudoParagrafo(p) {
		var arrayConteudos = [ ];

		for( var i = 0; i < p.length; i++ ) {
			arrayConteudos.push(p[i].innerHTML);
		}

		$( "div" ).text(arrayConteudos.join( " - " ));

	}

	// definindo evento e chamando a função
	$( "button" ).click(function() {

		conteudoParagrafo( $( "p" ).get().reverse() );

	});

	// limpando o conteúdo da div
	$( ".reset" ).click(function() {

		$( "div" ).empty();

	})

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$( "p" ).click(function() {
		var indice = $( "p" ).index(this);
		$( "div" ).append( "O índice deste paragráfo é: <span>" + indice + "</span><br>" );
	});
});