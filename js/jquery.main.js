$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

    $('.sub-menu').each(function () {
        subMenu($(this));
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
    if (_obj.hasClass('header-slider__wrap')) {
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
    if (_obj.hasClass('container_wrap')) {
        var _slider = new Swiper(_obj, {
            nextButton: '.slider_next',
            prevButton: '.slider_prev',
            spaceBetween: 0,
            loop: false,
            loopedSlides: 3,
            slidesPerView: 6

        });

    }

    //public properties

    //public methods

    _init();
};

var subMenu = function (obj) {
    //private properties
    var _obj = obj,
        _btn = _obj.children('a'),
        _sub = _obj.children('ul');

    //private methods
    var _addEvents = function () {
            _btn.on({
                click: function () {
                    if (_obj.hasClass('active')) {
                        _sub.slideUp(500);
                        _obj.removeClass('active');
                    } else {
                        $('.menu__aside dd').removeClass('active');
                        $('.menu__aside ul').slideUp(500);
                        $(this).parent('dd').addClass('active');
                        _sub.slideDown(500);
                    }
                    return false
                }
            });
        },
        _init = function () {
            _addEvents();
        };
    //public properties

    //public methods

    _init();
};

var Rating = function (obj) {

    var _obj = obj,
        _itemRate = _obj.find('.casino-review__rating div'),
        _hiddenInput = _obj.find('input[type="hidden"]');

    var _addEvents = function () {

            _itemRate.on({
                'click': function(){
                    var curItem = $(this),
                        dataRate = curItem.attr('data-rate'),
                        prevElems = curItem.prevAll('div');

                    _itemRate.removeClass('active');
                    prevElems.addClass('active');
                    curItem.addClass('active');
                    _hiddenInput.val(dataRate);
                    _addClassObj();
                }
            });

        },
        _addClassObj = function(){
            if(_hiddenInput.val()<=2){
                _obj.addClass('grey_rating');
                _obj.removeClass('blue_rating');
                _obj.removeClass('red_rating');
            }else if (_hiddenInput.val()>2&& _hiddenInput.val()<=6){
                _obj.addClass('blue_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('red_rating');
            }
            else if (_hiddenInput.val()>6&& _hiddenInput.val()<=10){
                _obj.addClass('red_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('blue_rating');
            }
        },
        _init = function () {
            _addEvents();
        };

    _init();
};