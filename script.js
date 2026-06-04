const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const letterContent = document.getElementById('letterContent');
const acceptBtn = document.getElementById('acceptBtn');
const flowersContainer = document.getElementById('flowersContainer');

const flowerEmojis = ['🌸', '🌹', '🌺', '🌷', '🌻'];

function createBackgroundFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.fontSize = Math.random() * 20 + 15 + 'px';
    flower.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    flowersContainer.appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 7000);
}

setInterval(createBackgroundFlower, 300);

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    envelope.classList.add('open');
    letterContent.style.display = 'block';
});

acceptBtn.addEventListener('click', () => {
    alert("✨ Prepare-se para uma bela noite romântica! ✨");
    
    for (let i = 0; i < 40; i++) {
        createHeartBurst();
    }
});

function createHeartBurst() {
    const heart = document.createElement('div');
    heart.classList.add('heart-burst');
    heart.innerText = '❤️';
    
    heart.style.left = '50vw';
    heart.style.top = '50vh';
    
    const xMove = (Math.random() - 0.5) * 400;
    const yMove = (Math.random() - 0.5) * 400;
    heart.style.setProperty('--x', `${xMove}px`);
    heart.style.setProperty('--y', `${yMove}px`);
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
