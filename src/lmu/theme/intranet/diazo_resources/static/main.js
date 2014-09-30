/* JavaScript for the 'ICustomTheme' Plone browser layer */

/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

console.log('main.js loaded');

jQuery(function($){
/*
    $('#blog-footer a').prepOverlay(
        {
            subtype: 'ajax',
            filter: common_content_filter,
            formselector: 'form#login_form',
            cssclass: 'overlay-login',
            noform: function () {
                if (location.href.search(/pwreset_finish$/) >= 0) {
                    return 'redirect';
                } else {
                    return 'reload';
                }
            },
            redirect: function () {
                var href = location.href;
                if (href.search(/pwreset_finish$/) >= 0) {
                    return href.slice(0, href.length-14) + 'logged_in';
                } else {
                    return href;
                }
            }
        }
    );
*/
    $('#blog-footer a').prepOverlay(
        {
            subtype: 'ajax',
            filter: common_content_filter,
            cssclass: 'overlay-contact',
            formselector: 'form[name="feedback_form"]',
            noform: function(el) {return $.plonepopups.noformerrorshow(el, 'close');}
        }
    );

});

