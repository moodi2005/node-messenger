let form = document.querySelector("form");
let input = document.querySelector(".ms7");
form.addEventListener("submit",(e)=>{
    localStorage.setItem('name',input.value);
    window.location.replace("chat.html");
    e.preventDefault();
 })
