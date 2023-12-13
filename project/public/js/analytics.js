const modal = document.getElementById("modal");
const avaliable = document.querySelector(".avaliable")

const idUsuario = Number(sessionStorage.getItem("idUsuario"))


function openModal() {
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

function selectStar(element) {
    let star = element.getAttribute("data-id");
    console.log(star);

    avaliable.innerHTML = ""

    
    if(star == 1){
        avaliable.innerHTML = `
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        `

    }else if(star == 2){
        avaliable.innerHTML = `
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        `
    }else if(star == 3){
        avaliable.innerHTML = `
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        `
    }else if(star == 4){
        avaliable.innerHTML = `
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_174126319-removebg-preview.svg">
        `
    }else{
        avaliable.innerHTML = `
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        <img src="assets/svg/imagem_2023-11-26_173813836-removebg-preview.svg">
        `
    }

    fetch(`/feedback/adicionar/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            starServer: star
        })
    })
}

window.addEventListener("load", openModal);

fetch(`/usuarios/puxar`)
    .then(function (resposta) {

    resposta.json().then(function (resposta){
        usuariosCadastrados.innerHTML = resposta[0].qtdNick
    })
 });

 fetch(`/pontuacao/contar`)
    .then(function (resposta) {

    resposta.json().then(function (resposta){
        quizIniciado.innerHTML = resposta[0].qtdTempo
    })

 })

 fetch(`/feedback/avaliacao`)
    .then(function (resposta) {

    resposta.json().then(function (resposta){
        avaliacoesMaximas.innerHTML = resposta[0].qtdFeedback
    })
 });

 fetch(`/feedback/verificar/${idUsuario}`)
    .then(function (resposta) {
    resposta.json().then(function (resposta){
        console.log(resposta)
        if(resposta.length > 0){
            modal.classList.remove("active"); 
        }else{
            modal.classList.add("active"); 
        }
    })
 });
