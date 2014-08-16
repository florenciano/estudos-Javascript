// forma reduzida de dizer: $( document ).ready(function(){ ... });
// também pode ser entendida como Callback
$(function() {

	$( "p" ).click(function() {

		var nDiv = $( "div" ).length;
		$( "<span>Foram encontradas: " + nDiv + " divs neste documento</span>" ).appendTo( "p" );

	});

	// posição da ocorrência no conjunto do elemento
	$( "li" ).eq(2).css( "color", "violet" );

});