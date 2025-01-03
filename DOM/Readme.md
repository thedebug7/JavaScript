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

# Manipulating Elements

1. Changing Content

- Use the `textContent` or `innerHTML` properties.

```
let title = document.getElementById("title");
title.textContent = "Welcome to JavaScript DOM!"; // Change text
title.innerHTML = "<strong>Welcome to JavaScript DOM!</strong>"; // Add HTML

```

2. Changing Attributes

- Use the `setAttribute` and `getAttribute` methods.

```
let link = document.querySelector("a");
link.setAttribute("href", "https://example.com"); // Change href
console.log(link.getAttribute("href")); // Get href

```

3. Changing Styles

- Use the `style` property.

```
let title = document.getElementById("title");
title.style.color = "blue"; // Change text color
title.style.fontSize = "24px"; // Change font size
```

# Adding or Removing Elements

<h2> Adding Elements </h2>

1. Create a new element:

```
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div!";
```

2. Append it to an existing element:

```
document.body.appendChild(newDiv);
```

<h2> Removing Elements</h2>

- Use the `remove` method or `removeChild`.

```
let title = document.getElementById("title");
title.remove(); // Removes the element directly

// Using parentNode:
let paragraph = document.querySelector("p");
paragraph.parentNode.removeChild(paragraph); // Removes the paragraph

```

# Event Listeners

Events are actions like clicks, typing, or hovering. You can listen for these actions using event listeners.

<h2> Adding an Event Listener </h2>

```
let button = document.querySelector("#myButton");

button.addEventListener("click", () => {
alert("Button was clicked!");
});

```

<h2>Common Events </h2>

```
Event Type	                        Descriptio
_________                        _______________________________

click	                           When an element is clicked
mouseover	                     When the mouse hovers
keydown	                        When a key is pressed
submit	                        When a form is submitted

```

# Traversing the DOM

You can navigate through parent, child, and sibling elements.

1. Parent Element

- Access the parent of an element:

```
let paragraph = document.querySelector("p");
console.log(paragraph.parentNode); // Logs the parent (e.g., <body>)

```

2. Child Elements

- Access children of an element:

```
let body = document.body;
console.log(body.children); // HTMLCollection of children
```

3.  Sibling Elements

- Access siblings of an element:

```
let paragraph = document.querySelector("p");
console.log(paragraph.nextElementSibling); // Next sibling element
console.log(paragraph.previousElementSibling); // Previous sibling element
```

# Working with Forms

Forms are interactive and can trigger events.

<h2>Access Form Inputs </h2>

```
let input = document.getElementById("username");
console.log(input.value); // Get the value entered by the user
```

<h2>Submit Event</h2>

```
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting
  console.log("Form submitted!");
});
```
