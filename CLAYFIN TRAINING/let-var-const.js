//var variable
//example-1

var a = 90;
function fun() {
  var a = 9000;
  {
    let a = 900;
    console.log(a);
  }
  console.log(a);
}
fun();

// output:
// 900
// 9000

//example2

// var a = 90;
// function fun() {
//   let a = 9000;
//   {
//     let a = 90000;
//     let a = 900;
//     console.log(a);
//   }
//   console.log(a);
// }
// fun();

// output:
//Identifire a has already been declared

//example3

var a = 90;
function fun() {
  {
    var a = 90000;
    let a = 900;
    console.log(a);
  }
  console.log(a);
}
fun();

//output
//Identifier 'a' has already been declared

//example4

var a=90;
function fun(){
	var a=900;
	console.log(a);
}

console.log(a);

//output
//90

//example5

var a = 90;
function fun() {
  var a = 900;
  console.log(a);
}
fun();
console.log(a);

var a;
console.log(a);

console.log(h);
var h;

//output
// 900
// 90
// 90
// undefined

//example6

var a = 0;
console.log(typeof a);
a = "hi";
console.log(typeof a);
a = "hello";
console.log(typeof a);

//output
//number
//string
//string

//example7

console.log(0.3===(0.1+0.2));

//output
//false

//example8(const)

{
  const x = 2;
  console.log(x);
}
console.log(x);

//output
//2
//x is not defined(because it's outside from block scope)
