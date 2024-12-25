// Arithmetic Operators
let a = 10;
let b = 2;

console.log(a + b); // 12
console.log(a - b); // 8
console.log(a * b); // 20
console.log(a / b); // 5
console.log(a % b); // 0
console.log(a ** b); // 100

console.log()
// Comparison Operators

let x = 5;
let y = "5" ;

console.log( x == y); // true (values are equal)
console.log( x === y); // false (type mismatch)
console.log( x != y);  // false
console.log( x !==y ); //ture
console.log (x > 3);
console.log( x <= 5);

console.log()

// Logical Operators
let age = 20;

console.log( age > 18 && age < 30); // true both condition match 
console.log(age > 18 || age > 30); // true one contition match
console.log(!(age > 18));         // false (NOT operator reverses true to false)


console.log()

// Conditions in JavaScript
let isRanning = true;

if (isRanning) {
    console.log("Take an umbrella!!")
} else {
    console.log("Enjoy the sunshine!!")
}

// 2

let Age = 2;

if(Age >= 18 && Age <= 40){
    console.log(`You are in Young Group....`)
}else if (Age >40 && Age >=55) {
    console.log(`You are Going To be Old....`)
}else if ( Age > 55){
    console.log("You are in Old Group..")
}else{
    console.log("You are Child")
}

console.log()

// Ternary Operator
let vage = 18;
let canVote = age >= vage ? "Yes you can vote" : "No you can't Vote";
console.log(canVote)