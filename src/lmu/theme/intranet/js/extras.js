/* extras.js */

$.ajax({cache: false});
$.ajaxSetup({cache: false});

$("#blog").load("https://iukintest.verwaltung.uni-muenchen.de/blog-mit/frontpage_view.include?b_size=3", function() {$(document).foundation();});
$("#pinnwand").load("https://iukintest.verwaltung.uni-muenchen.de/pinnwand/frontpage_view.include?b_size=3", function() {$(document).foundation();});

if ($("#blog-person").length > 0) {
    var ck = $("#blog-person").text();
    $("#blog-person").load("https://iukintest.verwaltung.uni-muenchen.de/blog-mit/frontpage_view.include?b_size=3&author="+ck, function() {$(document).foundation();});
}

$(document).foundation();

// Plone Edit Form helpers 

$("input#form-buttons-save").addClass("button radius small");
$("input#form-buttons-cancel").addClass("button radius small");
$("input#form-buttons-comment").addClass("button radius small");

/* 
$("input#form-widgets-ILeadImage-image-input").addClass("button small");
*/



/*
// Progressive Enhancement For Search Bar
$(document).ready( function () {
    $("#sb-container").css("height: 50px !important; overflow: hidden");
    $(".search-container").css('position: absolute;');
    $(".search-container").hide();
    $(".search .fi-magnifying-glass").removeClass('fi-x');
    $(".search-nav").removeClass("active");
    $(".toggle .fi-list").toggleClass('fi-x');
    $('.top-bar').toggleClass('expanded');
//$("#togglesearch").toggle();
})
*/
