var n1 = prompt("Check greatest number between 3 numbers\nEnter First number") || 0; // variable to hold first number input from user
var n2 = prompt("Check greatest number between 3 numbers\nEnter Second number") || 0;// variable to hold second number input from user
var n3 = prompt("Check greatest number between 3 numbers\nEnter Third number") || 0;// variable to hold third number input from user

var g = [n1,n2,n3]; // array of input numbers
var temp = g[0]; // variable to hold greatest number
for(i in g){
	if(g[i] > temp){
		temp = g[i]		
	}
}
console.info("The greatest number amongst",n1,",",n2,",",n3," is ",temp); // console output of greatest number

