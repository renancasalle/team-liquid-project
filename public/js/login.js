const button = document.querySelector("button");
const modal = document.getElementById("modal");
const textoModal = document.getElementById("textoModal"); 
const buttonClose = document.querySelector("dialog button")

function realizarLogin() {
    var re = /\S+@\S+\.\S+/;
    var email = input_email.value;
    var password = input_password.value;
    var emailTest = re.test(email);

    if (!emailTest) {
        openModal("<b>Insira um E-mail válido.</b>")
    } else if (password != 12345678 || password.length < 8) {
        openModal("<b>Senha incorreta.</b>");
    } else {
        openModal("<b>Login realizado com sucesso!</b>");
        window.location.href = "home.html";
    }
}

function returIndex(){
    window.location.href = "index.html"
}
function openModal(texto){
    modal.classList.add("active");
    textoModal.innerHTML = texto

}
function closeModal(){
    modal.classList.remove("active");
}