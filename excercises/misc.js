let testString = "Enrique Dick";


// Reverse Excercises
function reversed0(str) {
  return str.split('').reverse().join('');
}

function reversed(str) {
  let reversed = "";
  for (char of str)
    reversed = char + reversed;
  return reversed;
}

function reversed1(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// console.log(reversed0(testString));
// console.log(reversed(testString));
// console.log(reversed1(testString));

// Palindrome Excercises
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindrome2(str) { //Not efficient
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// console.log(palindrome2("anitalavalatina"));

// Reverse Int Excercises
function reverseInt(n) {
  return (parseInt(n.toString().split('').reverse().join(''))) * (n < 0 ? -1 : 1);
  // return (parseInt(n.toString().split('').reverse().join(''))) * Math.sign(n);
}

// console.log(reverseInt(-551));

// Max Chars Excercises

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str)
    chars[char] = chars[char] + 1 || 1;
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char]
      maxChar = char;
    }
  }

  return maxChar;
}

// console.log(maxChar("apple is an amazing"));

// FizzBuzz Excercise

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      console.log("fizzbuzz");
    else if (i % 3 === 0)
      console.log("fizz");
    else if (i % 5 === 0)
      console.log("buzz");
    else
      console.log(i);
  }
}
//fizzBuzz(100);

// Chunk Excercise: Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

function chunk(arr, sz) {
  const chunked = [];
  for (let element of arr) {
    const last = chunked[chunked.length - 1];
    console.log("Last Chunk: ", last);
    console.log("Elem: ", element);

    if (!last || last.length === sz)
      chunked.push([element]);
    else
      last.push(element);
    if (last)
      console.log("Last.length: ", last.length);
  }
  return chunked;
}

function chunk2(arr, sz) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + sz));
    index += sz;
  }
  return chunked;
}

// console.log(chunk([1, 2, 3], 2));
// console.log(chunk2([1, 2, 3], 2));

function anagrams(strA, strB) {
  console.log(JSON.stringify(mapOfStrings(strA)) === JSON.stringify(mapOfStrings(strB)));
}

function anagrams2(strA, strB) {
  const strA2 = strA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
  const strB2 = strB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
  console.log(strA2);
  console.log(strB2);
  console.log(strA2 === strB2);
}

anagrams("RAIL! SAFETY!", "fairy tales");
anagrams2("RAIL! SAFETY!", "fairy tales");

function mapOfStrings(str) {
  let strL = str.toLowerCase().match(/([a-z])\w+/g).join('').split('').sort().join('');
  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of strL)
    chars[char] = chars[char] + 1 || 1;
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char]
      maxChar = char;
    }
  }
  return chars;
}