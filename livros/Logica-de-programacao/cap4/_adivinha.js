(function () {

	/*
		Apenas uma rotina melhorada... 
		A ideia poderia ser mostrar as mensagens em um display fixo
		mas aqui foi apenas uma evoulção progressiva de um pensamento

	*/

	function mostra (frase) {
		var p = document.createElement('p');
		var p_txt = document.createTextNode( frase );
		p.appendChild( p_txt );
		document.body.appendChild( p );
	};

	/////////////////////////////////////////////////////////////////
	
	function visibleAgain () {
		document.getElementById('again').style.display = "block";
	}

	var interval = 10,
		numbTentativa = 0,
		totalTentativa = 3,
		button = document.getElementById('sorte');
	
	function sorteia (range) {
		return Math.round( Math.random() * range );
	}

	var d = document.getElementById('display');
		d.innerHTML = "Você tem <strong>" + totalTentativa + "</strong> tentativas.";

	function display_txt (numb) {
		d.innerHTML = "Você tem <strong>" + numb + "</strong> tentativas.";
	}

	function dialog () {
		var numbRandom = sorteia(interval);
		var chute = prompt("Pensa em um número entre 0 - " + interval);

		if (isNaN(chute)) {
			mostra( "Só números são válidos!" );
			return false;
		}

		if (chute == numbRandom) {
			mostra( "Uau! Você acertou, eu pensei no " + numbRandom + "!!" );
			button.disabled = true;
			visibleAgain();
		} else {
			mostra( "Você errou! Eu tinha pensado no " + numbRandom + "!!" )
			totalTentativa --;
			display_txt( totalTentativa );
			if (totalTentativa == 1) {
				d.innerHTML = "Última tentativa, concentra-se!";
			}
			if (totalTentativa == 0) {
				button.disabled = true;
				d.innerHTML = "Você perdeu! :[";
				visibleAgain();
			}
		}
	}

	// event: click
	button.addEventListener( 'click', dialog );

	document.getElementById('again').addEventListener( 'click', function (ev) {
		window.location.reload();
	})

	/////////////////////////////////////////////////////////////////

})();