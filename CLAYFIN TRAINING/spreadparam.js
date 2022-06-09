//The JS spread operator allows us to quickly copy all or part of
//existing array or object into another arrray or object.

//example

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

//output
//6
