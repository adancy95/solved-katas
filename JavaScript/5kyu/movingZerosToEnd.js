// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let moveZeros =  arr =>  { return [...arr.filter(num => num !==0 )].concat( [...arr.filter(num => num ===0 )])}