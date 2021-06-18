function timer(id, deadLine) {
    
    //Timer
    //Алгоритм разработки:
    //1) Разработать функцию которая будет устанавливать таймера
    //2) Функция которая будет определять разницу между временем
    //3) Функция которая будет заниматься обнавлением таймера


    function getTimeRemainig(endtime) {         //Функция расчета временных промежутков
        const t = Date.parse(endtime) - Date.parse(new Date()),     //Вычисляем сколько миллисекундов есть между текущим и конечным временем
            days = Math.floor(t / (1000 * 60 * 60 * 24)),         //Вычисляем сколько дней составляет миллисекунд (миллисекунд * секунд * минут * дни)
            hours = Math.floor(t /  (1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num) {         // Функция которая добавляет 0 если цифра ниже 10
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }   else {
            return num;
        }
    }

    function setClock(selector, endtime) {                          //Функция установки таймера
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();      //Решает проблему с морганием (баг)

            function updateClock() {        //Функция которая обновляет таймер
                const t = getTimeRemainig(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
    }

    setClock(id, deadLine);
}

export default timer;