var curiosities = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",

"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",

"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
]

function generate(){ 
    curiosity.innerHTML = ""
    var aleatorio = parseInt(Math.random() * 3)
    var i = 0
    
    while(i < curiosities.length){
        curiosity.innerHTML = curiosities[aleatorio]

        i++
    }
    
    
    }
    
    function abrirQuiz(){
        window.location.href= "quiz.html"
    }
