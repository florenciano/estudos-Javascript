/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	criando mocks ou seja prototipos para simular o comportamento de um obj
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$(document).ready(function() {
	// chamar o ajax que sempre recebe um obj {}
	$.ajax({
		// json.p para pegar url de porta nao publica "gambeta"
		url: "http://www.mocky.io/v2/52704e45f7350062001ac547?callback=?",
		dataType: "jsonp",

		beforeSend : function() {
			$("#loading").show();
			console.log("antes de carregar o ajax");
		},

		success : function(j) {
			// passando pelos dados
			$.each(j, function(index, value) {
				// console.log(index, value);
				// linha = TR
				var linha = $(".resultado").clone();
				// find = TD | end volta para a TR
				linha.find(".id").html(value.id).end()
					.find(".nome").html(value.nome).end()
					.find(".email").html(value.email).end()
					.find(".telefone").html(value.telefone).end()
					.find(".pais").html(value.pais).end();
				linha.removeClass("resultado").appendTo("tbody"); //assim ele duplica 100 vezes o mesmo item
				$("#loading").hide();

			});

			// console.dir(j); //carrega o arraty do objeto
			// console.log("sucesso em carregar o ajax");
		},

		error : function() {
			console.log("erro");
		}
	});
});
