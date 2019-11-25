// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// My Solution

function validParentheses(parens){
    let parensArr = parens.split("")
    let leftParent = parensArr.filter(parent => parent === "(")
    let rightParent = parensArr.filter(parent => parent === ")")
    return leftParent.length === rightParent.length ? true : false
  }


//   Best Solution

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }