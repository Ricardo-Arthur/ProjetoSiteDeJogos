
var jogos = [
    { nome: "STACK SMASH", genero: "Ação", link: "https://play.famobi.com/wrapper/stack-smash/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/StackSmashTeaser.jpg" },
    { nome: "OM NOM RUN", genero: "Ação", link: "https://play.famobi.com/wrapper/om-nom-run/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomRunTeaser.jpg" },
    { nome: "PEET A LOCK", genero: "Ação", link: "https://play.famobi.com/wrapper/peet-a-lock/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/PeetALockTeaser.jpg" },
    { nome: "CUBITO", genero: "Ação", link: "https://play.famobi.com/wrapper/cubito/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/CubitoTeaser.jpg" },
    { nome: "COLLOR TUNNEL", genero: "Ação", link: "https://play.famobi.com/wrapper/color-tunnel/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorTunnelTeaser.jpg" },
    { nome: "RAMP", genero: "Ação", link: "https://play.famobi.com/wrapper/ramp/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/RampTeaser.jpg?v=0.2-f6c34466" },

    //Ação//
    { nome: "DRIFT DUDES", genero: "Esportes", link: "https://play.famobi.com/wrapper/drift-dudes/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/DriftDudesTeaser.jpg" },
    { nome: "PENALTY CUP", genero: "Esportes", link: "https://play.famobi.com/wrapper/euro-penalty-cup-2021/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/EuroPenaltyCup2021Teaser.jpg?v=0.2-f6c34466" },
    { nome: "BASKET-BALL", genero: "Esportes", link: "https://play.famobi.com/wrapper/3d-basketball/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dBasketballTeaser.jpg" },
    { nome: "BLAZE KICK", genero: "Esportes", link: "https://play.famobi.com/wrapper/blaze-kick/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/BlazeKickTeaser.jpg" },
    { nome: "AIR HOCKEY", genero: "Esportes", link: "https://play.famobi.com/wrapper/3d-air-hockey/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dAirHockeyTeaser.jpg" },
    { nome: "BOWLING", genero: "Esportes", link: "https://play.famobi.com/wrapper/3d-bowling/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dBowlingTeaser.jpg" },

    //Puzzles//
    { nome: "Tile Journey", genero: "Puzzles", link: "https://play.famobi.com/wrapper/tile-journey/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/TileJourneyNewTeaser.jpg"},
    { nome: "Emoji match", genero: "Puzzles", link: "https://play.famobi.com/wrapper/emoji-match/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/EmojiMatchTeaser.jpg"},
    { nome: "Words o Wonders", genero: "Puzzles", link: "https://play.famobi.com/wrapper/words-of-wonders/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/WordsOfWondersTeaser.jpg"},
    { nome: "Emoji Flow", genero: "Puzzles", link: "https://play.famobi.com/wrapper/emoji-flow/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/EmojiFlowTeaser.jpg"},
    { nome: "Popit Duel", genero: "Puzzles", link: "https://play.famobi.com/wrapper/pop-it-duel/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/PopItDuelTeaser.jpg" },
    { nome: "DICES 2048 3D", genero: "Puzzles", link: "https://play.famobi.com/wrapper/dices-2048-3d/A1000-10", imagem: "https://img.cdn.famobi.com/portal/html5games/images/tmp/Dices20483dTeaser.jpg" },

    ////
    { nome: "", genero: "", link: "", imagem: "" },
    { nome: "", genero: "", link: "", imagem: "" },
    { nome: "", genero: "", link: "", imagem: "" },
    { nome: "", genero: "", link: "", imagem: "" },
    { nome: "", genero: "", link: "", imagem: "" },
    { nome: "", genero: "", link: "", imagem: "" },
];


 
const tipos = ["Ação", "Esportes", "Puzzles"];

const local = document.getElementById("local")

for (const tipo of tipos) {
    
    
   
    const fundo = document.createElement("div")
    fundo.classList.add("game-class")
    fundo.id = tipo
    const titulo = document.createElement("div")
    titulo.classList.add("class-title")
    titulo.textContent = "Jogos de "+ tipo
    fundo.appendChild(titulo)
    local.appendChild(fundo)

    const container = document.getElementById(tipo);
    for (const jogo of jogos) {
        if (jogo.genero === tipo) {
            const card = document.createElement("div");
            card.classList.add("game-box");

            const imagem = document.createElement("img");
            imagem.classList.add("game-image");
            imagem.src = jogo.imagem; // Caminho da imagem do jogo

            const link = document.createElement("a");
            link.classList.add("game-link");
            /*var url = new URL("iFrame_teste.html")
            url.searchParams.set("J",jogo.link )*/
            var url = encodeURIComponent(jogo.link)
            
            link.href = "iFrame_teste.html?J="+url; // Link do jogo

            const nomes = document.createElement("h3"); // Crie um elemento <h3> para o nome
            nomes.classList.add("game-name"); // Adicione a classe ao elemento <h3>
            nomes.textContent = jogo.nome; // Defina o texto do elemento <h3>

            const nome = document.createTextNode(jogo.nome);

            link.appendChild(imagem);
            link.appendChild(nomes);
            card.appendChild(link);
            container.appendChild(card);
        }
    }
}



// Função para atualizar a imagem com base na URL
function atualizarImagemComBaseNaURL() {
  var url = new URL(window.location.href);
  var imagemAtual = url.searchParams.get("imagem");
  
  if (imagemAtual && imagensPorURL[imagemAtual]) {
    var imagemElement = document.getElementById("imagem");
    imagemElement.src = imagensPorURL[imagemAtual];
  }
}

// Adiciona um ouvinte de clique à imagem
var imagemElement = document.getElementById("imagem");
imagemElement.addEventListener("click", function() {
  var url = new URL(window.location.href);
  var imagemAtual = url.searchParams.get("imagem");
  var proximaImagem = "imagem1.jpg"; // Padrão para a primeira imagem

  if (imagemAtual) {
    var imagens = Object.keys(imagensPorURL);
    var indexImagemAtual = imagens.indexOf(imagemAtual);
    if (indexImagemAtual !== -1) {
      var proximoIndex = (indexImagemAtual + 1) % imagens.length;
      proximaImagem = imagens[proximoIndex];
    }
  }

  url.searchParams.set("imagem", proximaImagem);
  history.pushState(null, null, url);

  atualizarImagemComBaseNaURL();
});

// Adiciona um ouvinte de popstate para detectar mudanças na URL
window.addEventListener("popstate", function(event) {
  atualizarImagemComBaseNaURL();
});

// Atualiza a imagem com base na URL atual ao carregar a página
atualizarImagemComBaseNaURL();
