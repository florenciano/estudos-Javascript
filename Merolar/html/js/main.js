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
   Page: local
========================================================================== */
// home
$(document).ready(function () {

    /* INDEX */

    // hide ico 'search'
    var search = $( "#search" ), icoSearch = $( ".icoSearch" );
    search.on( "focus, focusin", function() { icoSearch.hide() });
    search.on( "blur, focusout", function() { icoSearch.css( "display","inline-block" ) });

    // carousel
    $( ".carouselHeader" ).bxSlider({
        pagerSelector: '.pagerCustomizado'
        // nextSelector: '.next',
        // prevSelector: '.prev'
    });

    // adjust alinhament pager carousel
    var p = $( ".pagerCustomizado" );
    var w = p.width()/2;
    p.css( "margin-left",-w );

});

