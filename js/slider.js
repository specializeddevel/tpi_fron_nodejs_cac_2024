(function (){
    

    const sliders = [...document.querySelectorAll('.testimony__body')]
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentSlider = document.querySelector('.testimony__body--show');
        let currentIndex = sliders.findIndex(slider => slider === currentSlider);

        sliders[currentIndex].classList.remove('testimony__body--show');

        let nextIndex = (currentIndex + add + sliders.length) % sliders.length;

        sliders[nextIndex].classList.add('testimony__body--show');
    }


})();