/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

 let a = 4675
 let b = 6783
 let c = 3405
 let luckyNumber = 7

 sum = a + b + c + luckyNumber;
 
 subSmallest = (luckyNumber - c) - b;
 
 newMulti = a * b * c * luckyNumber;
 
 diffBetweenNumbers = a - c - luckyNumber;
 divByLargest = b / diffBetweenNumbers;
 
 let numModulo1 = (a % luckyNumber);
 let numModulo2 = (b % luckyNumber);
 let numModulo3 = (c % luckyNumber);

console.log(sum);
console.log(subSmallest);
console.log(newMulti);
console.log(divByLargest);
console.log(numModulo1);
console.log(numModulo2);
console.log(numModulo3);
