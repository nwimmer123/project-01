$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

	//showing books on the homepage
	$.ajax({
		method: 'GET',
		url: baseUrl,
		success: function showBooks (data) {
			data.forEach(function (element) {
				$(".bookBox").append("<br><p>" + "<b>Contributor:  </b>" + element.contributor + "</p>");
				$(".bookBox").append("<p>" + "<b>Title:  </b>" + element.title + "</p>");
				$(".bookBox").append("<p>" + "<b>Author:  </b>" + element.author + "</p>");
				$(".bookBox").append("<p>" + "<b>Genre:  </b>" + element.genre + "</p><br>");
			});
		}

	});

	//hide add book field
	$("#createBook").hide();

	//addBook button actions
	$("#addBook").on('click', function(e) {

		//send new book data to server and reload page to display it
		console.log("CLICKed the Add Book Button");
		$(".bookBox").hide();
		$("#createBook").show();
		$("#createBookButton").on('click', function(e) {
			event.preventDefault();
			var formData = $("#createBook").serialize();
			$.ajax ({
				method: 'POST',
				url: baseUrl,
				data: formData,
				success: function addBook (data){
					console.log(data);
				}
			});
			location.reload();
		});
	});
 });