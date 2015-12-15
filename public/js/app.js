$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

	//handlebars set up
	var source = $('#books-template').html();
	var template = Handlebars.compile(source);
	
	//get all database items
	$.get(baseUrl, function (data) {
		var dataHtml = template({ books: data});
		$("#books-list").append(dataHtml);
		console.log("other get!!");
	});

	//hide add book field
	$("#createBook").hide();

	//addBook button actions
	$("#addBook").on('click', function(e) {

		//send new book data to server and reload page to display it
		console.log("CLICKed the Add Book Button");
		$(".lowerPage").hide();
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

	//get id of bookBox
	$(".lowerPage").on("click", ".book", function(e) {
		console.log("CLICKED book box");
		var id = $(this).data("id");
		console.log(id);
		$.ajax ({
			method: 'GET',
			url: baseUrl + '/' + id,
		});
	});


 });