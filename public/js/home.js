
var curiosities = ["Os fãs da Team Liquid são frequentemente chamados de 'Liquidians' ou 'Liquid Fans'. Esse apelido carinhoso destaca a forte comunidade de torcedores que se desenvolveu em torno da equipe ao longo dos anos.",

"A Team Liquid mantém uma equipe feminina de Counter-Strike: Global Offensive, demonstrando seu compromisso com a inclusão e o apoio ao crescimento do cenário competitivo feminino nos esportes eletrônicos.",

"A Team Liquid foi uma das organizações de esportes eletrônicos convidadas a participar da edição inaugural dos Jogos Olímpicos Virtuais em 2018. Esse convite destacou o reconhecimento dos esportes eletrônicos em eventos de prestígio",

"A Team Liquid entrou no cenário competitivo de Valorant e rapidamente alcançou destaque. Sua equipe de Valorant conquistou várias vitórias e é considerada uma das principais equipes na competição desse jogo tático da Riot Games.",

"A Team Liquid é uma organização de esportes eletrônicos que participa em diversas modalidades, incluindo League of Legends, Dota 2, Counter-Strike: Global Offensive, Rainbow Six Siege, e muitos outros.",

"A Team Liquid foi fundada em 2000 na Holanda por Victor 'Nazgul' Goossens. Inicialmente, a organização focava em StarCraft, mas expandiu significativamente ao longo dos anos.",

"A Team Liquid alcançou a fama internacional em 2017 ao vencer o The International 7, um dos maiores torneios de Dota 2. Eles se tornaram os campeões e conquistaram um prêmio significativo.",

]
window.addEventListener("load", generate)
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
