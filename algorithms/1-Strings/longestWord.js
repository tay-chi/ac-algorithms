/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

// function findLongestWord(str) {
//   var words = str.split(' ');
//   var longestWordLength = 0;
  
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWordLength) {
//       longestWordLength = words[i].length;
//     }
//   }
  
//   return longestWordLength;
// }

//1. We can alter the existing function or create a new function that finds the shortest word by slightly modifying the above if statement:

// function findShortestWord(str) {
//   let words = str.split(' ');
//   let shortestWordLength = Infinity; 
  
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length < shortestWordLength) {
//       shortestWordLength = words[i].length;
//     }
//   }

//   if (shortestWordLength === Infinity) {
//     return 0; 
//   }
  
//   return shortestWordLength;
//}

// By setting the value to Infinity, it simply ensures that the initial value is larger than any potential input in the string.

//2. To actually display the shortest (or longest word, depending on what function we want to use) we  can create a variable that will hold the word itself and then update the function's loop to keep track of what the shortest word is and then actually return it or display it in the console: 

function findShortestWord(str) {
  let words = str.split(' ');
  let shortestWordLength = Infinity; 
  let shortestWord = "";
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortestWordLength) {
      shortestWordLength = words[i].length;
      shortestWord = words[i];
    }
  }

  if (shortestWordLength === Infinity) {
    return { length: 0, word: '' };
  }
  
  return { length: shortestWordLength, word: shortestWord };
}

let result = findShortestWord("This is a test sentence");
console.log("Shortest Word:", result.word);
console.log("Shortest Word Length:", result.length);
