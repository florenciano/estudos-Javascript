/* ============================================================================
* Padroes literal
============================================================================ */
// padrao literal
console.log("=======")

var escola = "caelum";
console.log("school", school, typeof school, escola.constructor);

// padrao construtor
var school = new String("caelum");
console.log("school", school, typeof school, school.constructor);

// replacing value of the variable literal and/or constructor. They're shared both methods and properties.
console.log(escola.replace("lum","tano"),school.replace("lum","tano"));

var altura = 1.90; //number literal
var height = new Number(1.90); //number constructor

// console.log(altura.constructor, height.constructor);

var bom = true;
var good = new Boolean(true);
console.log(bom.constructor, good.constructor);