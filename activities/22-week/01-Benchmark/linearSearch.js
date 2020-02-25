// Require dependencies.
var generate = require("../shared/generate");

// Generate array of given length.
var length = 14;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];

// write a function that will serach for the randomValue within 
// the stuff array, if found the function will print out the index and value

