'user strict';
if (window.location.toString().indexOf("portfolio.html") > 0) {    
    var portfolio = document.querySelector('#portfolio');

    var setStorage = function (name, prop) {
        return window.localStorage.setItem(name, prop)
    };

    var setGalleryLabel = function (t) {
        var parent = t.closest('.portfolio__link');
        var dataStorage = parent.dataset.storage
        var dataNumber = parent.dataset.number
        setStorage('album-name', dataStorage);
        setStorage('number-image', dataNumber);
    };

    portfolio.addEventListener('click', function (e) {
        var $t = e.target;        
        if ($t.tagName != 'IMG' && $t.tagName != 'H2') {
            return false
        };

        setGalleryLabel($t)
    });

};