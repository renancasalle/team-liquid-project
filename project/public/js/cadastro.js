const button = document.querySelector("button");
const modal = document.getElementById("modal");
const textoModal = document.getElementById("textoModal"); 
const buttonClose = document.querySelector("dialog button")

function realizarCadastro() {
    let re = /\S+@\S+\.\S+/;
    let email = input_email.value;
    let password = input_password.value;
    let confirmPassword = input_confirmPassword.value;
    let nick = input_nick.value
    let emailTest = re.test(email);

    if (!emailTest) {
        openModal("<b>Insira um E-mail válido.</b>")
    } else if (nick.length < 3){
        openModal("<b>Insira um Nickname válido.</b>")
    } else if (password == "" || confirmPassword == "") {
       openModal("<b>É necessário preencher todos os campos</b>");
    } else if (password != confirmPassword) {
        openModal("<b>As senhas não coincidem.</b>");
    } else if (password.length < 8 || confirmPassword.length < 8){
        openModal("<b> A senha tem que ter no minimo 8 caracteres")
    } else {
        fetch("usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
               emailServer: email,
               senhaServer: password,
               nickServer: nick
            }),
        })
         .then(function (resposta) {

            if (resposta.ok) {
                    window.location.href = "login.html"
            }else{
                openModal("Houve um erro ao tentar realizar o cadastro!")
            }
         })
    }
}

function returIndex() {
    window.location.href = "index.html";
}
function openModal(texto){
    modal.classList.add("active");
    textoModal.innerHTML = texto

}
function closeModal(){
    modal.classList.remove("active");
}























//button.onclick = function(){
//    modal.show()
//}
//buttonClose.onclick = function(){
//    modal.close()
//}
//button.addEventListener("click", showModal)

//function showModal(texto) {
//    modal.style.display = 'block'; 
 //   textoModal.innerHTML = texto;
//}