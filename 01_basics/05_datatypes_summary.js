// primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3265616515151515156n


// Reference(Non Primitive)

//Array, Objects, Functions

const heros = ["Shaktiman","naagraj","dogga"];
let myObj={
    name: "Sanskar",
    age: 21,
}

const myfunction =function(){
    console.log("Hello world");
}


//********************************** */

// Stack(Primitive), Heap (Non Primitive)

let myYoutubename = "SanskarTamangdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "sanskar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
