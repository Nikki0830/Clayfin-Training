//example1

class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);

//output
//polygon

//example2

function counter() {
  var count = 0;

  this.inc = function () {
    c++;
    console.log(c);
  };
  this.dec = function () {
    c--;
    console.log(c);
  };
}
var count1 = new counter();
count1 = inc();
