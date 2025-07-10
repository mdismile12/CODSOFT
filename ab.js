let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("mouseover",() => {
    btn.style.backgroundColor = "#e6740a";
    btn.style.color = "balck"

});
btn.addEventListener("mouseout",() => {
    btn.style.backgroundColor = "aqua";
    btn.style.color = "black"
    

});
btn.addEventListener("click",() => {
    window.location.href="portfoli.html";
    console.log("going to home page");

});

let h = document.querySelector("h1");

h.addEventListener("mouseover",() =>{
    h.innerText = "YES!! ITS ALL ABOUT ME";
    h.style.backgroundColor = "pink";
});

h.addEventListener("mouseout",() =>{
    h.innerText = "ABOUT ME";
    
});
let h2 = document.querySelector("h2");
h2.addEventListener("mouseover",() =>{
    
    h2.style.backgroundColor = "red";

});

h2.addEventListener("mouseout",() =>{
    h2.style.backgroundColor = "white";
    
});

