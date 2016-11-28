(function(){
	/* *********************************************************
		Objeto construtor Students
		Responsável por criar cada aluno da sala
	********************************************************* */
	function Students(name) {
		this.name = name;
		this.homework = [];
		this.quizzes = [];
		this.tests = [];
	}

	/* *********************************************************
		Métodos
	********************************************************* */
	// Adicionar nota de 'homework'
	Students.prototype.addNota_homework = function() {
		for (var i = 0; i < arguments.length; i++) {
			if(isNaN(arguments[i])) { /* Validando nota */
				console.log("'", arguments[i], "'", "não é uma nota válida!");
				break
			} else {
				this.homework.push(arguments[i]);
			}
		}
	};

	// Adicionar nota de 'quizzes'
	Students.prototype.addNota_quizzes = function() {
		for (var i = 0; i < arguments.length; i++) {
			if(isNaN(arguments[i])) { /* Validando nota */
				console.log("'", arguments[i], "'", "não é uma nota válida!");
				break
			} else {
				this.quizzes.push(arguments[i]);
			}
		}
	};

	// Adicionar nota de 'tests'
	Students.prototype.addNota_tests = function() {
		for (var i = 0; i < arguments.length; i++) {
			if(isNaN(arguments[i])) { /* Validando nota */
				console.log("'", arguments[i], "'", "não é uma nota válida!");
				break
			} else {
				this.tests.push(arguments[i]);
			}
		}
	};

	/* ---------------------------------------------------------
		Definindo o nomes dos alunos da sala
	--------------------------------------------------------- */
	var lloyd = new Students("lloyd"),
		alice = new Students("Alice"),
		tyler = new Students("tyler");

	/* ---------------------------------------------------------
		Adicionar notas de 'homework'
		(Nome do aluno + Nome da função + Lista de notas)
	--------------------------------------------------------- */
	lloyd.addNota_homework(76.7, 67.6, 68.4);
	alice.addNota_homework(47.8, 69.8, 72.4);
	tyler.addNota_homework(67.6, 65.5, 73.0);

	/* ---------------------------------------------------------
		Adicionar notas de 'quizzes'
		(Nome do aluno + Nome da função + Lista de notas)
	--------------------------------------------------------- */
	lloyd.addNota_quizzes(83.4, 68.4, 96.8);
	alice.addNota_quizzes(96.8, 72.8, 73.5);
	tyler.addNota_quizzes(88.2, 79.7, 83.8);

	/* ---------------------------------------------------------
		Adicionar notas de 'tests'
		(Nome do aluno + Nome da função + Lista de notas)
	--------------------------------------------------------- */
	lloyd.addNota_tests(68.7, 79.9, 86.2);
	alice.addNota_tests(85.7, 96.1, 99.8);
	tyler.addNota_tests(93.4, 76.3, 67.2);


	// Juntando toda os alunos...
	var classe = new Array();
	classe.push(lloyd, alice, tyler)

	/* ---------------------------------------------------------
		Calculando a média de notas
	--------------------------------------------------------- */
	function average(numbers) {
		var total = 0;
		for(var i = 0; i < numbers.length; i++) {
			total += numbers[i];
		}
		return parseFloat( (total / numbers.length).toFixed(2) ); 
	}

	/* ---------------------------------------------------------
		Calculando a média GERAL de notas
		Peso: homework = 10% | quizzes = 30% | tests = 60%
	--------------------------------------------------------- */
	function getAverage(student) {
		var homework = average(student.homework),
			quizzes = average(student.quizzes),
			tests = average(student.tests);

		return parseFloat( (homework * 0.1 + quizzes * 0.3 + tests * 0.6).toFixed(2) );
	}

	/* ---------------------------------------------------------
		Definindo o conceito final
		A = 100 -  90,1
		B = 90  -  80,1
		C = 80  -  60,1
		D = 60  -  20,1
		E = 20  -  0
	--------------------------------------------------------- */
	function getLetterAverage(nota) {
		var conceito;

		if(nota > 90.1) {
			conceito = "A";
		} else if(nota > 80.1) {
			conceito = "B";
		} else if(nota > 60.1) {
			conceito = "C";
		} else if(nota > 20.1) {
			conceito = "D";
		} else {
			conceito = "E";
		}
		return conceito;
	}

	/* ---------------------------------------------------------
		Calculando GERAL da sala de aula
	--------------------------------------------------------- */
	function getClassAverage(classRoom) { // pegando a var classe que tem todos os alunos
		var resultados = [];
		for(var student in classRoom) {
			resultados.push( getAverage(classRoom[student]) );
		}
		return average(resultados);
	}

	console.log(
		"Média indivual:", "\n",
		"Lloyod:", getAverage(lloyd), "Conceito:", getLetterAverage(getAverage(lloyd)), "\n",
		"Alice:", getAverage(alice), "Conceito:", getLetterAverage(getAverage(alice)), "\n",
		"Tyler:", getAverage(tyler), "Conceito:", getLetterAverage(getAverage(tyler))
		)

	console.log( "Média da classe:", "\n", getClassAverage(classe) );

	// console.log(classe);
})();