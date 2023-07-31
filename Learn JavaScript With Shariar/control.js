//License Problem
let age = prompt("Please Enter Your Age: ");
let state = prompt("Please Enter Your State Name: ");

if(age>=16 && state == "LA"){
	document.getElementById("control_2").innerHTML = "You are Elgible for license";
}else{
	document.getElementById("control_2").innerHTML = "Sorry You are currently not Eligible for license";
}

let month = prompt("Please Enter When You Want Your Vahicle Smart License: ");

if(month == 1){
	document.getElementById("control_3").innerHTML = "You will get your license in January";
}else if(month == 2){
	document.getElementById("control_3").innerHTML = "You will get your license in February";
}else if(month == 3){
	document.getElementById("control_3").innerHTML = "You will get your license in March";
}else if(month == 4){
	document.getElementById("control_3").innerHTML = "You will get your license in April";
}else if(month == 5){
	document.getElementById("control_3").innerHTML = "You will get your license in May";
}else if(month == 6){
	document.getElementById("control_3").innerHTML = "You will get your license in June";
}else if(month == 7){
	document.getElementById("control_3").innerHTML = "You will get your license in July";
}else if(month == 8){
	document.getElementById("control_3").innerHTML = "You will get your license in August";
}else if(month == 9){
	document.getElementById("control_3").innerHTML = "You will get your license in September";
}else if(month == 10){
	document.getElementById("control_3").innerHTML = "You will get your license in October";
}else if(month == 11){
	document.getElementById("control_3").innerHTML = "You will get your license in November";
}else if(month == 12){
	document.getElementById("control_3").innerHTML = "You will get your license in December";
}else if(month<0 && month>12){
	document.getElementById("control_3").innerHTML = "Invalid Input";
}else{
	document.getElementById("control_3").innerHTML = "You Not entered any input";
}


//BMI CALCULATION
var weight = prompt('Enter Your Weight: ');
var height = prompt("Enter Your Height: ");

var bmi = weight / (height*weight);

var bmistatus;

if(bmi<18.5){
	bmistatus = "UnderWeight";
}else if(bmi>=18.5 && bmi<=24.9){
	bmistatus = "Healthy weight";
}else if(bmi>=25 && bmi<=29.9){
	bmistatus = "Overweight";
}else{
	bmistatus = "Overweight";
}

document.getElementById("bmi").innerHTML = "Your BMI STATUS = "+bmistatus;
