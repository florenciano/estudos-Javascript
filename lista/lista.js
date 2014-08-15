(function($) {

	function listarMateria() {

		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			CONTEUDO COMECA AQUI..
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

		var listagemMateria = [ ];

		var listagemMateria1 = {
			nomeMateria 		: "Economia Criativa segunda edição",
			descricaoMateria 	: "lorem ipsum dolor simet Economia Criativa"
		};

		var listagemMateria2 = {
			nomeMateria 		: "Negócios quantitativos",
			descricaoMateria 	: "Negocios quantitativos lorem ipsum"
		};

		var listagemMateria3 = {
			nomeMateria 		: "Lorem ipsum dolor simet",
			descricaoMateria 	: "sdflsadfjas fsaf jwoi queoiru iw"
		};

		var listagemMateria4 = {
			nomeMateria 		: "2d0-89-4 34",
			descricaoMateria 	: ";dfklsad;fk;lkfa ]spfwqe89"
		};

		// ADD NO ARRAY ABAIXO

		listagemMateria.push(
			listagemMateria1,
			listagemMateria2,
			listagemMateria3,
			listagemMateria4
		);

		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			CONTEUDO TERMINA AQUI..
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

		return listagemMateria;
	}

	function criarListaMateria() {

		// declarando variaveis
		var local = $( '.materias');
		var ul = $( '<ul>' );

		var itensLista = listarMateria();

		for(i = 0; i < itensLista.length; i++) {
			var li = $( '<li>' ).text(itensLista[i].nomeMateria).addClass( 'topicos' );
			var p = $( '<p>' ).text(itensLista[i].descricaoMateria);
			var topico = ul.append(li).append(p);
		}

		local.append(topico);

	}

	criarListaMateria();

})(jQuery);