/* extras.js */


$("#pinnwand").load("https://iukintest.verwaltung.uni-muenchen.de/functions/pinnwand/frontpage_view.include");

if ($("#blog-person").length > 0) {
	var ck = $("#blog-person").text()
	$("#blog-person").load("https://iukintest.verwaltung.uni-muenchen.de/functions/blog-mit/frontpage_view.include?author="+ck);
}
