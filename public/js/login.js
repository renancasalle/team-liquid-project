function realizarLogin(){
    var email = input_email.value
    var senha = input_password.value 

    if(email == `renan@gmail.com` && senha == `123`){
        window.location.href = "home.html"
    }else if(email = "" || senha == ""){
        alert("E-mail ou senha não preenchidos corretamente")
    }else{
        alert("E-mail ou senha incorretos")
    }
}
function returIndex(){
    window.location.href = "index.html"
}