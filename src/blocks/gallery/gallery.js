'user strict';
if (window.location.toString().indexOf("gallery.html") > 0) {
    var parent = document.querySelector('#gallery');
    var preloader = document.querySelector(".gallery__text");
    var gallery = document.querySelector('.gallery__wrapper');

    var getStorage = function (name) {
        return window.localStorage.getItem(name)
    }

    var galleryListener = function (gallery, number) {
        var i;
        var max = number
        for (i = 1; i < max; i++) {
            $(parent).append('<div class="gallery__item"><img class="gallery__picture" src="image/gallery/' + gallery + '/image-' + i + '.jpg"></div>')
        }
    }

    var drawGallery = function () {
        if (localStorage.length !== 0) {
            var nameGallery = getStorage('album-name');
            var numGalleryItem = getStorage('number-image')

            galleryListener(nameGallery, numGalleryItem);

            var $grid = $('.gallery__wrapper').masonry({
                columnWidth: '.gallery__sizer',
                itemSelector: '.gallery__item',
                gutter: '.gallery__gutter'
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });                       
        }
    }

    drawGallery();    
    $(preloader).addClass('gallery__text--hidden');
    $(gallery).addClass('gallery__wrapper--show');        
}