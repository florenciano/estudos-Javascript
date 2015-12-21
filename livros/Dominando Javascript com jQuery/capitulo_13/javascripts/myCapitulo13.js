$(function() {
	function obrigatorio (text) {
		return text.trim() !== "";
	}
	$( "#cpf" ).validador();
	$( "#obrigatorio" ).validador({function : obrigatorio});
});