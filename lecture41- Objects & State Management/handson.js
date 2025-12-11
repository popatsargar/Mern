 
const headingButton = document.createElement("button");
headingButton.textContent = "Change Heading";
document.body.appendChild(headingButton);

headingButton.addEventListener("click", function () {
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = "Heading Changed!";
  }
});
 
const firstCard = document.querySelector(".card");
if (firstCard) {
  firstCard.addEventListener("click", function () {
    alert("You clicked a product card!");
  });
}
 
const gallery = document.querySelector(".gallery");
const addBtn = document.createElement("button");
addBtn.textContent = "Add Simple Product";
document.body.appendChild(addBtn);

addBtn.addEventListener("click", function () {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="title">New Product</div>
    <div class="price">₹100</div>
    <button>Add to Cart</button>
  `;
  gallery.appendChild(card);
});
 
let count = 0;
const countBtn = document.createElement("button");
countBtn.textContent = "Click Count: 0";
document.body.appendChild(countBtn);

countBtn.addEventListener("click", function () {
  count++;
  countBtn.textContent = "Click Count: " + count;
});
