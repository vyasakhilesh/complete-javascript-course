
//let js = 'amazing';
// if (js === 'amazing') alert('JS is funn');
// console.log(40 + 20 - 10);
// console.log("Akhilesh");
// comment in JS
// console.log(23);
/* block comment */
// Variables type
let firstName = "Akhilesh";
let lastName = "Vyas";
let age = 23;
let isAlive = true
console.log(firstName, lastName, age, isAlive);
console.log(typeof (isAlive), typeof age, typeof firstName);

firstName = "Vitthal"

console.log(firstName, lastName, age, isAlive);

let year;
console.log(year);
console.log(typeof year);
console.log(typeof null); // null is not object

const now = 2021;
const joinYear = now - 1991;
// birthYear = 1992; //error

var job = 'programmer';
job = 'teacher';
console.log(job, joinYear);

// Operators
console.log("############# Operators #############")
console.log(10 / 2, 10 * 2, 10 ** 2);
console.log(firstName + " " + lastName);

console.log(firstName === lastName, now === 2021, now > 2022);

// operator precedence
console.log("################## operator precedence");

let x, y;
x = y = 20 - 10;
console.log(x, y);

let height_m = 1.69;
let weight_m = 78;
let height_j = 1.95;
let weight_j = 92;

let bmi_m = weight_m / height_m ** 2;
let bmi_j = weight_j / height_j ** 2;
console.log(bmi_m, bmi_j);
console.log(bmi_m > bmi_j);

// string and template literals
console.log("################# string and template literals");
console.log(`${firstName} ${lastName} is a ${job}`);
console.log('string with \n\
multiple \n\
lines');
console.log(`string with
multiple
lines`)

// if-else statement
console.log(`################# if-else statement`);
if (height_m > height_j) {
    console.log("Height of Mark is greater than John")
} else {
    console.log("Height of Mark is less than John")
}
if (bmi_m > bmi_j) {
    console.log("BMI of Mark is greater than John")
}
else if (bmi_m === bmi_j) {
    console.log("BMI of Mark is equal to John")
}
else {
    console.log("BMI of Mark is less than John")
}

// type conversion and coercion
let thisYearStr = '2021'
console.log("#################### type conversion and coercion")
console.log(thisYearStr + 2)
console.log(Number(thisYearStr) + 2);
console.log(Number('Vyas')); // can not convert
console.log(typeof NaN);
console.log("My age is " + 23); // automatic type conversion
console.log('20' + 1 - 1)
console.log('20' + '2' + '3' - '3' + 2 + '1');

// Truthy and flasy values
console.log("################## Truthy and falsy values")
// falsy values 0, '', undefined, null , NaN
console.log(Boolean(0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));
console.log(Boolean('Akhilesh'), Boolean({}))

// equal operators
console.log("################# Equal operators");
console.log("Lose comparison '18'== 18 , True")
console.log("Strict comparison '18'=== 18, False")
console.log("Lose comparison '18'!= 18 , False")
console.log("Strict comparison '18'!== 18, True")
console.log('18' == 18, '18' === 18, '18' != 18, '18' !== 18)
// prompt
// console.log("################# prompt");
// const favourite = prompt("What is your favoourite number ?")
// console.log(favourite, typeof favourite);

// Boolean Logic
console.log("################# Boolean Logic");
console.log("Boolean logic && || !")

// Bonus 1
let t1_1 = 97;
let t1_2 = 112;
let t1_3 = 80;
let avg_1 = (t1_1 + t1_2 + t1_3) / 3

let t2_1 = 109;
let t2_2 = 95;
let t2_3 = 50;
let avg_2 = (t2_1 + t2_2 + t2_3) / 3

console.log(avg_1, avg_2)

if (avg_1 > avg_2 && avg_1 >= 100) {
    console.log("T1 wins")
}
else if (avg_1 < avg_2 && avg_2 >= 100) {
    console.log("T2 wins")
}
else if (avg_1 === avg_2 && avg_2 > 100 && avg_1 > 100) {
    console.log('Draw')
}
else {
    console.log("No winner")
}

// Switch-Statement
console.log("################### Switch Statement")
let day = 'tuesday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log("it's monday");
        break;
    case 'tuesday':
        console.log("it's tuesday");
    case 'wednesday':
        console.log("it's wednesday");
        break;
    default:
        console.log("it's dafault");
}

// statement and expresssions
console.log("############### statements and expresssions")

//conditional operator (Ternary)
console.log("############### conditional operator (Ternary)")

let age_ = 18;
let drink = age_ >= 18 ? 'wine' : 'water';
console.log(`your age is ${age_}, you may drink ${drink}`);

let bill = 275;
let tip = bill > 50 && bill < 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`bill ${bill}, tip ${tip}, total ${bill + tip}`)







