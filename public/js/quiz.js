const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9]
const title = document.getElementById("titleQuestion")

const alt1 = document.getElementById("alt1")
const alt2 = document.getElementById("alt2")
const alt3 = document.getElementById("alt3")
const alt4 = document.getElementById("alt4")


const A = document.getElementById("buttonA")
const B = document.getElementById("buttonB")
const C = document.getElementById("buttonC")
const D = document.getElementById("buttonD")

function checkAnswer(element){
    var answer =  element.getAttribute("data-answer");
    var numberQuestion = Number(element.getAttribute("data-question"))

    if(answer == questions[numberQuestion].answers){
        nextQuestion(numberQuestion + 1);
    }else {
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
    // Adicione a lógica para reiniciar o jogo, como redefinir variáveis, reiniciar a pontuação, etc.
    // Por exemplo:
    title.innerHTML = "Em que ano foi criada a Team Liquid?"; // Defina o título de volta para o início

    alt1.innerHTML  = questions[0].alt1
    alt2.innerHTML = questions[0].alt2
    alt3.innerHTML = questions[0].alt3
    alt4.innerHTML = questions[0].alt4

}