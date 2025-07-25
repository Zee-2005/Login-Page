const wra = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const register  = document.querySelector(".register-link");
const close = document.querySelector(".close-icon")
const loginb = document.querySelector(".button");
const login_button = document.querySelector("#login-button");



login.addEventListener('click',()=>{
    wra.classList.remove("active");
})
register.addEventListener('click',()=>{
    wra.classList.add("active");
})

login_button.addEventListener('click', async (e)=> {    
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    try {
        const loginRes = await fetch("/user/login", 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            }
        );
        const data = await loginRes.json();
        if(!loginRes.ok){
            alert(data.error);
            return;
        }
        const token = data.token;

        const contentRes = await fetch("/content", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        const contentData = await contentRes.json();
        alert(contentData.message);
        

    } catch (error) {
        console.error('error:', error);
        alert("something went wrong");
    }

})

loginb.addEventListener("click",()=>{
    wra.classList.add("login-page")
})
close.addEventListener('click', ()=>{
    wra.classList.remove("login-page")
})

