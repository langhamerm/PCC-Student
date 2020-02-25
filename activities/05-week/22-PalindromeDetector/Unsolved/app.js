// Reverse in Place w/Palindrome Detector
var s1 = "Otto bought a racecar he cannot afford.";
var s2 = "Otto lost the deed to his house.";
var s3 = "Otto needs Xanax.";
var s4 = "Was it a car or a cat I saw?";

const palindromeCheck = (s) => {
  // hold array of reversed words
  var reverseArray = [];
  // split sentence into an array of words and store it
  var words = s.split(" ");
  // hold words to be shown on page
  var show = [];

  for (var i = 0; i < words.length; i++) {
    // Replace /[^a-zA-Z]+/g with ""
    words[i] = words[i].replace(/[^a-zA-Z]+/g, "");
    // split current word into array of letters
    var letters = words[i].split("");

    var rAndJ = "";

    for (var l = letters.length -1; l >= 0; l--) {
      rAndJ += letters[l];
    }
  }
};
// Instructions
// ============

// A palindrome is a sentence that reads the same backwards and forwards:
// "Was it a car or a cat I saw?"
// Reverse each word in a sentence
// and display it on the screen in the same order.

// For example, the sentence "This is an example"
// would become `siht si na elpmaxe.`

// If the word is a palindrome, have it display in red.

// Notes:
// ======

// Remove periods.
// Add the result to the page in the div with the id "Result".
// Here are some test phrases to put in your JavaScript:
// "Otto bought a racecar he cannot afford."
// "Otto lost the deed to his house."
// "Otto needs Xanax."

// Bonus:
// ======

// Remove all "special characters" (commas, periods, etc).
// Do not use the reverse() method.
