 (function(){
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const images = [
        '../images/bandeja_comida.webp',
        '../images/bandeja_pan_1.webp',
        '../images/marraquetas.webp',
        '../images/dispensador.webp'
    ];

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        const newImageUrl = `url('${images[currentIndex]}')`;
        hero.style.setProperty('--hero-bg', newImageUrl);
    }, 5000); // Change image every 5 seconds
})();