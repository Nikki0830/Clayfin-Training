//Total 6 ways

// object literal

const fruits = {
  mango: "yellow",
  apple: "red",
  lemon: "green",
  cherry: "pink",
  kiwi: "brown",
};

//object constructor

const fruit = new Object();
//to add properties
fruit.mango = "yellow";
fruit.apple = "red";
fruit.lemon = "green";
fruit.cherry = "pink";

//constructor function

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User("John Doe", 45);

//Object.create()

const Vehicle = {
  maker: "BMW",
  color: "Black",
};
//to create new object by using Vehicle's prototype
const vehicle = Object.create(Vehicle);

console.log(vehicle.maker);
console.log(vehicle.color);

//Object.assign()


//ES6 classes

