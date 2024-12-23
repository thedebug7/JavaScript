# Variable

```
A variable is a name of container in programming which is used to store data that can be reuse in future and can be changed later. it is a placeholder of value like number , string , or object.

Eg..

let name = "Samir"; // "name" is the variable holding the value "Samir"
console.log(name);  // Output: Samir
```

# Key Concepts of Variables

1.  Declaration

    - this is a procees of creating of variables in javaScript
    - we use kewords like `let`, `Var` or `const` to declare variables.
    - A variable Can be declared without value, but it will initially hold the value `undefined`.

2.  Initialization

    - At the time of declaration: You assign a value right when you create the variable.

    ```
    let age = 20; // Initialization happens here (value 20 is assigned to 'age')
    console.log(age); // Output: 20
    ```

    - Later in the program: You declare the variable first and assign a value to it later.

            ```
            let age; // Variable is declared but not initialized yet
            age = 20; // Initialization happens here (value 20 is assigned to 'age')
            console.log(age); // Output: 20
            ```

# Types of Variable Scopes

In JavaScript, variable scope refers to the accessibility or visibility of variables in different parts of the code. There are three main types of variable scopes:

1. Global Scope

   - A variable declared outside of any function or block has global scope
   - It can be accessed from anywhere in the code

   ```
   let x = 10;  // Global scope

    function example() {
    console.log(x); // Can access x here
    }
    example();

   ```

2. Function Scope

- A variable declared inside a function has function scope.
- It can only be accessed within that function.

```
   function example() {
   let y = 20; // Function scope
   console.log(y); // Can access y here
   }
   console.log(y); // Error: y is not defined outside the function
```

3. Block Scope

- A variable declared inside a block (e.g., inside curly braces {}) with let or const has block scope.
- It can only be accessed within that block.

```
if (true) {
    let z = 30;  // Block scope
    console.log(z);  // Can access z here
}
console.log(z);  // Error: z is not defined outside the block
```

Summary:

Global Scope: Accessible anywhere.

Function Scope: Accessible only inside the function.

Block Scope: Accessible only inside the block (e.g., inside {} with let or const).

Using proper scoping helps avoid conflicts and makes the code easier to understand and debug.

# Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. However, only the declaration is hoisted, not the initialization.

Example with `var`:

```
console.log(a); // undefined
var a = 10;
```

Example with `let` or `const`:

```
console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
```
