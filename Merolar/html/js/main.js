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

    /////////////////////////////////////////////////////////////////////
    // hide ico 'search' header
    /////////////////////////////////////////////////////////////////////
    var search = $( "#search" ), icoSearch = $( ".icoSearch" );
    search.on( "focus, focusin", function() { icoSearch.hide() });
    search.on( "blur, focusout", function() { icoSearch.css( "display","inline-block" ) });

    /////////////////////////////////////////////////////////////////////
    // carousel
    /////////////////////////////////////////////////////////////////////
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

    /////////////////////////////////////////////////////////////////////
    // thumbnails of the section 'galeria'
    /////////////////////////////////////////////////////////////////////
    // galeria-1
    $( ".carouselThumb" ).bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 150, // alterar larguras das imagens
        pager: false,
        nextSelector: ".nextGaleria",
        prevSelector:  ".prevGaleria"
    });
    $( ".pagerThumb" ).bxSlider({
        pagerCustom: "#carouselThumbPager",
        controls: false
    });

    // galeira-2
    $( ".carouselThumb-2" ).bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 150, // alterar larguras das imagens
        pager: false,
        nextSelector: ".nextGaleria-2",
        prevSelector:  ".prevGaleria-2"
    });
    $( ".pagerThumb-2" ).bxSlider({
        pagerCustom: "#carouselThumbPager-2",
        controls: false
    });

    // galeira-3
    $( ".carouselThumb-3" ).bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 150, // alterar larguras das imagens
        pager: false,
        nextSelector: ".nextGaleria-3",
        prevSelector:  ".prevGaleria-3"
    });
    $( ".pagerThumb-3" ).bxSlider({
        pagerCustom: "#carouselThumbPager-3",
        controls: false
    });

    // galeira-4
    $( ".carouselThumb-4" ).bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 150, // alterar larguras das imagens
        pager: false,
        nextSelector: ".nextGaleria-4",
        prevSelector:  ".prevGaleria-4"
    });
    $( ".pagerThumb-4" ).bxSlider({
        pagerCustom: "#carouselThumbPager-4",
        controls: false
    });
    // swipe galeria
    var imgDasGalerias = $( ".galerias" ),
        botoesGaleria = $( ".btnGaleria" );
    swipeImage(imgDasGalerias, botoesGaleria);

    // add style 'active'
    $(botoesGaleria).click(function(){
        $(botoesGaleria).removeClass( "activeBtnGaleria" );
        $(this).toggleClass( "activeBtnGaleria" );
    });

    /////////////////////////////////////////////////////////////////////
    // swipe images of the section 'plantas'
    /////////////////////////////////////////////////////////////////////
    function swipeImage (elContainer, btnClick) {
        $(btnClick).each( function (key, value) {
            $(this).on( "click", function (ev) {
                $(elContainer).fadeOut( 'fast' );
                if( key == 0 ) { $(elContainer).eq(0).fadeIn( 'fast' ); } // equivale a cada btn na página
                if( key == 1 ) { $(elContainer).eq(1).fadeIn( 'fast' ); }
                if( key == 2 ) { $(elContainer).eq(2).fadeIn( 'fast' ); }
                if( key == 3 ) { $(elContainer).eq(3).fadeIn( 'fast' ); }
                ev.preventDefault();
            });
        });
    }
    var containerImg = $( ".imgGaleriaPlantas" ),
        botoesImg = $( ".btnPlantas" );
    swipeImage (containerImg, botoesImg);

    // add style 'active'
    $(botoesImg).click(function(){
        $(botoesImg).removeClass( "activeBtnGaleria" );
        $(this).toggleClass( "activeBtnGaleria" );
    });

    /////////////////////////////////////////////////////////////////////
    // progress 'Estagio da Obra'
    /////////////////////////////////////////////////////////////////////
    function progressBar() {
        var progressBar = $( ".percent" ),
            display = $( ".barra span" );

        progressBar.each(function (key,value) {
            // attr 'data-value' ao progressBar
            var value = $(this).attr( "data-value" );
            $(this).css( "width", value + "%" );

            // set text percentual
            var display = $(this).prev( "span" );
            display.html( value + "%" );

            // conditional display's
            if( value >= 55 ) { display.css( "color", "#fff" ) };
            if( value > 100 ) {
                $(this).css( "width", "100%" );
                display.html( "100%" );
            };
            if( isNaN(value) ) { display.html( "NaN" ) };
        });
    }
    progressBar();

    /////////////////////////////////////////////////////////////////////
    // thumbnails 'Estagio da obra' section 'Fotos retiradas na obra'
    /////////////////////////////////////////////////////////////////////
    $( ".imgSlider" ).bxSlider({
        pagerCustom: "#pagerSlides",
        controls: false
    });


});

