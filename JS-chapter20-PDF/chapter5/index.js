// 1.  Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.  

var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.writeln("Sum of " +num1 + " and " + num2 + " is: " + sum + "<br>")


//   2. Repeat task1 for subtraction, multiplication, division & 
// modulus.
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;

document.write("<br> Subtraction: " + subtract + "<br>");
document.write("Multiplication: " + multiply + "<br>");
document.write("Division: " + divide + "<br>");
document.write("Modulus: " + modulus + "<br>");



//  3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value  
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 

var a ;
document.write("<br> Value after variable declaration is : " + a + "<br>");

a = 5 ;
document.write("Initialize value : " + a + "<br>");

a++;
document.write("Value after Increamnet is : " + a + "<br>");

a += 7 ;
document.write("Value after vaddition  is : " + a + "<br>");

a-- ;
document.write("Value after decreament is : " + a + "<br>");


var remainder = a % 3;
document.write("The remainder is : " + remainder + "<br>");


//4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("<br> Total cost to buy " + totalTickets + " tickets is movie " + totalCost + " PKR<br>" ) 


//  5. Write a script to display multiplication table of any 
// number in your browser. E.g   

var tableof = 4;
document.write("<br> Table of " + tableof + "<br>");
for (var i = 1; i <= 10; i++){
    document.write(tableof + " x " + i + " = " + (tableof * i ) + "<br><br>")
}

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c.  Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:  
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");


//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges Compute the total cost & show the receipt in your browser.  
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var ShippingCost = 100;

var totalCost = (price1 * qty1) + (price2 * qty2) + ShippingCost;

document.write("<br> price of item 1 is " + price1 + "<br>");
document.write("quntity of item 1 is " + qty1 + "<br>");
document.write("price of item 2 is " + price2 + "<br>");
document.write("quntity of item 2 is " + qty2 + "<br>");
document.write("shipping charges " + ShippingCost + "<br>");
document.write("total cost of your orders " + totalCost + " PKR<br>");



//8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
var totalMarks = 900;
var markObtained = 804;
var percentage = (markObtained / totalMarks) * 100;

document.write("<br> Total Marks: " + totalMarks + "<br>")
document.write("Marks obtained: " + markObtained + "<br>");
document.write("percentage: " + percentage + "%<br>")



//  9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)  

var dollar = 10;
var riyal = 25;
var totalPKR =  (dollar * 275) + (riyal * 28);
document.write("<br> TOTAL currency in PKR is " + totalPKR + "<br>");


 
// 10.  Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var result = ((5 + 5) * 10) /2;
document.write("<br> Result :" + result + "<br>")




//11.  The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
// Output them to the screen like so: “They are either NN or NN 
// years old”. 
var currentYear = 2025;
var birthYear = 2005;

var age1 = currentYear - birthYear;
var age2 = age1 -1;

document.write("<br> They are either " + age1 + " or " + age2 + " years old.<br>")





//12.  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
//  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<br> Radius is a circle : " + radius + "<br>");
document.write("THe circumference  is  : " + circumference + "<br>");
document.write(" the area is  : " + area + "<br>");




//13.  The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.  
var snack = "Lays";
var currentAge = 20;
var maxAge = 80;
var perDay = 2;
var totalSnacks = (maxAge - currentAge) * 365 * perDay;

document.write("<br> Favorite Snack: " + snack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the age of " + maxAge + "<br>");
