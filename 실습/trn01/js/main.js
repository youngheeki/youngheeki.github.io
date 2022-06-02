$(function () {
    $('.top_baner i').on('click', function () {
        $('.top_baner').slideUp();
    });

    $('.main_slider').on('init relnit afterChange', function (e, s, c) {
        console.log(e, s, c);
        var TG = $('.slick-current')
        TG.addClass('xxx').siblings().removeClass('xxx');
        $('.num').text((c ? c + 1 : 1) + '/', s.sliderCount);
    });

    $('.main_slider').slick({
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: true,
    });



})


