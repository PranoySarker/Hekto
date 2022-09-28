

// Featured product
var swiper = new Swiper(".featured-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

