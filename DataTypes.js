const phrase = "30 Days Of JavaScript";
        console.log("===================JavaScript Assignment===================");

console.log("===========Question number 1===========")
        // 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName, lastName, country, city, age, isMarried, year;
firstName = "Betelhem";
lastName = "Sintayehu";
country = "Ethiopia";
city = "Addis Ababa";
age = 24;
isMarried = false; 
year = 2025; 


console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


console.log("===========Question number 2===========")
// 2. Check if type of '10' is equal to 10


if(typeof('10') == typeof(10)){
    console.log(True);
  
}
else{
    console.log(false) ;
}


console.log("===========Question number 3===========")

// 3.  console.log(typeof('10'))

if(parseInt('9.8') == 10){
    console.log(true);
}
else{
    console.log(false);
    // console.log(parseInt('9.8'));
}

console.log("===========Question number 4===========")

/* 4. Boolean value is either true or false.
        i. Write three JavaScript statements which provide truthy value.
*/

// let is_women = true;
let is_Ethiopian = true;
// let is_Frontend_class = true


console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean(is_Ethiopian));

// Write three JavaScript statements which provide falsy value.

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0))


console.log("===========Question number 5===========")
// 5. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// i. 4 > 3 && 10 < 12
// let evalute = 4 >3 && 10<12 ? true:false;

4 > 3 - true;
10 < 12 - true;
4 > 3 && 10 < 12 - true;
console.log("i - ",4 >3 && 10<12);
// ii . 4 > 3 && 10 > 12

4 > 3 - true;
10 > 12 - false;
4 > 3 && 10 > 12 - false;
console.log("ii - ",4 > 3 && 10 > 12);

// iii. 4 > 3 || 10 < 12

4 > 3 - true
10 < 12 - true
4 > 3 || 10 < 12 - true
console.log("iii - ", 4 > 3 || 10 < 12)

// iv. 4 > 3 || 10 > 12
 4 > 3 - true
 10 > 12 - false
 4 > 3 || 10 > 12 - true

 console.log("iv - ", 4 > 3 || 10 > 12)

//  v. !(4 > 3)
4 > 3 - true
!(4 > 3) - false;
console.log("v - ", !(4 > 3))

// vi. !(4 < 3)
4 < 3 - false
!(4 < 3) - true
console.log("vi - ", !(4 < 3))

// vii. !(false)
!(false) - true

console.log("vii - ", !(false))

// viii. !(4 > 3 && 10 < 12)
4 > 3 - true;
10 < 12 - true;
4 > 3 && 10 < 12 - true;
!(4 > 3 && 10 < 12) - false

console.log("viii - ", !(4 > 3 && 10 < 12))

// ix. !(4 > 3 && 10 > 12)
4 > 3 - true;
10 > 12 - false;
4 > 3 && 10 > 12 - false;
!(4 > 3 && 10 > 12) - true

console.log("ix - ", !(4 > 3 && 10 > 12));
 
//x. !(4 === '4')
4 === '4' - false;
!(4==='4') - false;
console.log("x - ",!(4 === '4'))



console.log("===========Question number 6===========");

// 6. Write a script that prompts the user to enter base and write another prompt for height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter the base of triangle");
let height =prompt("Enter the height of triangle");
let area = 0.5 * base * height;
console.log("The area of triangle is " + area );




console.log("===========Question number 7===========");

let yearOfBirth = prompt("when were you born?");
const currentYear = 2025;
let yourAge = currentYear - yearOfBirth;


if (yourAge >= 18 && yearOfBirth <= 2025){
    console.log("You are " + yourAge + ". You are old enough to drive");
}
else if (yourAge <= 18 && yearOfBirth <= 2025){
    let remainingYear = 18 - yourAge;
    console.log("You are " + yourAge + ". You will be allowed to drive after " + remainingYear + " years.");
}
else{
    console.log("You entered Invalid Year of Birth");
}



console.log("===========Question number 8===========");

let challenge;
challenge = "30 Days Of JavaScript";



console.log("===========Question number 9===========");

let toUppercase = "hello world";

console.log(toUppercase.toUpperCase());



console.log("===========Question number 10===========");

let toLowercase = "AFRICA AGILITY";

console.log(toLowercase.toLowerCase());





console.log("===========Question number 11===========");

// Cut (slice) out the first word of the string using slice()

let tranckName = "Frontend Development";
console.log(tranckName.slice(0,8));





console.log("===========Question number 12===========");

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript


console.log(phrase.slice(3,phrase.length))



console.log("===========Question number 13===========");

// Check if the string contains a word Script using includes() method

let strings = "hello";
if(strings.toLowerCase().includes("script")){
    console.log("The string contains a word Script.")
}
else{
    console.log("The string is not contains a word Script.")
}




console.log("===========Question number 14===========");
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript


console.log("The position of the first occurrence of a is " + phrase.indexOf("a"))





console.log("===========Question number 15===========");
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript

console.log("The position of the last occurrence of a is " + phrase.lastIndexOf("a"));



console.log("===========Question number 16===========");
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let postionOfBecause = "You cannot end a sentence with because because because is a conjunction";

console.log("The position of the first occurrence of the word because is " + postionOfBecause.indexOf("because"));





console.log("===========Question number 17===========");

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(phrase.startsWith("30 Days"))




console.log("===========Question number 18===========");
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(phrase.endsWith("JavaScript"))



console.log("===========Question number 19===========");

console.log(Math.floor(Math.random()*101))




console.log("===========Question number 20===========");
// Declare variables named a & b, assign them to numbers. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 20;
let b = 15;

// using if else
if (a > b){
    console.log(a + " is greater than " +b)
}
else{
    console.log(a + " is less than " + b);
}

// ternary operator

let result = a > b ? (a + " is greater than " + b) : (a + " is less than " + b);
console.log(result)





console.log("===========Question number 21===========");
// Declare a variable named scores, Write a code which can give grades to students according to theirs scores and log it to the console:

let scores = 68;

if ( 90 <= scores && scores <= 100){
    console.log("A")
}
else if(70 <= scores && scores <= 89){
    console.log("B");
}
else if(60 <= scores && scores <= 69){
    console.log("C");
}
else if(50 <= scores && scores <= 59){
    console.log("D");
}
else if(0 <= scores && scores <= 49){
    console.log("F");
}

console.log("===========END===========");


