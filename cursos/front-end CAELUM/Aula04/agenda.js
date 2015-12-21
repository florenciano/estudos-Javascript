// AGENDA APP
// colocamos dentro dos parenteses da funcao para isolar o codigo
(function() {
	var AppAgenda = {};

	// propriedades
	AppAgenda.ui = {};
	AppAgenda.ui.campoEmail = document.getElementById('email');
	AppAgenda.ui.botaoAdd = document.getElementById('add');
	AppAgenda.ui.lista = document.getElementById('lista');

	// métodos
	AppAgenda.actions = {};
	AppAgenda.actions.validar = function(email) {
		// console.log(email);
		// regexp para validar o email digitado na bagaça
		var patternEmail = /^(\w+\.?)+\@(\w+\.?)+$/;
		if(patternEmail.test(email)) {
			AppAgenda.ui.campoEmail.className="";
			AppAgenda.actions.persistir(email);
		} else {
			// mudar a cor do imput e poe o foco nele
			AppAgenda.ui.campoEmail.className="error";
			AppAgenda.ui.campoEmail.focus();
		}
	};
	AppAgenda.actions.persistir = function(email) {
		// console.log(email);
		// localStorage
		// setItem para definir um nome
		// getItem para recuperar este nome
		// criar um array para armazenar no localStorage

		// criar a lista locaStorage
		if(localStorage && localStorage.getItem("list") == null) {
			// console.log("primeira vez");
			// criando um array 
			var newList = [];
			newList.push({mail: email});
			// converter numa string
			localStorage.setItem("list", JSON.stringify(newList));
		} else {
			// converter a string em objeto = para gerar um array
			var list = JSON.parse(localStorage.getItem("list"));
			list.push({mail: email});
			localStorage.setItem("list", JSON.stringify(list));
		}
		AppAgenda.ui.campoEmail.value="";
		AppAgenda.actions.atualizar();
	};
	AppAgenda.actions.atualizar = function() {
		// console.log("atualizar")
		if(localStorage && localStorage.getItem("list")) {
			// pegar o valor do array para manipulação
			var list = JSON.parse(localStorage.getItem("list"));
			// console.log(list);
			// contar quantos itens tem no array
			AppAgenda.ui.lista.innerHTML = "";
			for(item in list) {
				var itemList = "<li>" + list[item].mail + "</li>";
				// console.log(list[item].mail);
				AppAgenda.ui.lista.innerHTML += itemList;
			}
		}
	};
	AppAgenda.actions.inicializar = function() {
		// para cada vez que o browser atualizar a lista continuar ali
		AppAgenda.actions.atualizar();
		// botao
		AppAgenda.ui.botaoAdd.addEventListener("click",function(e) {
			// prevenir o comportamento padrao, no caso clicar
			// para evitar o submit do form ah garoto!!!
			e.preventDefault();
			AppAgenda.actions.validar(AppAgenda.ui.campoEmail.value);
			// console log para testar o funcionamento da função
			// console.log(AppAgenda.ui.campoEmail.value);
		});
		/*
		// campo
		AppAgenda.ui.campoEmail.addEventListener("blur",function(){
			// this usado pq ja estou no campo do email
			// console log para testar o funcionamento da função
			console.log(this.value);
			AppAgenda.actions.validar(this.value);
		});
		*/
	}();
})();