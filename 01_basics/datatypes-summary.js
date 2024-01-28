//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harsh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.table([typeof score, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof anotherId, typeof heros, typeof myObj, typeof myFunction]);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myInstagramPage = "harsh_burnwal"

let anotherName = myInstagramPage
anotherName = "whyharsh"

console.log(myInstagramPage);
console.log(anotherName);

let userOne = {
    email : "hb@hb.com",
    upi : "hb@axl"
}

let userTwo = userOne

userTwo.email = "hb@cypher.com"

console.log(userOne.email);
console.log(userTwo.email);