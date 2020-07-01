/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const promoDelete = document.querySelectorAll('.promo__adv img'),
      posterChangeBackground = document.querySelector('.promo__bg'),
      filmNameChange = posterChangeBackground.querySelector('.promo__genre'),
      movielist = document.querySelector('.promo__interactive-list');


//1
// Вариант с froEach и стрелочной функцией
promoDelete.forEach(item => {
    item.remove();
});

// Вариант с function
// promoDelete.forEach(function (item) {
//     item.remove();
// });

//2
filmNameChange.textContent = 'драма';

//3

posterChangeBackground.style.cssText = 'background-image: url(img/bg.jpg)';

//4 //5
movielist.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movielist.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
