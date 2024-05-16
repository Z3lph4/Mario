const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score');
document.body.appendChild(scoreDisplay);

// Adicionando o elemento de áudio para o som do pulo
const jumpSound = document.getElementById('jump-sound');

// Adicionando o elemento de áudio para o som de derrota
const loseSound = document.getElementById('lose-sound');

let score = 0;

// Posiciona o display da pontuação no canto superior direito
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '20px';
scoreDisplay.style.right = '50px';
scoreDisplay.style.color = 'red'; // Altera a cor do texto para vermelho

const jump = () => {
    jumpSound.currentTime = 0; // Reinicia o som se já estiver tocando
    jumpSound.play(); // Reproduz o som do pulo

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        // Reproduz o som de derrota
        loseSound.play();

        // Redireciona para a página inicial após um breve atraso
        setTimeout(() => {
            window.location.href = "./index.html?score=" + score; // Passa o score final na URL
        }, 2000);

    } else {
        score++; // Incrementa a pontuação a cada loop bem-sucedido
        scoreDisplay.textContent = `Score: ${score}`; // Atualiza o display da pontuação
    }

}, 10);

document.addEventListener('keydown', jump);