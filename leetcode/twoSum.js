// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// My Solution
var twoSum = function(nums, target) {
  let number = []
  for(let i = 0; i < nums.length; i++){
      for(let j = 1; j < nums.length; j++ ){
         if(i === j){continue}
        let sum = nums[i]+nums[j]
          if( sum==target){
            number.push(i,j)
            return number
        }
      }
              
  }
  
};

