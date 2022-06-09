//It is a feature in JS used to add methods and properties in objects.It is a method by which an
//object can inherit properties and methods of another objetc.

//example

const a = function () {
  this.a = 1;
  this.b = 2;
};
const x = new a();
a.prototype.b = 3;
a.prototype.c = 4;

console.log(x.a);
console.log(x.b);
console.log(x.c);
console.log(x.d);

//output
//1
//2
//4
//undefined
