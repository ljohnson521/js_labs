function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */
//  let n = 2
//  while (n % 11 != 0){
//           console.log(n, " it's not divisible by 11")
//           n = getRandomNumber();
//  };
// // while (getRandomNumber() % 11 != 0){
// //     console.log("Not divisible by 11")
// // };

// console.log(n)

// Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
//  *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
//  *    times, what is the number you get at the end?

// let i = 0;
// let count = 2500;
// while(count >= 1 && count <= 2500){
//     i = i + 3
//     console.log(i);
//     i = i - 1
//     count--
//     console.log(i)

// };