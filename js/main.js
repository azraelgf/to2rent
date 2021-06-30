$(function(){
$('.hero-slider').slick({
    fade: true,
    responsive: [
        {
            breakpoint: 481,
            settings: {
                arrows: false,
                autoplay: true,
            }
        },

    ],
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next.svg" alt=""></button>',
});

});