console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

//end function hello


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jason!"', helloName("Jason"));

//end function helloName

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log('Test: should return sum of 34 and 56', addNumbers(34,56));

//end function addNumbers

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
}

console.log('Test: Multiply 3 numbers. 2, 4, 6', multiplyThree(2,4,6))

//end function multiplyThree

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test: should return true if the number (1) is positive', isPositive(1));
console.log('Test: should return true if the number (10.5) is greater than 0', isPositive(10.5));
console.log('Test: should return false if the number (-1) is negative or less than 0.', isPositive(-1));

//end function isPositive

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0){
    return undefined;
  } else {
    lastValue = array.pop();
    return lastValue;
    lastValue = array.pop();
    myArray.push()
    return lastValue;
  }
}
myArray = []
console.log('myArray: ', myArray);
console.log('Test: should return undefined for an empty array', getLast(myArray));
myArray=[1,1,2,3,5, "eureka!"];
console.log ("array: ", myArray);
console.log('updated array length', myArray.length)
console.log('Test: should return "eureka!"', getLast(myArray));

//end function getLast

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let i = 0; i<=array.length; i++){
    if (value === array[i]){
      return true;
    } 
  }
  return false;
}
let testArray = myArray;
let testValue = 3;
console.log('Test array:" ', testArray);
console.log('value to find: ', testValue);
console.log('Test: value found should return true', find(testValue, testArray));
testValue = 8;
console.log('next test: ', testValue);
console.log('Test: value not found; should return false', find(testValue, testArray));

//end function find

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string[0].toLowerCase()){
    return true;
  } else {
    return false;
  }
}
let myString = "Bunk Beds starts with 'b'.";
let myLetter = "b";
console.log ("Test: should return true");
console.log ("String:" , myString);
console.log ("Letter: ", myLetter);
console.log (isFirstLetter(myLetter, myString));
console.log ("Test: should return false");
myLetter = "f";
console.log("Test letter: ", myLetter);
myString = "Bunk Beds starts with 'f'.";
console.log("Test string: ", myString);
console.log(isFirstLetter(myLetter, myString));
// end function isFirstLetter

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i<=array.length-1; i++){
    //validate that the current value is numeric
    if(typeof array[i]=== "number"){
      sum+= array[i];
    } else {
      console.log("skipping non-numeric value");
    }
  }
  // TODO: return the sum
  return sum;
}

myArray = [1,1,2,3,5,"eureka", 8,11];
console.log("My array:", myArray);
console.log("Test should return the sum of all numbers in the array. expected answer: 31.");
console.log("Sum is ", sumAll(myArray));
//end function sumAll

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  //create a destination array
  let positiveValues = [];
  //loop through each value in the array
  for (let i = 0; i<=array.length-1; i++) // Declares a loop starting at 0 and going through each index until the last item, and increments the number
    {
      //determine if that value is positive (greater than 0)
      // // console.log("Test Value:", array[i]);
      if(isPositive(array[i])){
        //  copy the positive value into the destination array
        positiveValues.push(array[i]);
        // // console.log("added to the list");
        //  continue to the next value
        continue;
      } else {
      // if the value is not positive, skip it and move to the next one
        // // console.log("Nope. Skipping this one");
        continue;
      }
    }
  //once you have gone through all of the elements, return the list of positive values
  return positiveValues;
}

console.log("test: Return all positive values in the array [-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 5.5, 6]")
let myNewArray = [-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 5.5, 6];
console.log("positive values: ", allPositive(myNewArray));
console.log(myNewArray);
// end function allPositive
// end function allPositive
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/* This is the description from CodeWars:

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

function findSmallestInt(array){
  //sort the array smallest to largest
  array = array.sort((a, b) => a - b);
  //loop through the array
  for (let i = 0; i<=array.length-1; i++){
    //if the current value is an integer, return it and stop checking.
    if(Number.isInteger(array[i])){
      return array[i];
    } else {
    //otherwise, move to the next element.
    continue;
    }
  }
}

testArray = [34, 15, 88, 2];
let smallestInt = findSmallestInt(testArray);
console.log("Testing with ", testArray);
console.log("Expected Answer: 2");
console.log("Smallest integer is ", smallestInt);
testArray = [34, -345, -1, 100];
smallestInt = findSmallestInt(testArray);
console.log("new test", testArray);
console.log("Expected Answer: -345");
console.log("Smallest integer is ", smallestInt);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
