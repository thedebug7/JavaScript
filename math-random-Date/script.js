const greetings = ["Hello!", "Hi there!", "Good morning!", "How's it going?"];
let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
console.log(randomGreeting); // Random greeting




let endDate = new Date('2024-12-31');
let currentDate = new Date();

let timeRemaining = endDate - currentDate;
let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
console.log(`Days remaining until New Year: ${daysRemaining}`);
console.log(timeRemaining);