// igual o nome do controller
function carros ($scope) {
	// item marcado no input do HTML
	// $scope.model = "fox";
	// $scope.make = "volks";
	// $scope.year = "2013";

	// add um metodo no angular
	$scope.add = function() {
		// se tem um obj local, e se tiver este obj é o itens?
		if(localStorage && localStorage.itens)  {
			var list = JSON.parse(localStorage.itens);
		} else {
			var list = [];
		}
		var data = {
			model	: $scope.model,
			make	: $scope.make,
			year	: $scope.year
		};
		list.push(data);
		// grava no localStorage
		// converter em string para gravar no localStorage: stringify
		localStorage.itens = JSON.stringify(list);
		
		$scope.model = "";
		$scope.make = "";
		$scope.year = "";
		
		$scope.update();
	};
	// func q ira executar ao carregar a pagina, repare nos parenteses no final da func
	$scope.update = function() {
		if(localStorage && localStorage.itens) {
			// pega o localStorage e converte em obj
			$scope.listaCarros = JSON.parse(localStorage.itens);
			// console.dir($scope.listaCarros);
		}
		// console.log("chama ao carregar");
	};

	// excluir item da lista
	$scope.delete = function(id) {
		// console.log("excluir", id)
		var list = JSON.parse(localStorage.itens);
		// remover do array qtas posicoes apos o selecionado
		list.splice(id, 1);
		// para atualizar o localStorage com as informações
		localStorage.itens = JSON.stringify(list)
		$scope.update();
	};

	$scope.edit = function(id) {
		var list = JSON.parse(localStorage.itens);
		var item = list[id];
		$scope.model = item.model;
		$scope.make = item.make;
		$scope.year = item.year;

		// esconder o button "add"
		$scope.hideAdd = true;
		$scope.hideSave = false;

		$scope.id = id;
	};

	$scope.save = function(id) {
		var list = JSON.parse(localStorage.itens);
		list[$scope.id] = {
			model	: $scope.model,
			make	: $scope.make,
			year	: $scope.year
		}
		localStorage.itens = JSON.stringify(list);
		$scope.update();

		$scope.hideSave = true;
		$scope.hideAdd = false;

		$scope.model = "";
		$scope.make = "";
		$scope.year = "";
		// $scope.update();
	};

	$scope.init = function() {
		// esconder o botao save
		$scope.hideSave = true;

		$scope.update();
	}();

}
