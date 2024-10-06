const swiper = new Swiper('.swiper', {
    slidesPerView: 1.3,
    spaceBetween: 15,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1.4,
        },
        640: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 1.6,
        },
    },
});

var btReadMore = document.querySelector('.read-more');
var listItems = document.querySelectorAll('.hidden');
var arrowImg = document.querySelector('.arrow-img');

btReadMore.onclick = toggleVisibility;

function toggleVisibility() {
    listItems.forEach(item => {
        item.classList.toggle('hidden');
        if (btReadMore.innerHTML.includes('Показать все')) {
            btReadMore.innerHTML = '<img class="arrow-img" src="img/arrowup.png" alt="Стрелка">Скрыть';
        } else {
            btReadMore.innerHTML = '<img class="arrow-img" src="img/arrow.png" alt="Стрелка">Показать все';
        }
    });
}