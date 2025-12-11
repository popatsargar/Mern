let outerDiv = document.querySelector(".outer-div");
let innerDiv = document.querySelector(".inner-div");
let h1Tag = document.querySelector("h1");

outerDiv.addEventListener('click',function(){
    console.log('outer div clicked');
},true);
innerDiv.addEventListener('click',function(){
    console.log('inner div clicked');
},true);
h1Tag.addEventListener('click',function(){
    
    console.log('h1 tag clicked');
},true);