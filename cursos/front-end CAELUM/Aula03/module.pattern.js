/* ============================================================================
	Patterns
============================================================================ */
console.log("== module.js ==");

// CLOUSURE
// variaveis disponiveis para outras funções dentro do mesmo escopo
// (function () {
// 	var	none = "Rodrigo";
// 	var sobrenome= "Florenciano";
// 	function nomeCompleto() {
// 		return nome + " " + sobrenome;
// 	}
// 	console.log(nomeCompleto());
// })();

// Patterns(function () {
// 	var	none = "Rodrigo";
// 	var sobrenome= "Florenciano";
// 	function nomeCompleto() {
// 		return nome + " " + sobrenome;
// 	}
// 	console.log(nomeCompleto());
// })();



var externo = (function() {
	var pessoa = {
		nome 	: "",
		setNome : function(name) {
			this.nome = name;
			return this.nome;
		},
		getNome	: function() {
			return this.nome;
		},
	};
	return pessoa;
})();