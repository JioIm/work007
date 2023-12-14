$(function () {
    $('.mainVisual .visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
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