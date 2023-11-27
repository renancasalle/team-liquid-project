const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14]
const title = document.getElementById("titleQuestion")
const screen = document.querySelector(".screen")

const alt1 = document.getElementById("alt1")
const alt2 = document.getElementById("alt2")
const alt3 = document.getElementById("alt3")
const alt4 = document.getElementById("alt4")

const A = document.getElementById("buttonA")
const B = document.getElementById("buttonB")
const C = document.getElementById("buttonC")
const D = document.getElementById("buttonD")

let time = 0
let timer;

function checkAnswer(element){

    const answer =  element.getAttribute("data-answer");
    const numberQuestion = Number(element.getAttribute("data-question"))
    const endgame = document.querySelector(".endgame")

    // quiz inicia a partir do momento em que o usuario aperta o botao correto.
    timer = setInterval(function () {
        time++
        
    }, 1000);

    if(numberQuestion == 0 && answer == questions[numberQuestion].answers){
        endgame.classList.add("active")
        screen.classList.add("active")

        endgame.innerHTML += time



        //screen.innerHTML = `<img src="assents/png/liquid-bicampea.jpeg">`
       // screen.innerHTML += time

        clearInterval(timer);
    }else if (answer == questions[numberQuestion].answers){
        nextQuestion(numberQuestion + 1);
    }else{
        questionError()
    }
}

function nextQuestion(numberQuestion){
    title.innerHTML = questions[numberQuestion].question

    alt1.innerHTML  = questions[numberQuestion].alt1
    alt2.innerHTML = questions[numberQuestion].alt2
    alt3.innerHTML = questions[numberQuestion].alt3
    alt4.innerHTML = questions[numberQuestion].alt4


    A.setAttribute("data-question", numberQuestion)
    B.setAttribute("data-question", numberQuestion)
    C.setAttribute("data-question", numberQuestion)
    D.setAttribute("data-question", numberQuestion)
}
function questionError(){
    alert("Voce perdeu!");

    resetGame();
}
function resetGame(){

    title.innerHTML = "Em que ano foi criada a Team Liquid?"; 

    alt1.innerHTML  = questions[0].alt1
    alt2.innerHTML = questions[0].alt2
    alt3.innerHTML = questions[0].alt3
    alt4.innerHTML = questions[0].alt4

    A.setAttribute("data-question", 0)
    B.setAttribute("data-question", 0)
    C.setAttribute("data-question", 0)
    D.setAttribute("data-question", 0)
}

