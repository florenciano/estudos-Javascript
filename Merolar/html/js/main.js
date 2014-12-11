"use strict";
// declare as variáveis
var trim, placeholder;

//trim
trim = function (str) {
    return str.replace(/^\s+|\s+$/g,"");
}

placeholder = {
    'confirm': function (a) {
        var v = $(a).attr("placeholder");

        if ( trim($(a).val()) == "" || trim($(a).val()) == undefined ) {
            $(a).val(v);
        } else if ( trim($(a).val()) == trim(v) ) {
            $(a).val("");
        }
    },
    'hold': function (a) {
        $(a).on({
            'focus': function (){
                placeholder.confirm($(this));
            },
            'blur': function (){
                placeholder.confirm($(this));
            }
        });
    }
}

// Doc ready
$(function(){
    // Nice scroll
    // $("body").mCustomScrollbar();

    // Only IE
    if (navigator.userAgent.match("MSIE")) {
        // Placeholder
        placeholder.hold("input, textarea");

        // PIE (border-radius, gradient, box-shadow)
        if (window.PIE) {
            var elements = 'input, textarea, .round';

            $(elements).each(function() {
                PIE.attach(this);
            });
        }
    }
});
/* ==========================================================================
   Page project
========================================================================== */
$(document).ready(function () {

    /* INDEX */

    // hide ico 'search'
    var search = $( "#search" ), icoSearch = $( ".icoSearch" );
    search.on( "focus, focusin", function() { icoSearch.hide() });
    search.on( "blur, focusout", function() { icoSearch.css( "display","inline-block" ) });

    // carousel
    var carouselHeader = $( ".carouselHeader" ).bxSlider({
        pagerSelector: '.pagerCustomizado'
    });
    // destroy carousel in mobile
    if( $(window).width() < 481 ) {   
        carouselHeader.destroySlider();
    }
    $(window).resize(function() {
        if( $(this).width() < 481 ) {   
            carouselHeader.destroySlider();
        }
    });


    // adjust alinhament elements carousel header
    function adjusAlign(el) {
        var p = $(el);
        var w = p.width()/2;
        p.css( "margin-left",-w );
    }
    adjusAlign( ".pagerCustomizado" );

    /* EMPREENDIMENTOS */

    // thumbnails gallery
    $( ".carouselThumb" ).bxSlider({
        minSlides: 3,
        maxSlides: 4,
        slideMargin: 10,
        slideWidth: 170, // alterar larguras das imagens
        pager: false,
        nextSelector: ".nextGaleria",
        prevSelector:  ".prevGaleria"
    });
    // aplication in the images of the gallery
    // used thumbnails above
    $( ".pagerThumb" ).bxSlider({
        pagerCustom: "#carouselThumbPager"
    });

    // swipe images of the 'plantas'
    var containerImg = $( ".imgGaleriaPlantas" ), botoesImg = $( ".btnPlantas" );
    botoesImg.each( function (key, value) {
        $(this).on( "click", function (ev) {
            $(containerImg).fadeOut( 'fast' );
            ev.preventDefault();
            if( key == 0 ) { $(containerImg).eq(0).fadeIn( 'fast' ); }
            if( key == 1 ) { $(containerImg).eq(1).fadeIn( 'fast' ); }
            if( key == 2 ) { $(containerImg).eq(2).fadeIn( 'fast' ); }
            if( key == 3 ) { $(containerImg).eq(3).fadeIn( 'fast' ); }
        });
    });

    // progress work construcion
    function progressBar() {
        var progressBar = $( ".percent" ),
            display = $( ".barra span" );


        progressBar.each(function() {
            // attr 'data-value' ao progressBar
            var value = $(this).attr( "data-value" );
            $(this).css( "width", value + "%" );

            // var max = $(this).attr( "data-max" );

            // set text percentual
            var display = $(this).prev( "span" );
            display.html( value + "%" );

            // conditional display's
            if( value >= 75 ) { display.css( "color", "#fff" ) };
            if( value > 100 ) { 
                $(this).css( "width", "100%" );
                display.html( "100%" );
            };
            if( isNaN(value) ) { display.html( "NaN" ) };
        });
    }
    progressBar();
    

});

