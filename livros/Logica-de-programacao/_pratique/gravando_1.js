(function() {
	
	// Obj vazio
	var obj = {};

	// capturando value dos inputs
	var n = document.getElementById('nome'),
		t = document.getElementById('tel'),
		em = document.getElementById('email');

	function grava() {
		obj.nome = n.value;
		obj.telefone = t.value;
		obj.email = em.value;
		console.table(obj);
	}

	// click do btn
	document.getElementById('envia').addEventListener( "click", grava );
})();