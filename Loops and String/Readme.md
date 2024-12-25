# What is a Loop?

A loop is like a robot that repeats a task for you! If you want to do something multiple times, instead of writing the same code again and again, you use a loop.

# Types of Loops in JavaScript

1. `for` loop is the most common and versatile for iterating over a range or array.
2. `while` loop is used when you need to keep looping until a certain condition is met.
3. `do...while` loop is used when you want to guarantee at least one execution of the code.
4. `forEach` is used when working with arrays for simplicity and readability.
5. `for...of`loop is very common in modern JavaScript for iterating over arrays and iterable objects.

# 1. for Loop

```
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

Example:

```
for (let i = 1; i <= 5; i++) {
    console.log("Hello, World!"); // This will print 5 times
}
```

# 2. while Loop

Syntax:

```
while (condition) {
    // Code to execute
}
```

Example:

```
let i = 1;

while (i <= 5) {
    console.log("Number:", i);
    i++;
}
// Output: 1, 2, 3, 4, 5
```
