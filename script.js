//your JS code here. If required.
// prompt user to enter the radius of the circle
let radius = prompt("Enter the radius of the circle:");

// calculate the area of the circle
let area = Math.PI * radius * radius;

// round off the result to two decimal places
area = area.toFixed(2);

// display the result to the user
alert(`The area of the circle with radius ${radius} is ${area}.`);

