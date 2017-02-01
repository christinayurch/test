
$( '.nav-icon' ).click(function(){
    $('.nav-menu').toggleClass('expand')
});


$('#slider').show().slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3500
});