const button = document.querySelector("button");
const modal = document.getElementById("modal");
const textoModal = document.getElementById("textoModal"); 
const buttonClose = document.querySelector("dialog button")

function realizarCadastro() {
    var re = /\S+@\S+\.\S+/;
    var email = input_email.value;
    var password = input_password.value;
    var confirmPassword = input_confirmPassword.value;
    var emailTest = re.test(email);

    if (!emailTest) {
        openModal("tmj")
    } else if (password == "" || confirmPassword == "") {
        alert("É necessário preencher todos os campos");
    } else if (password != confirmPassword) {
        alert("As senhas não coincidem.");
    } else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
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