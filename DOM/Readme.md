# What is DOM?

The DOM is like a bridge between your HTML page and JavaScript. It lets you use JavaScript to:

Change HTML content (like text, images, links, etc.).
Modify CSS styles (like color, font, or size).
Add or remove elements (like buttons or lists).
Think of it as your website as a tree. Every HTML element (like <div>, <p>, or <img>) is a branch or a leaf on this tree. Using JavaScript, you can grab a branch, shake it, or even replace it!

# How to Access the DOM?

1. Select an Element

- `getElementById`: Selects an element by its `id`.

```
const title = document.getElementById("main-title");
console.log(title);
```

2.

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
