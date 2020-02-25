//var can be changed
var square = "square";
square = "circle";
console.log(square);

//let can be changed
let circle = "circle";
circle = "square";
console.log(circle);

//const cannot be changed
const triangle = "triangle";
triangle = "square";
console.log(triangle);


var variable1 = "hello";

if(variable1) {
  let scopeRespectingVariable = "hello world";
  const alsoRespectingScopeVariable = "also hello world";
  var notRespectingScopeVariable = "booo";
  console.log(scopeRespectingVariable);
  console.log(alsoRespectingScopeVariable);
  console.log(notRespectingScopeVariable);
}

//let respects the if block scope and will throw a runtime error
console.log(scopeRespectingVariable)
//var will not respect scope and allow the user to work with the variable
console.log(notRespectingScopeVariable);

//const only prevents reassignment. You can however change the properties
const myObj = {
  name: 'George'
}

myObj.name = "Mike"

console.log(myObj);

//even with an array, you can mutate the state
const myArray = ["banana", "apple"]

myArray[1] = "orange"
myArray.push("apple")
console.log(myArray);