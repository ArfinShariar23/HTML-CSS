var base = prompt("Enter Base: ");
var height = prompt("Enter Height: ");
var length = prompt("Enter Length: ");
var width = prompt("Enter Width: ");
var radius = prompt('Enter Redius: ');
var pi = prompt("Enter Value of PI: ");


base = parseFloat(base,10);
height = parseFloat(height,10);
length = parseFloat(length,10);
width = parseFloat(width,10);
radius = parseFloat(radius,10);
pi = parseFloat(pi,10);

var triangle,square,ractangle,circle,paralogram,trapezoid,ellipse;

//Area of Triangle
triangle =(1/2)*base*height;
document.write("Area of a Triangle: "+triangle+"<br>");
//Area of Circle
circle = pi*radius*radius;
document.write("Area of a Circle: "+circle+"<br>");
//Area of square
square = base*base;
document.write('Area of a Square: '+square+"<br>");
//Area of ractangle
ractangle = length*width;
document.write('Area of a Reactangle:'+ractangle+"<br>");
//Area of Paralogram
paralogram = base*height;
document.write("Area of a Paralogram: "+paralogram+"<br>");
//Area of trapezoid
trapezoid = (1/2)*(length+base)*height;
document.write("Area of a Trapezoid: "+trapezoid+"<br>");
//Area of a ellipse
ellipse = pi*length*width;
document.write("Area of a Ellipse: "+ellipse+"<br>");
