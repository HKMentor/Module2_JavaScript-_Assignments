// TASK # 1: Legal vs Illegal Variable Names
// // Legal:
// myVariable
// _special
// $price
// myNam122

// // Illegal:
// 123myVariable
// my name
// my-name
// 7myVariable

// TASK # 2: Assignment Operators
var total = 100;
total += 5;
total -= 3;
total *= 2;

console.log("Finaln total:", total); // 204

// TASK # 3: Prompt and Math
var num1 = +prompt("Enter first number:");
var num2 = +prompt("ENter Second number:");
var sum = num1 + num2;
alert("SUm is: " + sum);

// TASK # 4: STring Concatenation
var title = "Javascript Basic";
var author = "Hooria khan";
var year = 2023;

var message = "The Book '" + title + "'by " + author + " was publish in  " + year;
console.log(message);

// TASK # 5: Even or Odd

var number = +prompt("Enter a number:");
if (number % 2 === 0){
    alert("It is an event number.")
}else{
    alert("Its Odd")
}

// TASK # 6: Grade Calculation
var score = +prompt("Enter your score out of 100:");
if (score >= 90) alert("Grade: A");
else if (score >= 80) alert("Grade: B");
else if (score >= 70) alert("Grade: C");
else if (score >= 60) alert("Grade: D");
else alert("Grade: F");

// TASK # 7: MAx of 3 NUmber
var a = +prompt("Enter 1st num:");
var b = +prompt("Enter 2nd num:");
var c = +prompt("Enter 3rd num:");

var max;
if (a >= b && a >= c) max = a;
else if (b >= c) max = b;
else max = c;

alert("Maximum is :" + max);

//  TASK # 8: Sum of Even number 1 to 100

var sum = 0;
for (var i = 1; i <= 100; i++){
    if (i % 3 === 0) sum += i;
}
console.log("Even sum from 1-100 is: " , sum);

// TASK # 9:


// TASK # 10: Logical operators
console.log(undefined && false );
console.log(true && false);
console.log(true && undefined);
console.log('undefined' || 'true');
console.log(null || 'true');





