const wra = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const register  = document.querySelector(".register-link");
const close = document.querySelector(".close-icon")
const loginb = document.querySelector(".button");

login.addEventListener('click',()=>{
    wra.classList.remove("active");
})
register.addEventListener('click',()=>{
    wra.classList.add("active");
})

loginb.addEventListener("click",()=>{
    wra.classList.add("login-page")
})
close.addEventListener('click', ()=>{
    wra.classList.remove("login-page")
})

