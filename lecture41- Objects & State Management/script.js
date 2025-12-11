const products = [
  {
    title: "product 1",

    price: 30,
  },

  {
    title: "product 2",

    price: 20,
  },

  {
    title: "product 3",

    price: 30,
  },

  {
    title: "product 4",

    price: 40,
  },

  {
    title: "product 5",

    price: 50,
  },
];
const showBtn = document.querySelector(".show-products");
const gallery = document.querySelector(".gallery");

showBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let item of products) {
    const card = document.createElement("div");
    card.className = "card";

    // add title, price, and button
    card.innerHTML = `
      <div class="title">${item.title}</div>
      <div class="price">₹${item.price}</div>
      <button>Add to Cart</button>
    `;

    gallery.append(card);
  }
});
