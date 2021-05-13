/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

 function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
};

//  let myStuff = [
//      "chair", "desk", "lamp", "keys", "key grinder", "keyboard"
//  ];
//  let myShelf = [
//     "glasses", "coffee machine", "bowls", "water bottle", "window cleaner", "sugar"
//  ];
//  let myDrawer = [
//     "forks", "knives", "spoons", "can opener", "scisors", "ice cream scooper"
//  ];
//  let drawer2 = myStuff.slice(0, 5)
//  let newShelf = myShelf.slice(0, 5)
//  let newStuff = myDrawer.slice(0, 5)
//  console.log(drawer2[2])
//  console.log(newShelf[1])
//  console.log(newStuff[0])
//  console.log(drawer2[0])
//  console.log(newShelf[3]);

let newArray = [];

for (i = 1; i <= 100; i++) {
    newArray.push(i)
}
console.log(newArray);

let sum = 0;
for (let i = 0; i < newArray.length; i++){
    sum += newArray[i]
}
console.log(sum);

let arrayValue = [];
for(
   let i = 0;
    i < 100;
    i++
){
    let firstNum = getRandomNumber();
    arrayValue.push(firstNum);
};
console.log(arrayValue);


let oddArray1 =[];
let evenArray1 = [];

for(let i = 0; i < arrayValue.length; i++){
    let oddArray1 = arrayValue.filter(Number => Number%2); 
    let evenArray1 = arrayValue.filter( Number => !(Number%2) );
    console.log(evenArray1);
    console.log(oddArray1);
    break;

};

function amountTotal(){
    let total = 0;
    for (i = 0; i < oddArray1.length; i++){
         total += oddarray1[i];
    }
    return total;

}


 
