
var curiosities = ["Os fãs da Team Liquid são frequentemente chamados de 'Liquidians' ou 'Liquid Fans'. Esse apelido carinhoso destaca a forte comunidade de torcedores que se desenvolveu em torno da equipe ao longo dos anos.",

"A Team Liquid mantém uma equipe feminina de Valorant, demonstrando seu compromisso com a inclusão e o apoio ao crescimento do cenário competitivo feminino nos esportes eletrônicos.",

"A Team Liquid foi uma das organizações de esportes eletrônicos convidadas a participar da edição inaugural dos Jogos Olímpicos Virtuais em 2018. Esse convite destacou o reconhecimento dos esportes eletrônicos em eventos de prestígio",

"A Team Liquid entrou no cenário competitivo de Valorant e rapidamente alcançou destaque. Sua equipe de Valorant conquistou várias vitórias e é considerada uma das principais equipes na competição desse jogo tático da Riot Games.",

"A Team Liquid é uma organização de esportes eletrônicos que participa em diversas modalidades, incluindo League of Legends, Dota 2, Counter-Strike: Global Offensive, Rainbow Six Siege, e muitos outros.",

"A Team Liquid foi fundada em 2000 na Holanda por Victor 'Nazgul' Goossens. Inicialmente, a organização focava em StarCraft, mas expandiu significativamente ao longo dos anos.",

"A Team Liquid alcançou a fama internacional em 2017 ao vencer o The International 7, um dos maiores torneios de Dota 2. Eles se tornaram os campeões e conquistaram um prêmio significativo.",

"A Team Liquid tem uma forte presença no cenário de StarCraft, com muitos jogadores talentosos. Eles mantêm uma equipe desde o início dos anos 2000 e continuam sendo uma força competitiva.",

"Em 2019, a Team Liquid anunciou uma parceria com a Marvel Entertainment para criar roupas temáticas e conteúdo exclusivo, tornando-se uma das primeiras equipes de esportes eletrônicos a colaborar com a renomada empresa de entretenimento.",

"A equipe de Counter-Strike: Global Offensive da Team Liquid é considerada uma das melhores do mundo. Eles conquistaram diversos títulos e consistentemente competem no mais alto nível.",

"Além de sua presença na América do Norte, a Team Liquid expandiu suas operações para outras regiões, incluindo Europa e América do Sul, garantindo uma base global de fãs.",

"Ao longo dos anos, a Team Liquid recebeu vários prêmios e reconhecimentos da indústria de esportes eletrônicos, solidificando sua posição como uma das organizações mais respeitadas e bem-sucedidas no cenário global."
]

window.addEventListener("load", generate)

function generate(){ 
    curiosity.innerHTML = ""
    var aleatorio = parseInt(Math.random() * 12)
    var i = 0
    
    while(i < curiosities.length){
        curiosity.innerHTML = curiosities[aleatorio]

        i++
    }
    
    
    }
    function openQuiz(){
        window.location.href= "quiz.html"
    }
    function viewData(){
        window.location.href = "analytics.html"
    }
