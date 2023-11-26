const modal = document.getElementById("modal");
const avaliable = document.querySelector(".avaliable")
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

    if (star = ""){
        alert("É necessário avaliar o quiz para")
    }else if(star == 1){
        avaliable.innerHTML += `
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        `
    
    }else if(star == 2){
        avaliable.innerHTML += `
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        `
    }else if(star == 3){
        avaliable.innerHTML -= `
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/13595-removebg-preview.svg" />
        <img src="assents/svg/13595-removebg-preview.svg" />
        `
    }else if(star == 4){
        avaliable.innerHTML = `
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/13595-removebg-preview.svg"
        `
    }else{
        avaliable.innerHTML = `
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        <img src="assents/svg/imagem_2023-11-25_231041864-removebg-preview.svg">
        `
    }
}

window.addEventListener("load", openModal);