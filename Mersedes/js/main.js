$(function(){
    $(".design__slider").slick({
        dots:false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/left.png" alt="" />',
        nextArrow:'<img class="arrow arrow-right" src="images/right.png" alt="" />',
    });
});