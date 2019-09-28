// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

function stringTransformer(str) {
  let stringArr = str.split("");
  console.log(stringArr)
  let convertedCase = stringArr.map(character => {


    // if (character == character.toLowerCase()){
    //   return character.toUpperCase()
    // }
    // else {
    //   return character.toLowerCase()
    // }

    return character == character.toLowerCase() ? character.toUpperCase() : character.toLowerCase()
    
  
  })

splitStr = convertedCase.join("").split(" ").reverse()
return splitStr.join(" ");
}
