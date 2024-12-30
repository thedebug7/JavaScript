# Array

A Array is a collection of items ( called a element) stored in a single varaible. you can store multiple in an array and can access them using an index.
`const fruits = ["apple", "orange", "cherry"];`

1. Declaring an Array
   You can create arrays in JavaScript using either:

- Array literal syntax (recommended)
- Array constructor

```
// Using array literal
const fruits = ["Apple", "Banana", "Mango"];

// Using array constructor
const numbers = new Array(1, 2, 3, 4);
```

2. Accessing Elements
   Array elements are accessed using their index, starting from 0.

```
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
```

3. Common Array Methods
1. Adding/Removing Elements

- `push()`: Adds an element to the end of the array.
- `pop()`: Removes the last element from the array.
- `unshift()`: Adds an element to the beginning of the array.
- `shift()`: Removes the first element from the array.

```
const fruits = ["Apple", "Banana"];
fruits.push("Mango"); // ["Apple", "Banana", "Mango"]
fruits.pop(); // ["Apple", "Banana"]
fruits.unshift("Grapes"); // ["Grapes", "Apple", "Banana"]
fruits.shift(); // ["Apple", "Banana"]
```

2. Iterating Over Arrays

- forEach(): Executes a function for each element.
- map(): Creates a new array by applying a function to each element.

```
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // 1, 2, 3

const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]
```
