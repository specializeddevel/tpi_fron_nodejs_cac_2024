/**
 * Función autoejecutable que agrega un evento de click a cada título de pregunta.
 * Al hacer click en un título de pregunta, se realiza una serie de acciones, como
 * agregar o remover clases CSS, y ajustar la altura de la respuesta correspondiente.
 */
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', ()=>{

           let height = 0;
           let answer = question.nextElementSibling;
           let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');
           


           if(answer.clientHeight === 0){
               height = answer.scrollHeight;
           }

           answer.style.height = `${height}px`;

        });
    });
})();