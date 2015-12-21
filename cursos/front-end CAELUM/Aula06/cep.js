// wrapper garantido q tudo q vc fizer vai acontecer qdo caregar o jQuery
$(document).ready(function() {
	// pega o campo cep; on delega evento ao elemento selecionado; chama um func de callback
	$("#cep").on("keydown", function(e){
		if( !((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode == 8) || (e.keyCode == 9)) ) {
			e.preventDefault();
		}

	}).on("blur", function(){
		// aponta para o objeto q disparou o evento, neste caso o input; validando 8 digitos
		if($(this).val().length !== 8) {
			$(this).addClass("error");
		} else {
			$(this).removeClass("error");
			
			/* aqui chama o ajax */
			// passando um obj como {parametro}
			$.ajax({
				url: "http://cep.correiocontrol.com.br/"+$(this).val()+".json",
				dataType: "json",
				success: function(j) {
					// console.log("deu certo!!!!!!!!!!!")
					// console.dir(j);
					// console.log(j.logradouro);
					$.each(j, function(index, value) {
						// console.log(index, value);
						$("#" + index)
							// desabilitada todos os demais campos
							.attr("disabled", true)
							.val(value);
							// habilita o campo do cep
							$("#cep").attr("disabled", false).focus();
					});
				},
				error: function() {
					// console.log("deu errado!!!!!!!!!!!")
				}

			});

		}
		// foca no input ao carregar a pagina
	}).focus();
})