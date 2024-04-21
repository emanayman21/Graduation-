

let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#Sign-Up")

let show = document.getElementById("show")

registerBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value ==="" || email.value === "" || password.value === ""){
        alert("يرجي تكملت البيانات المطلوبة")
    }else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(() => {
            window.location = "login.html"
        } , 1500)
    }
   
})

show.onchange = function(){
     password.type = show.checked ? "test" : "password"
}
