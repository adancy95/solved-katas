// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65) # => 'A'

function getChar(number){
  //returns a string from a unicode
  return String.fromCharCode(number);
}

//ES6 Arrow Function

const getChar = number =>  String.fromCharCode(number);


//Best Solution

const getChar = String.fromCharCode;