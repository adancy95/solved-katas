// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

/*
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/


function duplicates(array){
  //Make the magic happen
  
    //turn the original array to a distinct array
    const distinctArr = [...new Set(array)]
    
    //pairs counter
    pairs = 0;
    
    //filter the original array by each number in the distinct array. Find the number of pairs in the filtered array.
    distinctArr.forEach(function(num){
     const filteredArr = array.filter(singleNum => singleNum === num);
    pairs = pairs + Math.floor(filteredArr.length/2)
       
    })
  
    return pairs
    
  }