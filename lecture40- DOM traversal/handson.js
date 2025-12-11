const child = document.querySelector(".child");
console.log("Parent of .child:", child.parentElement);

const parent = document.querySelector(".parent");
console.log("Parent of .parent:", parent.parentElement);

const grandParent = document.querySelector(".grand-parent");
console.log("Parent of .grand-parent:", grandParent.parentElement);

console.log("Body parent:", document.body.parentElement);
console.log("HTML parent:", document.body.parentElement.parentElement);

console.log("Closest div from .child:", child.closest("div"));
console.log("Closest .parent from .child:", child.closest(".parent"));

let element = child;
while (element.parentElement !== document.body) {
  element = element.parentElement;
}

element.classList.add("accio");
console.log("Element just below body:", element);
console.log(element.tagName, element.parentElement.tagName);

const parent2 = document.querySelector(".parent2");
console.log("childNodes:", parent2.childNodes); // includes text nodes
console.log("children:", parent2.children); // only elements
console.log("Second child:", parent2.children[1]);

document.body.children[0].classList.add("new-class");

for (let child of parent2.children) {
  console.log("Class of child:", child.className);
}

const secondChild = parent2.children[1];
console.log("Previous sibling:", secondChild.previousElementSibling);
console.log("Next sibling:", secondChild.nextElementSibling);

console.log(
  [...secondChild.parentElement.children].filter((ele) => ele !== secondChild)
);

const deleteBtn = document.querySelector(".delete");

deleteBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  deleteBtn.closest(".card").remove();
});

const randomSixDigit = Math.floor(100000 + Math.random() * 900000);
console.log("Random 6-digit:", randomSixDigit);

const sampleCell = document.querySelector("td");
console.log("td → parent row:", sampleCell.parentElement);
console.log("td → table body:", sampleCell.parentElement.parentElement);
console.log("td.closest('table'):", sampleCell.closest("table"));
console.log("td previous sibling:", sampleCell.previousElementSibling);
console.log("td next sibling:", sampleCell.nextElementSibling);
console.log("all siblings:", [...sampleCell.parentElement.children]);

const nestedChild = document.querySelector(".nested-child");
console.log("nested child element:", nestedChild);
console.log("nested child → parent li:", nestedChild.parentElement);
console.log("nested child → parent ul:", nestedChild.closest("ul"));
console.log(
  "nested child siblings:",
  [...nestedChild.parentElement.children].filter((li) => li !== nestedChild)
);

const firstBodyChild = document.body.firstElementChild;
firstBodyChild.classList.add("new-class");
console.log("First body child:", firstBodyChild);
