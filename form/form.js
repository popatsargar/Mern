const users = [];

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const user = {};
    user.name = document.querySelector("input[type=text]").value;
    user.mobile = document.querySelector("input[type=number]").value;
    user.gender = document.querySelector("input[name=gender]:checked")?.value;
    user.isTncAgreed  = document.querySelector("input[type=checkbox]")?.checked;
    user.city = document.querySelector("#city")?.value;

    users.push(user);
    console.log(users);
})