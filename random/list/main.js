// var exibe = function() {
// 	console.log(this.textContent);
// }


// var paragrafo = document.querySelector("#par1")
// paragrafo.addEventListener("click", exibe);

(function() {

	var exibe = function() {
		console.log(this.textContent);
	};

	var ancora = document.querySelector("#feio");
	ancora.addEventListener("click", exibe);

})();