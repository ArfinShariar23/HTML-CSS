var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var sum,sub,mul,div,mod,exp;

sum = num1+num2;
sub = num1-num2;
mul = num1*num2;
div = num1/num2;
mod = num1%num2;
exp = num1**num2;

document.write('<h1>Sum = '+sum+"</h1><br>");
document.write('Sub = '+sub+"<br>");
document.write('Mul = '+mul+"<br>");
document.write('Div = '+div+"<br>");
document.write('Mod = '+mod+"<br>");
document.write('Exp = '+exp+"<br>");
