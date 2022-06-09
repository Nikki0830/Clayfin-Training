//example1

function outer() {
  var a = 10;
  function innner() {
    console.log(a);
  }
  return innner;
}
outer();
var clos = outer();
clos();

//output
//10
