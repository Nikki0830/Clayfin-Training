//It menas to breakdown a complex structure into simpler parts.With the syntax of destructuring
//we can extract saller fragments fromobjects and arrays.It can be used for assignments and
//declaration of a variable.

//example

let a, b, rest;
[a, b] = [100, 200];

console.log(a);
console.log(b);
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

//output
//100
//200
//[300,400,500]
