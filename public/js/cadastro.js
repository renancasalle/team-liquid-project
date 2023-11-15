function realizarCadastro(){
    var re = /\S+@\S+\.\S+/;
    var email = input_email.value
    var password = input_password.value
    var confirmPassword = input_confirmPassword.value
    var emailTest = re.test(email)

    if(!emailTest){
        alert("Insira um E-mail válido.")
    }else if(password == "" || confirmPassword == ""){
        alert("É necessário preencher todos os campos")
    }else if(password != confirmPassword){
        alert("As senhas não coincidem.")
    }else{
        alert("Cadastro realizado com sucesso!")
        window.location.href = "login.html"
    }
}
function returIndex(){
    window.location.href = "index.html"
}