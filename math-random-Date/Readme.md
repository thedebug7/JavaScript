# 1.Math in JavaScript

# 2. Random in JavaScript

Generate a random number between 0 and 100:

```
let randomNum = Math.random() * 100;
console.log(randomNum); // Example: 35.92
```

Generate a random integer between 1 and 100:

```
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt); // Example: 42
```

Generate a random number between a specific range (min and max):

```
let min = 10, max = 50;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // Example: 34
```

# 3. Date in JavaScript

Format Date
You can convert a Date object to a string using .toString() or .toLocaleString():

```
let formattedDate = currentDate.toLocaleString();
console.log(formattedDate); // Example: "12/26/2024, 12:45:00 PM"

```
