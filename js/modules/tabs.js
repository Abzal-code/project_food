function tabs(tabsSeletor, tabsContentSelector, tabsParentSelector, activeClass) {
    
    //Алгоритм разработки таб:
    // 1) Функция которая будет скрывать не нужные табы;
    // 2) Показать нужный таб;
    // 3) Назначить обработчи события на меню (Выберите стиль питания), которая будет манипулировать этими функциями;

    const tabs  = document.querySelectorAll(tabsSeletor),                //Табы
    tabsContent = document.querySelectorAll(tabsContentSelector),                //Контент наших табов
    tabsParent  = document.querySelector(tabsParentSelector);              //Родительский элемент табов

    function hideTabContent() {                                                //Функий скрытия контента наших табов
        tabsContent.forEach(item => {                                          //Перебираем массив все элементы контента
            item.classList.add('hide');                                        //Добавляем класс hide всем элементам контента
            item.classList.remove('show', 'fade');                             //Удаляем классы show и fade у всех элементтов контент
        });

        tabs.forEach(item => {                                                 //Перебираем масссив табов
            item.classList.remove(activeClass);                   //Удаляем tabheader__item_active у всех классов таба
        });
    }

    function showTabContent(i = 0) {                                           //Разрабатываем функцию показа наших табов
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');

        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {                               //Делегирование события
        const target = e.target;

        if (target && target.classList.contains(tabsSeletor.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;