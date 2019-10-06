// Our counter prototype is broken.Can you spot, what's wrong here?

// Broken Code:
// function Counter() {
//   this.value = 0;
// }

// Counter.prototype.increase() {
//   this.value++;
// };

// Counter.prototype.getValue() {
//   return this.value;
// };

// Counter.prototype.reset() {
//   this.value = 0;
// };

//Solution


function Counter(){
  this.value = 0;
}

Counter.prototype.increase = function(){
  this.value++;
};

Counter.prototype.getValue = function(){
  return this.value;
};

Counter.prototype.reset = function(){
 this.value = 0;
};