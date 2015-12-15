//this page will be the app.js file for the page that displays indivdual book info and reviews

$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

		//handlebars set up
	var source = $('#books-template').html();
	var template = Handlebars.compile(source);

 });