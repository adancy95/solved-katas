// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


const romanNumeralsConversions = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

function convertIntegerToRomanNumeral(number){
  //takes a positive integer as its parameter and returns a string containing the Roman Numeral representation of that integer.
  const entries = Object.entries(romanNumeralsConversions);

  let RomanNumeral = "";
  let numberManipulation = number;

  for(const[romanNum, integerConversion] of entries){
    console.log(integerConversion)
    if(numberManipulation >= integerConversion){
      let conversionCount = Math.floor(numberManipulation / integerConversion);
      numberManipulation -= integerConversion*conversionCount; 
      RomanNumeral += romanNum.repeat(conversionCount)
    }
  }

  return RomanNumeral


}


