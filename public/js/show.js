//this page will be the app.js file for the page that displays indivdual book info and reviews

$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

	//home button
	$('#thanos').on('click', function(e) {
		console.log("You clicked thanos!");
		location.href = "/";
	});

//make a delete function
// 	$('#deleteBook').on('click', function(e){
// 	console.log("Clicked Delete Button");
// })

 });