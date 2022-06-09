//The rest parameter syntax allows a function to accept an idefinite number of arguments as an arrray.

//example

function sum(...theArgs) {
  let total = 0;

  for (const arg of theArgs) {
    total = total + arg;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

//output
//6
//10
