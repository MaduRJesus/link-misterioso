const naoButton = document.getElementById('nao');

naoButton.addEventListener('mouseover', () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    naoButton.style.position = 'absolute';
    naoButton.style.left = newX + 'px';
    naoButton.style.top = newY + 'px';
});

document.getElementById('sim').addEventListener('click', () => {
    window.location.href = 'mensagem.html'; // Página com mensagem especial
});