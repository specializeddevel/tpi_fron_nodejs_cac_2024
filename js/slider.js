(function (){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    const testimonyContainer = document.querySelector('.testimony');
    let interval;

    const changePosition = (add) => {
        const currentSlider = document.querySelector('.testimony__body--show');
        let currentIndex = sliders.findIndex(slider => slider === currentSlider);
        sliders[currentIndex].classList.remove('testimony__body--show');
        let nextIndex = (currentIndex + add + sliders.length) % sliders.length;
        sliders[nextIndex].classList.add('testimony__body--show');
    };

    const startSlider = () => {
        clearInterval(interval); // Prevent multiple intervals
        interval = setInterval(() => {
            changePosition(1);
        }, 5000); // Change slide every 5 seconds
    };

    const resetSlider = () => {
        clearInterval(interval);
        startSlider();
    };

    buttonNext.addEventListener('click', () => {
        changePosition(1);
        resetSlider();
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
        resetSlider();
    });

    testimonyContainer.addEventListener('mouseenter', () => clearInterval(interval));
    testimonyContainer.addEventListener('mouseleave', startSlider);

    startSlider(); // Start the slider initially

})();