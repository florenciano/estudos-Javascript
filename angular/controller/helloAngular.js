/*
	TODAS AS REGRAS DE NEGÓCIO FICAM AQUI...w
*/

// Tratando os obj
function SimpleController ($scope) {
	$scope.user = {
		nome	: "Rodrigo",
		idade	: 33
	}
}

// obj manuseado pela interação do usuário "click"
function CountController($scope) {
	$scope.counter = 0;

	$scope.addOne = function() {
		$scope.counter++;
	}
}

// montando conteudo dinamico
function LoopController($scope) {
	$scope.frutas = [ 'laranja', 'maça', 'banana', 'pêssego' ];
}

// A forma mais simples de uso do $http está descrito no exemplo a seguir:
/* $http
	({method:'GET', url:'/someUrl'})
	.success(function(data){
		// body...
}); */

// O método get pode ser generalizado para:
function listarFrutas($scope, $http) {
	$http
	.get('http://localhost/estudos-js/angular/frutas.json')
	.success(function(data){
		// aqui vai o nome do item do obj JSON em ambos argumentos
		$scope.frutas = data.frutas;
	})
	.error(function(data){
		console.table("error");
	});
}





