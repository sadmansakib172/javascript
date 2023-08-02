var num1 = prompt("enter the first number: ");
var num2 = prompt("enter the second number: ");
var num3 = prompt("enter the third number: ");
var largest;
if(num1 > num2 && num1 > num3 ){
    largest = num1;
}
else if(num2 > num1 && num2 > num3){
    largest = num2;
}
else{
    largest = num3;
}
console.log("The largest number is " + largest)