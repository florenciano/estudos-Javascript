(function () {

	var initCopa = 1930;
	var deadDay = 2120;

	while (initCopa <= deadDay) {
		
		if (initCopa == 1942 || initCopa == 1946) {
			console.log('Os anos de ' + 1942 + ' e ' + 1946 + ' não tiveram copa devido a 2º guerra mundial' );
				initCopa = (1946 + 4);
		}

		console.log(initCopa + " este ano tem copa!");
		initCopa += 4;
	}

})();