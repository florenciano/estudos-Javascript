// wrapper
$(document).ready(function() {
	setTimeout(function() {
		console.log(
			// saind do jQuery ficando no javascript
			// $("table")[0]
			// ficando no jQuery
			$("table").children().children().eq(0).children().eq(0)
			// children(): el filho
			// eq(0): indice array daquele el
			// next(): proximo el
			// prev(): anterior el
			// parent(): pai
			// closest(): volta a um elemento especifico







		);
	}, 200);
});