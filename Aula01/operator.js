/* ============================================================================
* Operators
============================================================================ */

// math
console.log("======= VarType.js =========");

// addition

console.log("adição", 1+1); //2
console.log("subtração", 2-1); //1
console.log("multiplicaçao", 2*2); //4
console.log("divisão", 4/2); //2
console.log("módulo", 5%2); //answer return 1

/* ============================================================================
* Incremento e Decremento
============================================================================ */
console.log(" ");
var x = 1;
x = x + 1;
console.log(x);
// or x++
x = x - 1;
console.log(x);
// or x--

x = x + 5;
// or x+=5;
console.log(x);

x*= 2;
x/= 4;

console.log(x++); // value 10 [example]. The value increment add only in the next line
console.log(++x); // value 9

/* ============================================================================
* Incremento e Decremento
============================================================================ */
console.log(" ");

var a = 2, b=3;
console.log("maior que", a > b); // answer false

console.log("menor que", a < b); // anser true

console.log("maior ou igual a", a >= b); // answer false

console.log("menor ou igual a", a <= b); // anser true

console.log("igual a", a == b); // answer false

console.log("diferente de", a != b); // anser true

console.log("igual a", a === b); // answer false

console.log("diferente de", "a" === b); // anser false


/* ============================================================================
* Operator logic
============================================================================ */

console.log(" ");

var idade = 15;
console.log(idade < 18 && idade > 13); // true. Only both sequence are true

console.log(idade < 18 && idade > 21); // false. answer false, one setence are false

console.log(idade < 18 || idade > 21); // true. just one answer for considerated true

console.log(idade < 14 || idade > 16); // false. if two law are false