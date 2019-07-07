/* Create a function that takes a 2D array as an input, and outputs another array 
that contains the average values for the numbers in the nested arrays at the corresponding indexes. */

/*
avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]); // => [3, 4, 5, 6]
avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]); 
// => [22.5, 11, 38.75, 38.25, 19.5]

*/

function avgArray(twoDArray){

  //create a new array to be added to the existing array
  let newArr = twoDArray[0];
  
  //calculates the avg at the corresponding indexes
  for(let i = 1; i < twoDArray.length; i++){
    for(let j = 0; j <twoDArray[0].length; j++){
      if(i === twoDArray.length - 1){
        newArr[j]= (twoDArray[i][j] + newArr[j])/twoDArray.length
      } else{
         newArr[j]= (twoDArray[i][j] + newArr[j])
      }
    }
  }
  return newArr

}
