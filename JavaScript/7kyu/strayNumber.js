// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


/*
filter the array by the first element in the array.
filter the array by everything that's not the first element in the array
return the element in the array that has a length of 1

*/
function strayNum (anArr){
  
  let numArr1 = anArr.filter(num1 => num1 === anArr[0]);
  let numArr2 = anArr.filter(num2 => num2 !== anArr[0]);

  if(numArr1.length === 1){
    return numArr1[0]
  } else {
    return numArr2[0]
  }

}



// best Solution
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}