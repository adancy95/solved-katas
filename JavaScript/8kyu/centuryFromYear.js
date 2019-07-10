/*
Introduction
The first century spans from the year 1 up to and including the year 100, The second - 
from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
centuryFromYear(717600) returns (7176)
*/


//My Solution
function centuryFromYear(year){
  let yearString = year.toString()
  let yearEnding = parseInt(yearString.slice(-2));
  let yearBeg = parseInt(yearString.slice(0,yearString.length-2))


  if(yearEnding === 00){
    return yearBeg;
  } else if(yearString.length === 2){
    return 1
  } else {
    return yearBeg + 1;
  }

}

//Best Answer
const century = year => Math.ceil(year/100)