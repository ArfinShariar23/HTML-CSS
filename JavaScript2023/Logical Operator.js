let num1 = 20;
let num2 = 25;

console.log(num1>num2); //false
console.log(num1>=num2); //false
console.log(20>=20); //true
console.log(20>20); //false
console.log(20<20); //false
console.log(20<=20); //true
console.log(20==20); //true
console.log(20=='20'); //true
console.log(20==='20'); //false
console.log(20!=15); //true

//logical operator
let num3 = 50;
let num4 = 20;
let num5 = 40;

//checking which number is great
//using AND &&
console.log(num3>num4 && num3>num5); //true

//logical OR || 
console.log(num3>num4 || num3<num5); //true

//NOT operator
console.log(!(25>26)) //true
