/*
// CRASH COURSE JS
// ==========================================================
// 1. BASIC VARIABLES
// ==========================================================
// Create a basic variable
var name = "Dan";
var name = "Bob";
var name = "Alex";
// 2. ARRAYS
// ==========================================================
// Create an array of five strings
var threeArray = ["Dan", "Bob", "Alex",];
// 3. FOR LOOPS
// ==========================================================
// Create a for loop that loops through and prints "My name is Bob five times"
for (var i = 0; i < 3; i++) {
  console.log("My name is Bob");
}
// Create a for loop that loops through your five string array and prints each name
for (var i = 0; i < threeArray.length; i++) {
  console.log("My name is " + threeArray[i]);
}
// 4. FUNCTIONS
// ==========================================================
// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
var divider = function(num1, num2) {
  var result = num1 / num2;
  console.log(result);
  return result;
};
// Prints 5
divider(10, 2);
// Create a function that takes in an array of strings and then loops through the array and prints out strings.
// Then call that function
var looper = function(arrayNumbers) {
  for (var i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i]);
  }
};
looper(threeArray);
// 5. OBJECTS


*/
// ==========================================================
// Create a JavaScript Object

window.onload = startfunction

function startfunction() {
    //Create an input type dynamically.   
 
   

    var Dan = document.getElementById("Dan");


    Dan.onclick = function() { // Note this is a function
    alert("07:15 07:45 17.3");
     };
   
    var Alex = document.getElementById("Alex");


    Alex.onclick = function() { // Note this is a function
    alert("06:12 06:32 21.8");
     };



     var Bob = document.getElementById("Bob");


    Bob.onclick = function() { // Note this is a function
    alert("12:01 13:16 42.0");
     };
   }



/*
var Dan = {
  time: "7:15",
  distance: "7:45",
  mPerHour: 17.3,

  var Bob = {
  time: "12:01",
  distance: "6:32",
  mPerHour: 42.0

  var Alex = {
  time: "6:12",
  distance: "6:32",
  mPerHour: 21.8

  
};
// Console log any three of the properties in that object
console.log(Dan.time);
console.log(Dan.distance);
console.log(Dan.mPerHour);

console.log(Bob.time);
console.log(Bob.distance);
console.log(Bob.mPerHour);

console.log(Alex.time);
console.log(Alex.distance);
console.log(Alex.mPerHour);
// Create an Array of 3 Objects
var threeObjects = [
  {
    name: "Dan",
    brand: "Honda",
    carsDestroyed: 2001
  },
  {
    name: "Bob",
    brand: "Toyota",
    carsDestroyed: 500
  },
  {
    name: "Alex",
    brand: "Sam",
    carsDestroyed: 2
  }
];
// Console log 3 properties for every one of the five objects
for (var i = 0; i < threeObjects; i++) {
  console.log(threeObjects[i].name);
  console.log(threeObjects[i].brand);
  console.log(threeObjects[i].carsDestroyed);
}

*/
