function range(start, end, step) {
	if(step == null || step == undefined) {
		step = 1;
	}
    var myArray = [];
	if( step > 0) {
	    for(var i = start; i <= end; i += step ) {
	    	myArray.push(i);
	    }
	} else {
		for(var i = start; i >= end; i += step ) {
	    	myArray.push(i);
	    }
	}
    return myArray;
}

function sum(array) {
	var soma = 0;
	for(var i = 0; i < array.length; i++) {
		soma += array[i];
	}
  	return soma;
}

console.log( range(6,39,3) );
console.log( sum(range(2,12)) );
