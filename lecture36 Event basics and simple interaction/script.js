// creating element
const h3Element = document.createElement("h3");

h3Element.textContent = "hi, i'm a h3 element";

const div1 = document.querySelector("div");
div1.appendChild(h3Element);

const h3Element1 = document.querySelector("h3");

//events in dom

const para1 = document.querySelector("p");
para1.addEventListener("click",(event)=>{
    // console.log("you have clicked a para");
    para1Clicked(event);
});

function para1Clicked (event){
    h3Element.remove();
    console.log("you have clicked a para",event.type);
    
}

const h1element = document.querySelector("h1");
h1element.addEventListener("mouseover",(event)=>{
    mouse1Over(event);
});
function mouse1Over (event){
    h1element.style.background="red";
    console.log("you have hour on h1 tag", event.type);
    
}
const h2element = document.querySelector("h1");
h2element.addEventListener("mouseup",(event)=>{
    mouse2up(event);
});
function mouse2up (event){
    h2element.style.background="red";
    console.log("you have hour on h1 tag", event.type);
    
}
const h3element = document.querySelector("h1");
h3element.addEventListener("mousedown",(event)=>{
    mouse3down(event);
});
function mouse3down (event){
    h3element.style.background="yellow";
    console.log("you have hour on h1 tag", event.type);
    
}
const h4element = document.querySelector("h3");
h4element.addEventListener("keydown",(event)=>{
    keyDown(event);
});
// function keyDown (event){
//     h4element.style.background="red";
//     console.log("you have hour on h1 tag"+ event.key);
    
// }

document.addEventListener("keydown",(event)=>{
    console.log("event type:"+ event.key);
    console.log("event type:"+ event.keyCode);
    
    
});