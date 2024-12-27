// For Loop

// for(let i = 0; i <5; i++){
//     console.log(`Iteration: ${i}`)
// }

// While loop

// let i = 0
// while (i <= 5){
//     console.log(`Number: ${i}`);
//     i++
// }

// practice 
// 1 - using for loop print 1 to 10

for(let i = 0; i <=10; i+=1){
    console.log(`Iteration: ${i}`)
}
console.log()
// 2 - using for loop Print even numbers from 2 to 20

for(i = 2; i <= 20; i++){
    if (i % 2 ===0){
        console.log(`Iteration: ${i}`)
    }
    
}

console.log()

// String 
//         [01234]
let name = "harry" // this is a string  we can use single and double quotes write string ;

let length = name.length;
console.log(`Length : ${length}`)
//Access Characters
console.log(name[0]) //h

// Change Case      toUpperCase() and toLowerCase()
console.log(name.toUpperCase()) // HARRY

//Split a string into an array.
let text = "Apple, Banana, Cherry";
let fruits = text.split(", ");
console.log(fruits);

// Trim Remove whitespace from both ends of a string.
let te = "   Hello, World!   ";
console.log(te.trim()); // "Hello, World!"

