// JavaScript is a dynamically typed language. This means that type checking occurs at runtime, during the execution of the program.

// primitive are 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 534534354343457n

// Reference / non-primitive are Arrays, Objects, Functions 

const heros = ["ShaktiKumar", "Naagraj", "Doga"]
let myObj = {
    name: "Rashika",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!!");
    
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);