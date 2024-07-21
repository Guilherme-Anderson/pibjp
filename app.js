const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const player = document.querySelector(".audioPlayer")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (player.style.display === "none") {
        setTimeout(() => {
            player.style.display = "block";
        }, 400); // 1000ms = 1 segundo
    } else {
        player.style.display = "none";
    }
});


function escondermusica(musicNumber) {
    var paragraphs = document.getElementById("musica-" + musicNumber);
    
    if (paragraphs.style.display === "none") {
        paragraphs.style.display = "block";
    } else {
        paragraphs.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", function() {
    function toggleMusic(musicNumber) {
        var audio = document.getElementById("myAudio" + musicNumber);
        var button = document.getElementById("musicButton" + musicNumber);

        if (audio) { // Verifica se o elemento de áudio existe
            // Pause all other audios
            for (var i = 1; i <= 3; i++) {
                if (i !== musicNumber) {
                    var otherAudio = document.getElementById("myAudio" + i);
                    var otherButton = document.getElementById("musicButton" + i);
                    if (otherAudio) {
                        otherAudio.pause();
                        if (otherButton) {
                            otherButton.textContent = "Tocar Música " + i;
                        }
                    }
                }
            }

            if (audio.paused) {
                audio.play();
                button.textContent = "Parar Música " + musicNumber;
            } else {
                audio.pause();
                button.textContent = "Tocar Música " + musicNumber;
            }
        } else {
            console.error("Elemento de áudio com id 'myAudio" + musicNumber + "' não encontrado.");
        }
    }

    // Exponha a função toggleMusic globalmente
    window.toggleMusic = toggleMusic;
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");
    var errorMessage = document.getElementById("errorMessage");
    var correctPassword = "senha123"; // Defina a senha correta aqui

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio do formulário

        var password = document.getElementById("password").value;

        if (password === correctPassword) {
            window.location.href = "/grupos/coral.html"; // Redireciona para a página de sucesso
        } else {
            errorMessage.classList.remove("hidden"); // Exibe a mensagem de erro
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var musicLists = {
        tenor: [
            { name: "1- O Motivo do Natal", file: "/grupos/musicas/tenor/1-O-Motivo-do-Natal.mp3" },
            { name: "2- Bentita Luz", file: "/grupos/musicas/tenor/2-Bendita-Luz.mp3" },
            { name: "3- Um Novo Coração", file: "/grupos/musicas/tenor/3-Um-Novo-Coracao.mp3" },
            { name: "4- Glórias a Deus", file: "/grupos/musicas/tenor/4-Glorias-a-Deus.mp3" },
            { name: "5- Vem Reinar em Mim", file: "/grupos/musicas/tenor/5-Vem-Reinar-em-Mim.mp3" },
            { name: "6- Estrela de Davi", file: "/grupos/musicas/tenor/6-Estrela-de-Davi.mp3" },
            { name: "7- Pode Entrar", file: "/grupos/musicas/tenor/7-Pode-Entrar.mp3" },
            { name: "8- Vem Habitar", file: "/grupos/musicas/tenor/8-Vem-Habitar.mp3" },
            { name: "9- O Motivo do Natal (Final)", file: "/grupos/musicas/tenor/9-O-Motivo-do-Natal-(Final).mp3" }
        ],
        contralto: [
            { name: "1- O Motivo do Natal", file: "/grupos/musicas/contralto/1-O-Motivo-do-Natal.mp3" },
            { name: "2- Bentita Luz", file: "/grupos/musicas/contralto/2-Bendita-Luz.mp3" },
            { name: "3- Um Novo Coração", file: "/grupos/musicas/contralto/3-Um-Novo-Coracao.mp3" },
            { name: "4- Glórias a Deus", file: "/grupos/musicas/contralto/4-Glorias-a-Deus.mp3" },
            { name: "5- Vem Reinar em Mim", file: "/grupos/musicas/contralto/5-Vem-Reinar-em-Mim.mp3" },
            { name: "6- Estrela de Davi", file: "/grupos/musicas/contralto/6-Estrela-de-Davi.mp3" },
            { name: "7- Pode Entrar", file: "/grupos/musicas/contralto/7-Pode-Entrar.mp3" },
            { name: "8- Vem Habitar", file: "/grupos/musicas/contralto/8-Vem-Habitar.mp3" },
            { name: "9- O Motivo do Natal (Final)", file: "/grupos/musicas/contralto/9-O-Motivo-do-Natal-(Final).mp3" }
        ],
        baixo: [
            { name: "1- O Motivo do Natal", file: "/grupos/musicas/baixo/1-O-Motivo-do-Natal.mp3" },
            { name: "2- Bentita Luz", file: "/grupos/musicas/baixo/2-Bendita-Luz.mp3" },
            { name: "3- Um Novo Coração", file: "/grupos/musicas/baixo/3-Um-Novo-Coracao.mp3" },
            { name: "4- Glórias a Deus", file: "/grupos/musicas/baixo/4-Glorias-a-Deus.mp3" },
            { name: "5- Vem Reinar em Mim", file: "/grupos/musicas/baixo/5-Vem-Reinar-em-Mim.mp3" },
            { name: "6- Estrela de Davi", file: "/grupos/musicas/baixo/6-Estrela-de-Davi.mp3" },
            { name: "7- Pode Entrar", file: "/grupos/musicas/baixo/7-Pode-Entrar.mp3" },
            { name: "8- Vem Habitar", file: "/grupos/musicas/baixo/8-Vem-Habitar.mp3" },
            { name: "9- O Motivo do Natal (Final)", file: "/grupos/musicas/baixo/9-O-Motivo-do-Natal-(Final).mp3" }
        ],
        soprano: [
            { name: "1- O Motivo do Natal", file: "/grupos/musicas/soprano/1-O-Motivo-do-Natal.mp3" },
            { name: "2- Bentita Luz", file: "/grupos/musicas/soprano/2-Bendita-Luz.mp3" },
            { name: "3- Um Novo Coração", file: "/grupos/musicas/soprano/3-Um-Novo-Coracao.mp3" },
            { name: "4- Glórias a Deus", file: "/grupos/musicas/soprano/4-Glorias-a-Deus.mp3" },
            { name: "5- Vem Reinar em Mim", file: "/grupos/musicas/soprano/5-Vem-Reinar-em-Mim.mp3" },
            { name: "6- Estrela de Davi", file: "/grupos/musicas/soprano/6-Estrela-de-Davi.mp3" },
            { name: "7- Pode Entrar", file: "/grupos/musicas/soprano/7-Pode-Entrar.mp3" },
            { name: "8- Vem Habitar", file: "/grupos/musicas/soprano/8-Vem-Habitar.mp3" },
            { name: "9- O Motivo do Natal (Final)", file: "/grupos/musicas/soprano/9-O-Motivo-do-Natal-(Final).mp3" }
        ]
    };

    var audioPlayer = document.getElementById("audioPlayer");
    var currentPlaying = null; // Guarda a música que está tocando

    window.selectVoice = function(voiceType) {
        console.log("Selecionada a voz: " + voiceType); // Mensagem de depuração
        var musicListDiv = document.getElementById("musicList");
        var voiceTypeSpan = document.getElementById("voiceType");
        var songsListUl = document.getElementById("songsList");

        if (!musicLists[voiceType]) {
            console.error("Lista de músicas não encontrada para a voz: " + voiceType); // Mensagem de erro
            return;
        }

        voiceTypeSpan.textContent = voiceType.charAt(0).toUpperCase() + voiceType.slice(1);
        songsListUl.innerHTML = ''; // Limpa a lista atual

        musicLists[voiceType].forEach(function(music) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = "#";
            a.textContent = music.name;
            a.onclick = function(event) {
                event.preventDefault(); // Evita o comportamento padrão do link
                playPauseMusic(music.file);
            };
            li.appendChild(a);
            songsListUl.appendChild(li);
        });

        musicListDiv.classList.remove("hidden");
    };

    function playPauseMusic(music) {
        console.log("Tentando tocar/pause a música: " + music); // Mensagem de depuração
        if (currentPlaying === music) {
            // Se a música clicada já está tocando, pausa a música
            if (!audioPlayer.paused) {
                audioPlayer.pause();
            }
            currentPlaying = null;
        } else {
            // Se uma nova música é clicada, pausa a música atual (se houver) e toca a nova
            if (currentPlaying) {
                audioPlayer.pause();
            }
            audioPlayer.src = music;
            audioPlayer.load(); // Certifique-se de carregar o novo áudio
            audioPlayer.play().catch(function(error) {
                console.error("Erro ao tentar tocar a música:", error);
            });
            currentPlaying = music;
        }
    }
});