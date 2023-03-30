let bar = document.getElementById('bar');
let menuRes = document.querySelectorAll('.menu--res');
let user = document.getElementById('user');
let btnLogSign = document.querySelectorAll('.btn-log-sign');
let main = document.getElementById('main');
let scrollToTopBtn = document.getElementById("scrollUp");


bar.addEventListener('click', function () {
    bar.classList.toggle('hidden1');
    main.classList.toggle('canvas__open');
})

user.addEventListener('click', function () {
    user.classList.toggle('hidden2')
})


$(document).ready(function () {
    $('.profile__cards').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1717,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1527,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1063,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        prevArrow: "<button type='button' class='slick-prev pull-left icon__slider'><i class='fa-solid fa-arrow-left aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right icon__slider'><i class='fa-solid fa-arrow-right aria-hidden='true'></i></i></button>"
    });
});

