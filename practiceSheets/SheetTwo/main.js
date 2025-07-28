//Task 1: Loop to print numbers 1 to 10
console.log('\n TAsk 1: Loop to print numbers 1 to 10');

for (var i = 1; i <= 10; i++){
    console.log(i)
}

//Task 2: Print even numbers from 1 to 20
console.log('\n Task 2: Print even numbers from 1 to 20');

for (var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i); //2, 4 ,6,....20
    }
}

//Task 3: Sum of numbers 1 to 100
console.log('\n Task 3: Sum of numbers 1 to 100');

var sum = 0;
for (var i = 1; i <= 100; i++){
    sum += i;
}
console.log("Sum of 1-100; ", sum);


//Task 4: Multiplication Table of 5
console.log('\n Task 4:Multiplication Table of 5');

for (var i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
    
}

//Task 5: Factorial of a Number
console.log('\n TAsk 5: Factorial of a Number');

var num = +prompt("Enter a number:");
var factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);
//Task 6: Array Basics
console.log('\n Task 6: Array Basics');

var fruits = ['apple','banana','mango','orange']
console.log(fruits[0]); //apple
console.log(fruits.length); //4

//Task 7: Push, Pop, Shift, Unshift
console.log('\n Task 7: Push, Pop, Shift, Unshift');

var colors = ['red', 'blue','green'];
colors.push("yellow");  //add at end
colors.pop();  //remove from end
colors.unshift("pink"); //add at start
colors.shift();  //remove from start
console.log(colors);  //final array

//Task 8: Loop through array
console.log('\n Task 8: Loop through array');
var cars = ['Honda', 'Toyota', 'Suzuki'];
for (var i = 0; i < cars.length; i++){
    console.log(cars[i]);
    
}

//Task 9: Check if array includes an item
console.log('\n Task 9: Check if array includes an item');
 var items = ['pen', 'pencil', 'book'];
 if (items.includes('book')){
    console.log("Book is in the list.");
 }else{
    console.log("Not found");
    
 }

 //Task 10: Filter even numbers from array
 console.log(' \n Task 10: Filter even numbers from array');
 var numbers = [1,2,3,4,5,6,7,8,9,10];
 var evenNuber = numbers.filter(num => num % 2 === 0);
 console.log("Even numbers: ", evenNuber); 
 
//  Bonus Task: Using for...of loop
console.log("Bonus Task: Using for...of loop");
var names = ["Ali", "Sara", "Hooria"];
for (var name of names) {
  console.log(name);
}