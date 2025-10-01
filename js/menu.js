/**
 * Este código define un menú desplegable que se activa al hacer clic en un botón.
 * El menú se muestra y se oculta al hacer clic en el botón de apertura y cierre, respectivamente.
 * Además, el menú se oculta cuando se hace clic en cualquier enlace dentro del menú.
 */
(function(){

    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    // Event delegation to close menu on link click or background click
    menu.addEventListener('click', (e)=>{
        if (e.target.matches('.nav__links') || e.target.matches('.nav__link')) {
            menu.classList.remove('nav__link--show');
        }
    });

})();