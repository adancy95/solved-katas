// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2){
  str1Arr = [...str1];
  for(let i = 0; i < str2.length; i++){
    if(str1Arr.includes(str2.charAt(i))===false){
      return false;
    } else{
      let index = str1Arr.indexOf(str2.charAt(i));
      str1Arr.splice(index, 1);
    }
  }

 return true;
}
