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

		console.log("CLICKed the Add Book Button");
		//hides main screen and reveals add book form
		$(".bookBox").hide();
		$("#createBook").show();
		//createBook Button actions
		//if I change the line bellow to, 
		//$("#createBookButton").on('submit', function(event) {
		// then the click leads to a page refresh, even though I filled it with 
		// prevent deafuts. 
		$("#createBookButton").on('click', function(e) {
			event.preventDefault();
			//send form data to database
			var formData = $("#createBook").serialize();
			//this console log is succesfull and returns the form data 
			console.log(formData);
			$.ajax ({
				method: 'POST',
				url: baseUrl,
				data: formData,
				//these console logs don't happen
				success: function addBook (data){
					console.log("I'm in success");
					console.log(data);
				}
			});
			//all these things happen
			event.preventDefault();
			console.log(formData);
			$(".bookBox").show();
			$("#createBook").hide();
			console.log("CLICKed on the Create Book Button");
			//when i run this, first I get a 404 POST error and then it 

		});
	});
 });