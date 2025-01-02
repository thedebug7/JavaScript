# What is DOM?

The DOM is like a bridge between your HTML page and JavaScript. It lets you use JavaScript to:

Change HTML content (like text, images, links, etc.).
Modify CSS styles (like color, font, or size).
Add or remove elements (like buttons or lists).
Think of it as your website as a tree. Every HTML element (like <div>, <p>, or <img>) is a branch or a leaf on this tree. Using JavaScript, you can grab a branch, shake it, or even replace it!

# How to Access the DOM?

1. `getElementById`

- Selects an element by its `id`.

```
let title = document.getElementById("title");
console.log(title); // <h1 id="title">Hello, World!</h1>

```

2. `getElementsByClassName`

- Selects elements by their class name (returns a collection of elements).

```
let items = document.getElementsByClassName("item");
console.log(items); // HTMLCollection of elements with class "item"

```

3. `getElementsByTagName`

- Selects elements by their tag name (e.g., all `<p>` elements).

```
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection of all <p> elements
```

4. `querySelector`

- Selects the first element that matches a CSS selector.

```
let title = document.querySelector("#title"); // Select by ID
let firstItem = document.querySelector(".item"); // Select by class
```

4. `querySelectorAll`

- Selects all elements that match a CSS selector (returns a NodeList).

```
let allItems = document.querySelectorAll(".item");
console.log(allItems); // NodeList of elements with class "item"
```

# properties of an element

The properties of an element in JavaScript allow you to interact with and manipulate the selected HTML elements dynamically. These properties give you access to the content, attributes, styles, and other characteristics of the element.

1. innerHTML
   This property gets or sets the HTML content inside an element.

- Get:

```
const element = document.querySelector("#example");
console.log(element.innerHTML); // Outputs: "<span>Hello, World!</span>"
```

- Set
