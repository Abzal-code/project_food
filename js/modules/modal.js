function modalOpen(modalSelector, modalTimerId) {                              //Функция показа модального окна
    modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';        // overflow - отвечает за прокрутку body. Запрещаем прокрутку экрана
    if (modalTimerId) {
        clearInterval(modalTimerId);                    //Если клиент уже открывал модальное окно, оно уже не выведеться
    }
}

function modalClose(modalSelector) {                             //Функция закрытия модального окна
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';              // overflow - отвечает за прокрутку body. Восстанавливаем прокрутку экрана
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    
            //Modal window

    const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);



    modalTrigger.forEach(btn => {                       //Вешаем обработчик события на все кнопки 
        btn.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
    });

    
        

    modal.addEventListener('click', (e) => {            //Закрытие модального окна при нажатие не на крестик (modalCloseBtn - крестик)
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            modalClose(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {           //Вешаем обработчик события закрытия модального окна на кнопку esc
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalClose(modalSelector);
        }
    });




    function showModalByScrolling() {           //Функция показа модального окна при скроллинге
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen(modalSelector, modalTimerId);                            //Показывает модальное окно
            window.removeEventListener('scroll', showModalByScrolling);     //Удаляет обработчик событий после показа модального окна
        }
    }
    window.addEventListener('scroll', showModalByScrolling);        //вешаем обработчик событий на window, которая вызывает функцию показа модального окна после скроллинга до самого низа
}

export default modal;
export {modalOpen};
export {modalClose};