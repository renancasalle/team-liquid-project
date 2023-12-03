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

