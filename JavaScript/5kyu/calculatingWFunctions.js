// Description:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const plus = (integer) => {return ["", "+", `${integer}`]};
const minus = (integer) => {return ["", "-", `${integer}`]};
const times = (integer) => {return ["", "*", `${integer}`]};
const dividedBy = (integer) => {return ["", "/", `${integer}`]}

const zero = (expression = ["", "*", 1]) => {
  expression[0] = "0"
  return Math.floor(eval(expression.join("")));
 }

 const one = (expression = ["", "*", 1]) => {
  expression[0] = "1"
  return  Math.floor(eval(expression.join("")));
 }

 const two = (expression = ["", "*", 1]) => {
  expression[0] = "2"
  return  Math.floor(eval(expression.join("")));
 }

 const three = (expression = ["", "*", 1]) => {
  expression[0] = "3"
  return  Math.floor(eval(expression.join("")));
 }

 const four = (expression = ["", "*", 1]) => {
  expression[0] = "4"
  return  Math.floor(eval(expression.join("")));
 }

 const five = (expression = ["", "*", 1]) => {
  expression[0] = "5"
  return  Math.floor(eval(expression.join("")));
 }
 
const six = (expression = ["", "*", 1]) => {
  expression[0] = "6"
  return  Math.floor(eval(expression.join("")));
 }

 const seven = (expression = ["", "*", 1]) => {
  expression[0] = "7"
  return  Math.floor(eval(expression.join("")));
 }

 const eight = (expression = ["", "*", 1]) => {
  expression[0] = "8"
  return  Math.floor(eval(expression.join("")));
 }

 const nine = (expression = ["", "*", 1]) => {
  expression[0] = "9"
  return  Math.floor(eval(expression.join("")));
 }
 