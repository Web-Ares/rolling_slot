$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });


} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _next = obj.find($('.swiper-button-next')),
        _prev = obj.find($('.swiper-button-prev')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('slider__wrap')) {
        var _swiperPromo = new Swiper(_obj, {
            nextButton: _next,
            prevButton: _prev,
            slidesPerView: 7,
            spaceBetween: 0,
            loop: false,
            breakpoints: {

                1024: {
                    slidesPerView: 5
                },
                768: {
                    slidesPerView: 3
                }
            }


        });
    }

    //public properties

    //public methods

    _init();
};
