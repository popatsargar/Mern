const child= document.querySelector(".child");
console.log(child.parentElement);

const parent = document.querySelector(".parent");
console.log(parent.parentElement);


const grandParent = document.querySelector(".grand-parent");
console.log(grandParent.parentElement);


console.log(document.body.parentElement);
console.log(document.body.parentElement.parentElement);

console.log(child.closest("div"));
console.log(child.closest("parent"));


//child.parentElement.parentElement.parentElement; 
 
 
// const greatGrandParent = document.querySelector(".great-grand-parent");

// console.log(greatGrandParent.parentElement);
// greatGrandParent.classList.add("accio");
// console.log(greatGrandParent)
let element = child;

while (element.parentElement!==document.body){
    element=element.parentElement;
}
element.classList.add("accio");
console.log(element);

console.log(element.tagName, element.parentElement.tagName);



const parent2 = document.querySelector(".parent2");
console.log(parent2.childNodes);
console.log(parent2.children);

console.log(parent2.children[1]);

document.body.children[0].classList.add("new-class");

for (let child of parent2.children){
    console.log(child.className);
    
}



const secondChild = parent2.children[1];
console.log("prev sibling: ", secondChild.previousElementSibling);
console.log("next sibling: ", secondChild.nextElementSibling);

// printing all the sibling elements of secondChild
 

// for (let child of parent2.children) {
 
//         console.log("Sibling:", child);
//     }
console.log(
    [...secondChild.parentElement.children].filter(
        (child)=>child!=secondChild
    )
);

 
const deleteBtn = document.querySelector(".delete");
 
deleteBtn.addEventListener("click", (e)=> {
    e.preventDefault();
   deleteBtn.closest(".card").remove();
});


const randomSixDigit = Math.floor(100000 + Math.random() * 900000);

console.log(randomSixDigit);


//hw->try all the properties of children, parent, siblings, closest() on table (pick one cell, and try to navigate (or start) from here) & nested lists


// const firstChild = document.body.firstElementChild;
// firstChild.classList.add("new-class");
// console.log(firstChild);

