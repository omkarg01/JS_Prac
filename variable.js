// 1 ------------------------------------------------------------

// const name = "omkar";
// const isCool = true;
// const nothing = undefined;
// const no = null;

// console.log(typeof name);
// console.log(typeof isCool);
// console.log(typeof nothing);
// console.log(typeof no);

// 2 ------------------------------------------------------------
// const first_name = "omkar";
// const last_name = "gujja";
// const age = 22;
// const is_married = false;
// console.log(`${first_name} ${last_name} ${age} ${is_married}`);

// 3 ------------------------------------------------------------
// const first_line = "Hello World";
// console.log(first_line.toUpperCase());

// 4 ------------------------------------------------------------
// const lang = "This Script is for automation it is written in JavaScript";
// console.log(lang.includes("Script"));

// 5 ------------------------------------------------------------
// const intro = "My name is Omkar Gujja";
// console.log(intro.split(" "));

// 6 ------------------------------------------------------------
// const mnc = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(mnc.split(', '));

// 7 ------------------------------------------------------------
// console.log(lang.lastIndexOf("Script"));

// 8 ------------------------------------------------------------
// const sentence = '  You cannot end a sentence with because because because is a conjunction   ';
// console.log(sentence.indexOf('because'));

// 9 ------------------------------------------------------------
// console.log(sentence.trim());

// 10 ------------------------------------------------------------
// const a = "Hello";
// const b = "World";
// const c = "Hello";

// console.log(a === c);
// console.log(a === b);

// 11 ------------------------------------------------------------
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');

// const str1 = "python";
// const str2 = "jargon";
// if (str1.length == str2.length) {
//     console.log("Lengths are equal");
// } else {
//     console.log("lengths are not equal");
// }

// 12 ------------------------------------------------------------
// const date = new Date();
// console.log(date);
// const year = date.getFullYear();
// console.log(year);
// const month = date.getMonth();
// console.log(month);
// const day = date.getDay();
// console.log(day);
// const hours = date.getHours();
// console.log(hours);
// const minutes = date.getMinutes();
// console.log(minutes);
// var now = new Date();
// var bDay = new Date(1979, 1, 1);
// var elapsedT = now - bDay; // in ms
// console.log(elapsedT / 1000);

// 13 ------------------------------------------------------------
// let base = prompt("Enter a base");
// let height = prompt("Enter a height");
// let area = (base * height) / 2;
// console.log(area);

// 14 ------------------------------------------------------------
// const x1 = 2;
// const y1 = 2;
// const x2 = 6;
// const y2 = 10;
// const m = (y2 - y1) / (x2 - x1);
// console.log("Slope", m);

// 15 ------------------------------------------------------------
// y = 2x - 2;
// const slope = 2;
// const yIntercept = -2;

// 16 ------------------------------------------------------------
// const rad = prompt("Enter a radius");
// const area = Math.PI * rad * rad;
// const circumference = 2 * Math.PI * rad;
// console.log("Area", area);
// console.log("Circumference", circumference);

// 17 ------------------------------------------------------------
// const now = new Date();
// console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
// console.log(`${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
// console.log(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

// 18 ------------------------------------------------------------
// const age = prompt("Enter your age");
// if (age >= 18) {
//     console.log("You are eligible to drive");
// } else {
//     console.log("You are not eligible to drive");
// }

// 19 ------------------------------------------------------------
// check is number is even or odd
// const num = prompt("Enter a number");
// if (num % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// 20 ------------------------------------------------------------
// const score = prompt("Enter your score");
// if (score >= 80) {
//     console.log("A");
// } else if (score >= 70 && score < 80) {
//     console.log("B");
// } else if (score >= 60 && score < 70) {
//     console.log("C");
// } else if (score >= 50 && score < 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// 21 ------------------------------------------------------------
// const month = prompt("Enter a month");
// if (month == "september" || month == "october" || month == "november") {
//     console.log("Autumn");
// } else if (month == "december" || month == "january" || month == "february") {
//     console.log("Winter");
// } else if (month == "march" || month == "april" || month == "may") {
//     console.log("Spring");
// } else if (month == "june" || month == "july" || month == "august") {
//     console.log("Summer");
// }

// 22 ------------------------------------------------------------
// const month = prompt("Enter a month");
// if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december") {
//     console.log("31 days");
// } else if (month == "april" || month == "june" || month == "september" || month == "november") {
//     console.log("30 days");
// } else if (month == "february") {
//     console.log("28 days");
// } else {
//     console.log("Invalid month");
// }

// 23 ------------------------------------------------------------
// const month = prompt("Enter a month");
// if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december") {
//     console.log("31 days");
// } else if (month == "april" || month == "june" || month == "september" || month == "november") {
//     console.log("30 days");
// } else if (month == "february") {
//     console.log("29 days");
// }


// 25 ------------------------------------------------------------
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// shoppingCart.unshift("Meat");
// console.log(shoppingCart);
// shoppingCart.push("Sugar");
// console.log(shoppingCart);
// shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
// console.log(shoppingCart);

// 26 ------------------------------------------------------------
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// if (countries.includes("Ethiopia")) {
//     console.log("ETHIOPIA");
// } else {
//     countries.push("Ethiopia");
// }

// 27 ------------------------------------------------------------
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// console.log(ages.sort());
// const max = Math.max(...ages);
// const min = Math.min(...ages);
// console.log("MAX", max);
// console.log("MIN", min);

// const mid = Math.floor(ages.length / 2);
// const median = ages.length % 2 !== 0 ? ages[mid] : (ages[mid - 1] + ages[mid]) / 2;
// console.log("Median", median);

// const sum = ages.reduce((a, b) => a + b, 0);
// const avg = sum / ages.length;
// console.log("Average", avg);

// console.log("Range", max - min);

// console.log(Math.abs((min - avg) - (max - avg)));



// 28 ------------------------------------------------------------
// for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j <= i; j++) {
//         if (i % j === 0 && i !== j) {
//             break;
//         }
//         if (i === j){
//             console.log(i);
//         }
//     }
// }

// 29 ------------------------------------------------------------
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }
// }
// console.log("Sum of even numbers", sumEven);
// console.log("Sum of odd numbers", sumOdd);

// 30 ------------------------------------------------------------
// const randomHex = () => {
//     const hex = "0123456789abcdef";
//     let hash = "#";
//     for (let i = 0; i < 6; i++) {
//         hash += hex[Math.floor(Math.random() * (hex.length - 1))];
//     }
//     return hash;
// }
// console.log(randomHex());

// 31 ------------------------------------------------------------
// const webTechs = require("./webtechs.js");
// console.log(webTechs.sort());

// 32 ------------------------------------------------------------
// const countryList = require("./countries.js");

// const arr1 = countryList.filter((country) => {
//     return country.includes("land");
// });

// console.log(arr1);

// let maxLength = Number.MIN_VALUE;
// let name = "";

// countryList.forEach((country) => {
//     if (country.length > maxLength) {
//         maxLength = country.length;
//         name = country;
//     }
// });

// console.log(name);

// const arr2 = countryList.filter((country) => {
//     return country.length === 4;
// });

// console.log(arr2);

// const arr3 = countryList.filter((country) => {
//     const arr = country.split(" ");
//     return arr.length > 1;
// });

// console.log(arr3);

// countryList.reverse();
// const arr4 = countryList.map((country) => { 
//     return country.toUpperCase();
// });

// console.log(arr4);


// 33 ------------------------------------------------------------
// const bmi = (weight, height) => {
//     return weight / (height * height);
// }
// const weight = prompt("Enter your weight");
// const height = prompt("Enter your height");
// const bmiResult = bmi(weight, height);

// if (bmiResult < 18.5) {
//     console.log("Underweight");
// } else if (bmiResult >= 18.5 && bmiResult < 25) {
//     console.log("Normal");
// } else if (bmiResult >= 25 && bmiResult < 30) {
//     console.log("Overweight");
// } else if (bmiResult >= 30) {
//     console.log("Obese");
// }


// 35 ------------------------------------------------------------
// const isUnique = (arr) => {
//     const set = new Set(arr);
//     return set.size === arr.length;
// }
// console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10]));



