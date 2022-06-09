//It returns right-hand side operand when its left-hand side operand is null or undefined
//and otherwise returns its left-hand side operand

//example

const foo = null ?? "default-string";
console.log(foo);
const b = 0 ?? 42;
console.log(b);

//output
//default-string foo
//0
