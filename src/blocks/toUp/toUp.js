var toUp = document.querySelector('#toUp');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
        $(toUp).addClass('toUp--show');
    } else {
        $(toUp).removeClass('toUp--show');
    }
})

"use strict";

var cfg = {
    scrollDuration: 800
};


var ssSmoothScroll = function () {

    $('.scroll').on('click', function (e) {
        var target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('nav').hasClass('main-nav--open')) {
                $('#menu-close').trigger('click');
            }

            window.location.hash = target;
        });
    });

};
ssSmoothScroll();