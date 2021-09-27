const socket = io();

let form = document.querySelector("form");
let input = document.querySelector(".cm1");
let meeseage = document.querySelector(".mnko");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("moodi",{
        meeseage:input.value,
        name:localStorage.getItem("name"),
    });
    input.value="" 
}
});
socket.on("moodi",(data)=>{
    console.log(data);
     if(data.name===localStorage.getItem("name")){
        meeseage.innerHTML+=`<p style="text-align: end;"><span>${data.name}</span>   :    ${data.meeseage}</p>`
     }else{
        meeseage.innerHTML+=`<p>${data.meeseage}: <span style="color: gold;">${data.name}</span></p> `

     }
})


