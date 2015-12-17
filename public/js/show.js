//this page will be the app.js file for the page that displays indivdual book info and reviews

$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

	//generate random image for background
	// TODO: You need to NOT have these images hosted in your github account. Your project is ~9MB in size. -jc
	var randomNum = Math.floor((Math.random()*15)+1);
	var backgroundUrl = '/images/images' + randomNum + '.jpg';
	$('.showpage').css("background", "url(" + backgroundUrl + ") no-repeat center center");

	//home button
	$('#thanos').on('click', function(e) {
		// TODO: Remove console.logs from your production versions -jc
		console.log("You clicked thanos!");
		// TODO: You could actually just add a link to Thanos in your html file.  This click listener is a bit unnecessary -jc
		location.href = "/";
	});

	//gets current id
    var url = window.location;
    var idArray = url.toString().split("/");
		// TODO: fix indentation errors -jc
	var id = idArray[idArray.length-1];
		// TODO: Remove console.logs from your production versions -jc
    console.log(id);

	//deletes selected book and returns user to homepage
	$('#deleteBook').on('click', function(e){
		e.preventDefault();
		// TODO: Remove console.logs from your production versions -jc
		console.log("Clicked Delete Button");
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + id,
			success: function(data) {
				// TODO: Remove console.logs from your production versions -jc
				console.log("I deleted this", id);
				// TODO: Move all logic actions into either your success callback or an error callback. coding outside of these callbacks makes them useless, which slows down your site -jc
			}
		});
	location.href = "/";
	});

	// TODO: Is this listener necessary? -jc
	//edits current entry
	$("#editEntry").on('click', function(e){
		e.preventDefault();
		// TODO: Remove console.logs from your production versions -jc
		console.log("Clicked EDIT button");
		// TODO: Remove console.logs from your production versions -jc
		console.log("ID I want to edit", id);
	});

	$("#saveChangesButton").on('click', function(e) {
		e.preventDefault();
		// TODO: Remove console.logs from your production versions -jc
		console.log("I clicked the Save Changes button!");
		var updatedBook = $("#updateBook").serialize();
		// TODO: Remove console.logs from your production versions -jc
		console.log("json object I want to send to server:", updatedBook);
		$.ajax ({
			method: 'PUT',
			url: baseUrl + '/' + id,
			data: updatedBook,
			success: function update (book) {
				// TODO: Remove console.logs from your production versions -jc
				console.log("In update Success function!!");
				$.get(baseUrl + '/' + id, function () {
					location.href = 'baseUrl + '/' + id';
				});
			}
		});
		// TODO: Move all logic actions into either your success callback or an error callback. coding outside of these callbacks makes them useless, which slows down your site -jc
		location.reload();
	});

	//send new review data to server and reload page to display it
	$("#addReviewButton").on('click', function(e) {
		// TODO: Remove console.logs from your production versions -jc
		console.log("Clicked on CREATE REVIEW button!");
		e.preventDefault();

		var formData = $(".reviewBox").serialize();
		// TODO: Remove console.logs from your production versions -jc
		console.log("APPSIDE PRE-POST", formData);
		$.ajax ({
			method: 'POST',
			url: '/api/books/' + id + '/reviews',
			data: formData,
			success: function addBook (data){
				// TODO: Remove console.logs from your production versions -jc
				console.log(data);
			}
		});
		// TODO: Move all logic actions into either your success callback or an error callback. coding outside of these callbacks makes them useless, which slows down your site -jc
		location.reload();
	});

 });
