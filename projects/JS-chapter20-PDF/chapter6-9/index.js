// 1.  Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser:  
var number = 10;

document.write("Result: <br>");
document.write("<br> The value of a is: " + number + "<br><br>")


document.write("the value of ++number is: " + (++number) + "<br>");
document.write("Now the value of number is :" + number + "<br><br>");

document.write("The value of number++ is :" + (number++) + "<br>");
document.write("Now the value of nummber is : " + number + "<br><br>");

document.write("The value of --number is: " + (--number) + "<br>");
document.write("Now the value of number is: " + number + "<br><br>");

document.write("The value of number-- is: " + (number--) + "<br>");
document.write("Now the value of number is: " + number + "<br>");


//  2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
var a = 2, b =1;
var result = --a - --b  + ++b + b--;

document.write("<br> a is : " + a + "<br>");
document.write("b is : " + b + "<br>")


document.write("result is : " + result + "<br>")

 
//   3. Write a program that takes input a name from user & 
// greet the user.

var userNAme = prompt("ENter your name: ");
document.write("<br> Hell0 " + userNAme + "! Welcome  to  our website. <br>")

//  4.  5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default. 
var tableNum = prompt("Enter a number for multiplication table "  + "5");
document.write("<br> Multiplication table of " + tableNum + "<br>");
for(var i =1; i <= 10; i++){
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");

}


//  6. Take
//  a) Take three subjects name from user and store them in 3 
// different variables.
//  b) Total marks for each subject is 100, store it in another 
// variable.
//  c) Take obtained marks for first subject from user and 
// stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
//  e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var obtained1 = +prompt("Enter marks obtained in " + subject1);
var obtained2 = +prompt("Enter marks obtained in " + subject2);
var obtained3 = +prompt("Enter marks obtained in " + subject3);

var totalObtained = obtained1 + obtained2 + obtained3;
var percentage1 = (obtained1 / totalMarks) * 100;
var percentage2 = (obtained2 / totalMarks) * 100;
var percentage3 = (obtained3 / totalMarks) * 100;
var totalPercentage = (totalObtained / 300) * 100;

document.write("<br> <table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>300</th><th>" + totalObtained + "</th><th>" + totalPercentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
