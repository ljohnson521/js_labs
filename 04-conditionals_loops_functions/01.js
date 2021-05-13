function getRandomNumber(){
    return Math.floor((Math.random() * 10) + 1);
}

/**
 * The function above is a random number generator. It generates a number
 * between 1 and 10. Don't worry about how it works, its just a tool to practice
 * with right now. Do not modify the function, only modify anything below this
 * comment block.
 *
 * The variable defined below uses the random number generator to generate a
 * random number between 1 and 20.
 *
 * With the HTML file from this folder (test.html) loaded in Chrome and the
 * console open, refresh the browser (F5) various times and look at the console.
 * Notice how the number is different each time!
 *
 * Once you have seen how it works, you can delete the code below.
 *
 * Then do the following
 *
 *      1. Create 3 variables, one with a random number between 1 and 100
 *         called "age", one initialized to 0 called "price" and one
 *         with an empty string ("") called "fare".
 *      2. Write some conditional statements to simulate bus ticket
 *         cost. Something like: Under 5s go free, under 13s pay
 *         child fare, under 21s pay teenager fare, under 30s pay young
 *         person fare, under 65s pay adult fare, and over 65s pay
 *         pensioner fare.
 *      3. Within each condition, assign the price to be paid and the name
 *         of the fare to the appropriate variables.
 *      4. Log a message to the console with a message like: "You pay the
 *         young person fare, that will be 5 dollars, please."
 *
 * Once you have this working, see if you can implement a way to give each
 * passenger a 1 in 10 chance of going free, regardless of age, and modify the
 * message with something like "Lucky you! Today you get to ride free of
 * charge." For bonus points, if the person would ride free anyway, make sure it
 * doesn't log the "Lucky you!" message!
 *
 */

let age = getRandomNumber() * getRandomNumber();
let price = 0;
let fare = "";

if (age <= 5){
    price = 0;
    fare = "Ages 5 years old and younger ride free";
    console.log(fare);
} else if (age > 5 && age <= 13){
    price = 10;
    fare = "You pay the child fare, that will be 10 dollars, please.";
    console.log(fare);
} else if (age > 13 && age <= 21){
    price = 15;
    fare = "You pay the teenager fare, that will be 15 dollars, please.";
    console.log(fare);
} else if (age > 21 && age <= 30){
    price = 20;
    fare = "You pay the young adult fare, that will be 20 dollars, please.";
    console.log(fare);
} else if (age > 30 && age <= 65){
    price = 25;
    fare = "You pay the adult fare, that will be 25 dollars, please.";
    console.log(fare);
} else {
    price = 17;
    fare = "You pay the pensioner fare, that will be 17 dollars, please.";
    console.log(fare);
};
