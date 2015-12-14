$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

//attempt at switching to handlebars to get books from database
//debugger;
	// var allBooks = [];
	// //console.log("ALL BOOKS VAR" allBooks);

	// var $booksList = $('#books-list');
	// //("Books LIST VAR" allBooks);

	// var $createBook = $('#create-book');
//debugger;
	var source = $('#books-template').html();
	var template = Handlebars.compile(source);
	console.log("TEMPLATE IS ", template);

	console.log(baseUrl);
	$.get(baseUrl, function (data) {
		console.log("Get call data:",data);
		var dataHtml = template({ books: data});
		console.log("dataHtml VAR '", dataHtml);
		$("#books-list").append(dataHtml);
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

	// $(".bookBox").on("click", function(e) {
	// 	console.log("CLICKED book box");
	// 	var bookId = $(this).data.title;
	// 	console.log(bookId);


	// });


 });