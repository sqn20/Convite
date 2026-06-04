// Elementos da página
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const letterContent = document.getElementById('letterContent');
const acceptBtn = document.getElementById('acceptBtn');
const flowersContainer = document.getElementById('flowersContainer');

// Lista de emojis de flores para o fundo
const flowerEmojis = ['🌸', '🌹', '🌺', '🌷', '🌻'];

// Função para gerar flores subindo continuamente no fundo
function createBackgroundFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    // Posição horizontal aleatória
    flower.style.left = Math.random() * 100 + 'vw';
    // Tamanho aleatório
    flower.style.fontSize = Math.random() * 20 + 15 + 'px';
    // Duração da animação aleatória para dar naturalidade
    flower.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    flowersContainer.appendChild(flower);
    
    // Remove a flor após a animação acabar
    setTimeout(() => {
        flower.remove();
    }, 7000);
}

// Inicia a chuva de flores em intervalos de 300ms
setInterval(createBackgroundFlower, 300);

// Evento para abrir a carta
openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none'; // Some com o botão de abrir
    envelope.classList.add('open');  // Modifica o container para o formato de carta aberto
    letterContent.style.display = 'block'; // Mostra o texto e opções
});

// Evento para o botão Aceitar
acceptBtn.addEventListener('click', () => {
    // Alerta/Popup customizado do navegador (pode substituir por um modal se preferir no futuro)
    alert("✨ Prepare-se para uma bela noite romântica! ✨");
    
    // Dispara a explosão de corações
    for (let i = 0; i < 40; i++) {
        createHeartBurst();
    }
});

// Função para criar o efeito de corações explodindo na tela
function createHeartBurst() {
    const heart = document.createElement('div');
    heart.classList.add('heart-burst');
    heart.innerText = '❤️';
    
    // Spawna no centro da tela (perto do botão)
    heart.style.left = '50vw';
    heart.style.top = '50vh';
    
    // Define direções aleatórias para a explosão (variáveis CSS)
    const xMove = (Math.random() - 0.5) * 400;
    const yMove = (Math.random() - 0.5) * 400;
    heart.style.setProperty('--x', `${xMove}px`);
    heart.style.setProperty('--y', `${yMove}px`);
    
    document.body.appendChild(heart);
    
    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
