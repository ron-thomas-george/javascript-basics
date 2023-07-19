console.log("Fireship");

//var
var x = 5;
var x = "hello";
console.log(x);

//let
// let y = 6;
// let y = 9; This will print error in console because variables declared with let cannot be redeclared agian.
// console.log(y);

let z = 14;
z = 17; //This will not print error because z is not again declared with let.
console.log(z);

//Variables defined with var keyword does not have block scope{}. That means variables declared with var inside a block
//can be accessed outside.
//Redeclaring a variable inside a block using var will also redeclare the variable outside the block(because var does not have block scope)
var n = 15;
{
  var n = 19;
}
console.log(n); //n = 19

//Variables defined with let keyword have block scope. That means variables declared with let inside a block
//cannot be accessed outside.
//Redeclaring a variable inside a block using let will not redeclare the variable outside the block(because let has block scope)
let m = 12;
{
  let m = 11;
}
console.log(m); //m = 12

//constant arrays
const cars = ["Toyota", "BMW", "Audi"];
//We cannot reassign a constant array
// cars = ["Suzuki", "Hyundai", "Volvo"]; This will create error
//But we can change the elements of constant array
cars[0] = "Honda";
//We can add an element
cars.push("Porsche");
console.log(cars);

//constant objects
const bikes = {
  type: "Honda",
  model: "CBR 650R",
  color: "red",
};
//We cannot reassign an object
// bikes = { type: "Volvo", model: "XC60", color: "white" }; This will create error
//But we change property of constant object
bikes.color = "black";
//We can add a proeprty
bikes.power = "648.72 CC";
console.log(bikes);
