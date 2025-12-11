 
// Accessing the DOM Elements
 
console.log(document.body); // Returns the <body> element
console.log(document.head); // Returns the <head> element
console.log(document.documentElement); // Returns the <html> element
console.log(document.body.children); // Shows only element children
console.log(document.body.childNodes); // Shows all nodes including text/comments
 
// Selecting Elements
 
// querySelector → selects the first matching element
console.log(document.querySelector('.first-div'));

// querySelectorAll → selects all matching elements (NodeList)
console.log(document.querySelectorAll('div'));

// Other selection methods
console.log(document.getElementById('second-div'));
console.log(document.getElementsByClassName('first-div-child'));
console.log(document.getElementsByTagName('p'));

 
// Styling Elements with .style
 
function changeStyle() {
  const para = document.querySelector('.first-para');
  
  // You can directly modify CSS properties using .style
  para.style.color = 'blue';
  para.style.backgroundColor = 'yellow';
  para.style.padding = '10px';
  para.style.border = '2px solid black';
  para.style.borderRadius = '8px';

  //  Note: These styles are applied inline (directly on element)
  console.log('Paragraph style changed!');
}

//  Using setAttribute()
 
function changeImage() {
  const imageElement = document.querySelector('img');
  imageElement.setAttribute('src', 'photo.jpg'); // changes image
  imageElement.setAttribute('alt', 'Updated image');

  //  Note: setAttribute(name, value) changes or adds HTML attributes dynamically
  console.log('Image source updated!');
}
//  innerHTML vs textContent
 
const para = document.querySelector('.first-para');

// Shows content with or without HTML tags
console.log('innerHTML:', para.innerHTML);
console.log('textContent:', para.textContent);

// Changes inner content (renders HTML)
para.innerHTML = `<strong>${para.textContent}</strong>`;

//  innerHTML → reads/writes HTML code
//  textContent → reads/writes plain text only

//  Changing Text Content
 
const secondPara = document.querySelector('.second-para');
secondPara.textContent = 'This is new content using textContent';
//  textContent replaces all text safely (no HTML tags are rendered)

// Function to add a new heading dynamically
function addHeading() {
  const heading = document.createElement('h2');
  heading.textContent = 'Hello, DOM Learner!';
  heading.style.color = 'green';
  document.body.appendChild(heading);

  // This creates and adds new elements dynamically to the page
  console.log('New heading added!');
}

// Managing Classes with classList
 
function toggleClass() {
  const section = document.querySelector('.class1');

  // Adds a class
  section.classList.add('highlight');
  console.log('Class "highlight" added.');

  // Removes a class
  section.classList.remove('class3');
  console.log('Class "class3" removed.');

  // Toggles a class (adds if missing, removes if present)
  section.classList.toggle('active');
  console.log('Toggled "active" class.');

  // classList methods → add(), remove(), toggle(), contains(), replace()
}

// Bonus Example: automatic toggle every second
// Uncomment to see continuous effect
// setInterval(() => {
//   document.querySelector('.class1').classList.toggle('blink');
// }, 1000);
