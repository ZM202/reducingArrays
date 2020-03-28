//1) Sum of an array
//Write a function that will take an array of numbers as a parameter 
//and return the sum of those numbers. 

// function sums(numbers){
//     return numbers [0] + numbers [1]; numbers [2];
// }
// console.log(sums([3,4,5]));
//Question>> the answer is showing as 7. It should be 12.

//2) Average of an array
//Write code that takes an array of numbers as a parameter 
//and returns the average of those numbers.


// function average (numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         return numbers [0] + [1] + [2] ;
//     }

//     console.log (sum(3,4,5]/ numbers.length));
// }

//Bonus 1: Refactor your code to re-use a function
//Now, rewrite your average function so it calls your sum function  
//to add the numbers up. This is an example of using a function to reuse code.


//Bonus 2:
//Write a function that takes an array of numbers and returns the largest number.

// const data= [5, 10, 50, 150, 25, 500, 2];
// function maxArr (data){
//     return Math.max.apply(data);
// }
// console.log (Math.max.apply(data));

//Bonus 3:
//Write a function that takes two different arrays as parameters, 
//finds the largest number in each array and returns the sum of those two numbers.

const one = [6,5,1];
const two = [3,10,15];

console.log(Math.max(one));
console.log(Math.max(two));
console.log(Math.max(sum(one, two)));