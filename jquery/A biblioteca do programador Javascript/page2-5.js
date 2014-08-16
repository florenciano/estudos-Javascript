// forma reduzida de dizer: $( document ).ready(function(){ ... });
// também pode ser entendida como Callback
$(function() {

	$( "button" ).click(function(e) {
		// pega todos os inputs
		// $( ":input" ).css( "border","1px solid violet" );

		// pega somente os inputs text
		$( ":text" ).css( "border","1px solid violet" );

		// pega os inputs password
		$( ":password" ).css( "border","1px solid SeaGreen" );

		// pega os inputs radio
		// usou o 'parent' porque browser não aplica borda no elemento
		// estilizamos no seu elemento pai
		$( ":radio" ).parent().css( "border","1px solid gold" );

		// pega os inputs checkbox
		$( ":checkbox" ).parent().css( "border","1px solid Firebrick" );

		// pega os inputs submit
		$( ":submit" ).css( {"border":"1px solid HotPink", "background":"Pink"} );

		e.preventDefault();
	});

	var spanVazio = $( "form span:empty" ).empty();
	$( "select" ).change(function() {

		$( "option:selected" ).each(function() {
			spanVazio.append( "Você selecionou os seguintes itens: <b>" + $( this ).text() + "</b><br>" );
		});
	});

});