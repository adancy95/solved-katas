// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

const countLettersAndDigits = input => {
  let count =  input.match(/[A-Za-z0-9]/g)
  return count === null ? 0 : count.length
}