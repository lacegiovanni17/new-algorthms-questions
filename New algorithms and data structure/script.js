const addition = (a, b) => {
  return a + b;
};
// practice using the indexOf method of an array

const name = ["Ola", "Ade", "Adeleye"];

const findTarget = (arr, target) => {
  return arr.indexOf(target) || -1;
};

// Using the sort() array method
// find Second larget element in an array
// - sort the array
// - return element in index 2 of the sorted array

const arr = ["Elias", "Elizabeth", "Oyin", "samuel"];
// Find target in an array
const arrNum = [3, 5, 2, 6, 7, 8, 9, 1, 4];
const secondLargest = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[sorted.length - 2];
};

// Given an array that contains strings and number, return all the elements that are number

// I want to take the advantage of the filter function of an array to filter the element and return only element that are type "number"

const strAndNum = ["Elias", 4, "Ernes", 5, "Marvelous"];
const filterArray = (arr) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      result.push(arr[i]);
    }
  }
  return result;
};
const filterArray2 = (arr) => arr.filter((item) => typeof item === "number");

// add elements in an array
// the reduce() method helps us to add elements in an array
const sumArr = (arr) => arr.reduce((a, b) => a + b);

const numArray = [1, 2, 3, 4, 5, 6, 7];

// the slice method of array
const sliceArr = () => numArray.slice(0, 4);
// console.log(sliceArr(numArray))

// using findIndex
const ages = [3, 10, 18, 20];

// console.log(ages.findIndex(checkAge))
// hoisting
function checkAge(age) {
  return age > 18;
}

// using the every() method of an array

function checkPositive(arr) {
  return arr.every((val) => val > 10);
}

function checkSome(arr) {
  return arr.some((val) => val > 90);
}

const checkP = [3, 10, 18, 20];
// console.log(checkSome(checkP))

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
let input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = (data) => {
  return data.map((member) => {
    if (member[0] > 54 && member[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
};

// Array destructuring: ES6 concept
const openOrSenior2 = (data) => {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
};

// console.log(openOrSenior2(input))

const teneryOp = () => {
  let num = 4;
  let greet = num > 2 ? "say hi" : "say nay";
  return greet;
};
// console.log(teneryOp())

// Challenge 1
// Implement the function sumMix(arr) that given an array of integers as strings
// and numbers, returns the sum of the array values as if all were numbers.
let intStr = ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"];

function sumMix(arr) {
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
}
console.log(sumMix(intStr));

// Sum two smallestNumbers
let numArr = [6, 7, 5, 4, 1];
// sort the array [1,4,5,6,7]
// Add element in the first two index position

const sumTwoSmallestNums = (arr) => {
  let sortArr = arr.sort((a, b) => a - b);
  return sortArr[0] + sortArr[1];
};
// console.log(sumTwoSmallestNums(numArr))

// find the primefactor of a number
// 12= 2*2*3
// 24 = 2*2*2*3
// modulus 12%2=0
12;
6;
3;

let num = 2345;
function primeFactors(num) {
  let result = [];
  let number = num;
  let divider = 2;
  while (number > 1) {
    if (number % divider === 0) {
      result.push(divider);
      number = number / divider;
    } else {
      divider++;
    }
  }
  let joinArray = result.join(" * ");
  return count;
}

// Dubstep
// https://www.codewars.com/kata/551dc350bf4e526099000ae5
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words),
// and then the body glues together all the words, including "WUB", in one string and plays the song at the club.
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
// but cant transform into WUBWUBIAMWUBX

// Recently Johnny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Johnny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
// Examples
let song = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";
//   // =>  WE ARE THE CHAMPIONS MY FRIEND
let song2 = "WUBOLOLOLOWUBBUGAWUBE";
let song3 = "WUbLEtwUBMEWUBSeEWUBYOUWUB";

function songDecoder(song) {
  let toUpper = song.toUpperCase();
  return toUpper.replace(/WUB/g, " ").trim();
}

const letters = "abcdefghijklmnopqrstuvwxyz";
// console.log(letters.indexOf("a")+1)

function scoreWord(word) {
  let score = 0;
  let toSmall = word.toLowerCase();
  for (let i = 0; i < toSmall.length; i++) {
    let letterIndex = letters.indexOf(toSmall[i]) + 1;
    score = score + letterIndex;
  }
  // return score
}

// let sentence = "I love holiday seasons"

// Recursion
// sort

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
