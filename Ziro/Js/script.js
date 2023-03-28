let bar = document.getElementById('bar');
let menuRes = document.querySelectorAll('.menu--res');
let user = document.getElementById('user');
let btnLogSign = document.querySelectorAll('.btn-log-sign');
let main = document.getElementById('main');

bar.addEventListener('click', function () {
    bar.classList.toggle('hidden1');
    main.classList.toggle('canvas__open');
})

user.addEventListener('click', function () {
    user.classList.toggle('hidden2')
})


$(document).ready(function () {
    $('.profile__cards').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

