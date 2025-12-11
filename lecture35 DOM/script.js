        console.log(window.document.body);
        console.log(document.body);
        console.log(document.body.childNodes);
        console.log(document.body.children);
        console.log(document.body.firstChild);
        console.log(document.body.firstElementChild);

        console.log(document.querySelector('div'));
        console.log(document.querySelectorAll("div"));
        console.log(document.querySelector(".first-div-child"));
        console.log(document.querySelector("#second-div"));
        console.log(document.querySelector("div.first-div"));
        console.log(document.querySelector("div#second-div"));
        
        console.log(document.getElementsByClassName("first-div-child"));
        console.log(document.getElementById("second-div"));
        console.log(document.getElementsByTagName("div"));

        const para = document.querySelector("p");
        console.log(para);

        para.style.color="blue";
        para.style.backgroundColor="yellow";
        para.style.padding="15px";
        para.style.border="1px solid black";
        para.style.borderRadius="15px";

        const imageElement = document.querySelector("img");
        imageElement.setAttribute("src", "photo1.jpg");

        const divElement = document.querySelector(".first-div");
        divElement.setAttribute("data-price","hi i'm frontend developer");
        

        console.log(para.innerHTML);
        console.log(para.textContent);

        // para.innerHTML = "<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam.</strong>";
        para.innerHTML = `<strong>${para.textContent}</strong>`;
        const secondPara = document.querySelector(".second-para");
        console.log(secondPara.textContent);
        secondPara.textContent = "this is new content";
        //  const sectionElement = document.querySelector(".class1");
        //  console.log(sectionElement);
        // const classes = sectionElement.className.split(" ");
        // classes.splice(2,1);
        // sectionElement.className = classes.join(" ");
         
        const sectionElementCopy = document.querySelector(".class1");
        console.log(sectionElementCopy.classList);
        sectionElementCopy.classList.add("class5");
        console.log(sectionElementCopy);
        sectionElementCopy.classList.remove("class5");
        console.log(sectionElementCopy);
        sectionElementCopy.classList.toggle("5");
        console.log(sectionElementCopy);
        
        
        
        