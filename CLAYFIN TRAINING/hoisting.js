//example1

getName();
console.log(x);
var x = 7;
function getName() {
  console.log("Hello Javascript");
}

//output
//Hello JavaScript
//undefined

//example2

getName();
console.log(x);

function getName() {
  console.log("Hello Javascript");
}

//output
//Hello JavaScript
//x is not defined

//example3

console.log(getName);

function getName() {
  console.log("Hello Javascript");
}

//output
//[Function: getName]

//example4

getName();
console.log(x);
console.log(getName);
var x = 7;
function getName() {
  console.log("Hello Javascript");
}

//output
//undefined
//[Function: getName]
