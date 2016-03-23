(function(){

	/* Censores de teclado */
	var field = document.querySelector("input"),
		blocked = /[qwx]/i; // regEx
	
	field.addEventListener("keypress", function(event) {
		if (blocked.test(String.fromCharCode(event.charCode))) {
			event.preventDefault();
		}
	});

})();