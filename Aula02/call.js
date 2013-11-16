/* ============================================================================
* Call
============================================================================ */
console.log("==> call.js");

// // definition: 
// function getFullName () {
// 	//return arguments.join(" "); line deu pau
// 	return [].join.call(arguments, " "); // arguments é contexto do call que é chamado pelo join que é usado apenas para Array
// }
// console.log(getFullName("Rodrigo", "Florenciano", "da Silva"));


 var nameFamily = function() {
 	return [].join.call(arguments, " & ");
 }
console.log(nameFamily("Rodrigo", "Camila", "Raquel"));
