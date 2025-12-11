// 🔹 Click Event Example
let count = 0;
const btn = document.getElementById("clickBtn");
const counter = document.getElementById("counter");

btn.addEventListener("click", () => {
  count++;
  counter.textContent = "Count: " + count;
  console.log("Button clicked");
});

// 🔹 Mouse Events Example
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "orange";
  hoverBox.textContent = "Mouse Over!";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
  hoverBox.textContent = "Hover or Click Me";
});

hoverBox.addEventListener("mousedown", () => {
  hoverBox.style.backgroundColor = "yellow";
  hoverBox.textContent = "Mouse Down!";
});

hoverBox.addEventListener("mouseup", () => {
  hoverBox.style.backgroundColor = "green";
  hoverBox.textContent = "Mouse Released!";
});

// 🔹 Keyboard Event Example
const textInput = document.getElementById("textInput");

textInput.addEventListener("keydown", (event) => {
  console.log("Key Pressed:", event.key);
});

// 🔹 Toggle Dark Mode Example
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
