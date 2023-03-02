let farenheight = prompt("Enter Temperature in Farenheight in Scale: ");

farenheight = parseFloat(farenheight,10);

let celcius;
celcius = (5*(farenheight-32))/9;

document.write("Temperature in Celcius Scale: "+celcius+" <sup>o</sup>C<br>");

let cel2 = parseFloat(prompt("Enter Temperature in Celcius Scale: "));
let far2;
far2 =(9*cel2)+32/5;
document.write("Temperature in Farenheight Scale: "+far2+"<sup>o</sup>F")
