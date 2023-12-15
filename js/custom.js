$(function () {
    $('.mainVisual .visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.visual_slide').slick('slickPrev')
    });

    $('.mainVisual .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조.
        $('.visual_slide').slick('slickNext')
    });

    $('.main_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });
})