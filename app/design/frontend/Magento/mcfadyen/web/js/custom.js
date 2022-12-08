define([
    'jquery',
    'mage/mage',
    'jquery/ui',
    'slick'
], function ($) {
    'use strict';

    $('.product-info-main, .product-info-left, .product-social-links').mage('sticky', {
        container: '.product.media'
    });


    let getWindow = $(window);
    let slick_slider = $('.slick-slider');
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    slick_slider.slick(settings);

    getWindow.on('resize', function() {
      if (getWindow.width() > 1024) {
        if (slick_slider.hasClass('slick-initialized'))
          slick_slider.slick('unslick');
        return
      }
      if ( ! slick_slider.hasClass('slick-initialized'))
        return slick_slider.slick(settings);
    });

});