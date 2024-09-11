// 
let studentName = "Alice";
let studentAge = 15;
let studentGrade = 10;
isPresent = true;

console.log("The student's name is ", studentName);
console.log("The student's age is ", studentAge);
console.log("The student's grade ", studentGrade);
console.log("The student is present today ", isPresent);

let x = 3;
let y = 4;

let num1 = x + y;
let num2 = x - y;
let num3 = x * y;
let num4 = x / x;
console.log("sum: ", num1);
console.log("difference: ", num2);
console.log("product: ", num3);
console.log("quitient: ", num4);

num1 += 1;
num2 -= 1;
 
console.log("Updated num1: ", num1);
console.log("Updated num2 " , num2);

console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

let isPositiveNum1 = num1 > 0;
let isPositiveNum2 = num2 > 0;
let isEvenNum1 = num1 % 2 === 0;
let isEvenNun2 = num2 % 2 === 0;

let bothPositive = isPositiveNum1  && isPositiveNum2;
console.log("are both numbers positive? ", bothPositive);
let bothEven = isEvenNum1 || isEvenNun2;
console.log("is at least one number even? ", bothEven);
