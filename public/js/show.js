//this page will be the app.js file for the page that displays indivdual book info and reviews

$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

	//home button
	$('#thanos').on('click', function(e) {
		console.log("You clicked thanos!");
		location.href = "/";
	});

	//gets current id
    var url = window.location;
    var idArray = url.toString().split("/");
	var id = idArray[idArray.length-1];
    console.log(id);

	//deletes selected book and returns user to homepage
	$('#deleteBook').on('click', function(e){
		e.preventDefault();
		console.log("Clicked Delete Button");
		$.ajax({
			type: 'DELETE',
			url: baseUrl + '/' + id,
			success: function(data) {
				console.log("I deleted this", id);
			}
		});
	location.href = '/';
	});

	//edits current entry
	$("#editEntry").on('click', function(e){
		e.preventDefault();
		console.log("Clicked EDIT button");
		console.log("ID I want to edit", id);
	});

	$("#saveChangesButton").on('click', function(e) {
		e.preventDefault();
		console.log("I clicked the Save Changes button!");
		var updatedBook = $("#updateBook").serialize();
		console.log("json object I want to send to server:", updatedBook);
	});

 });