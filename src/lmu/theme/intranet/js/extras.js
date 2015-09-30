/* extras.js */

$.ajax({cache: false});
$.ajaxSetup({cache: false});

$("#blog").load("https://www.intranet.verwaltung.uni-muenchen.de/blog-mit/frontpage_view.include?b_size=3", function() {$(document).foundation();});
$("#pinnwand").load("https://www.intranet.verwaltung.uni-muenchen.de/pinnwand/frontpage_view.include?b_size=3", function() {$(document).foundation();});

if ($("#blog-person").length > 0) {
    var ck = $("#blog-person").text();
    $("#blog-person").load("https://www.intranet.verwaltung.uni-muenchen.de/blog-mit/frontpage_view.include?b_size=3&author="+ck, function() {$(document).foundation();});
}

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
