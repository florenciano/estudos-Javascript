(function(){

	/* Censores de teclado */
	var field = document.querySelector("input"),
		blocked = /[qwx]/ig;
	field.addEventListener("keyup", function(event) {
		// var caract = event.target.charCode
		console.log(event.charCode, field.value);
	});

})();