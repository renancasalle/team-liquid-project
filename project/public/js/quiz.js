// declaração de constantes que serão usadas peridodicamente 
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

const idUsuario = Number(sessionStorage.getItem("idUsuario"))

let second = 0;
let minute = 0;
let timer;

// função que chega as questões
function checkAnswer(element){

    const answer =  element.getAttribute("data-answer");
    const numberQuestion = Number(element.getAttribute("data-question"))
    const endgame = document.querySelector(".endgame")

    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")



// quiz inicia a partir do momento em que o usuario aperta o botao correto.
    timer = setInterval(function () {
        second++
        
    if (second === 60){
        minute++
        second = 0
    }}, 1000);

    minutes.innerHTML = formatTime(minute);
    seconds.innerHTML = formatTime(second);
    
    if(numberQuestion == 2 && answer == questions[numberQuestion].answers){

        endgame.classList.add("active")
        screen.classList.add("active")

        clearTimeout(timer);

        var formattedTime = `00:${formatTime(minute)}:${formatTime(second)}`;

        fetch(`pontuacao/registrar/${idUsuario}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
               timeServer: formattedTime
            })
    }).then(res => {
        console.log(res);
    })
console.log(formattedTime);

fetch(`/pontuacao/exibir`)
    .then(res => {
        res.json().then(res => {
            result.innerHTML = "<h2>Ranking</h2?<br><br>"
            for(var i = 0; i < 5; i++){
                result.innerHTML += `<div>${i+1}º ${res[i].nickname}: ${res[i].tempo}</div>`
            }
        })
    });
 
   
    }else if (answer == questions[numberQuestion].answers){
        nextQuestion(numberQuestion + 1);
    }else{
        questionError()
    }
}

// função para formatar cronometro 
function formatTime(time){
    return time < 10 ? `0${time}` : time
}

// função para alterar as questões caso a resposta anterior estiver correta
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

// função caso o usuário tenha errado a questão
function questionError(){
    alert("Voce perdeu!");

    resetGame();
}

// função para reiniciar o jogo
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

