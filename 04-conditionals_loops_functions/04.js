/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:
let celsius = 0
let farhenheit = 0
let kelvin = 0
function KtoC(kelvin, celsius){
    celsius = (273.15 - kelvin) 
    return (`${kelvin} degree celsius is equal to ${celsius} degree kelvin.`)
};
function CtoK(celsius, kelvin){
    kelvin = (celsius + 273.15)
    return (`${celsius} degree kelvin is equal to ${kelvin} degree celsius.`)
};
function FtoK(farhenheit, kelvin){
   kelvin = ((farhenheit-273.15)*1.8)+32
   return (`${farhenheit} degree kelvin is equal to ${kelvin} degree fahrenheit.`)
};
function KtoF(kelvin, farhenheit){
    farhenheit = (((kelvin-32)/1.8)+273.15)
    return (`${kelvin} degree farhenheit is equal to ${farhenheit} degree kelvin.`)
};

function pythagoras(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
};

let cm = 0
let inch = 0
let miles = 0
let kilometers = 0
function inchToCm (inch, cm){
    cm = (inch * 2.54)
    return (cm); 
};
function cmToInch(cm, inch){
    inch = (cm / 2.54)
    return (inch);
};
function mToKm(miles, kilometers){
    kilometers = (miles * 1.609)
    return (kilometers);
};
function kmToM(kilometers, miles){
    miles = (kilometers / 1.609)
    return (miles);
};





// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(mToKm(100));
console.log(kmToM(25));

console.log(inchToCm(10));
console.log(cmToInch(425));