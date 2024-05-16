const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    window.location.href = "./main-game.html"; // Redireciona para a página do jogo (main-game.html)
});

// Função para recolher o score final da partida
function getFinalScore() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    if (score !== null) {
        return score;
    }
    return '---'; // Retorna '---' se o score não estiver presente na URL
}

// Função para atualizar o score no final de cada partida
function updateScore() {
    const finalScore = getFinalScore();
    const currentScoreElement = document.getElementById('current-score');
    if (currentScoreElement) {
        currentScoreElement.textContent = `Score: ${finalScore}`; // Atualiza o conteúdo do elemento com o score final

        // Atualiza o best score
        let bestScore = localStorage.getItem('bestScore');
        if (bestScore === null || parseInt(finalScore) > parseInt(bestScore)) {
            bestScore = finalScore;
            localStorage.setItem('bestScore', bestScore);
        }
        
        const bestScoreElement = document.getElementById('best-score');
        if (bestScoreElement) {
            bestScoreElement.textContent = `Best Score: ${bestScore !== '---' ? bestScore : '---'}`;
        }
    }
}

// Chama a função para atualizar o score quando a página é carregada
window.addEventListener('load', updateScore);