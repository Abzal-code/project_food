require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import    tabs    from  './modules/tabs';
import    modal   from  './modules/modal';
import    timer   from  './modules/timer';
import    cards   from  './modules/cards';
import    calc    from  './modules/calc';
import    forms   from  './modules/forms';
import    slider  from  './modules/slider';
import    {modalOpen}   from  './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 50000);       //Показывает модальное окно с течением 5 сек после входа на страницу сайта

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-10-18');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});