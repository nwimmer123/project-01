$(document).ready(function() {

	console.log('SANITY CHECK!! app.js loaded!');

	var baseUrl = '/api/books';

//attempt at switching to handlebars

	var allBooks = [];

	var $booksList = $('#books-list');

	var $createBook = $('#create-book');

	var source = $('#books-template').html();
	var template = Handlebars.compile(source);

	var render = function() {
		$('#books-list').empty();
		var booksHtml = template({ books: allBooks });
		$('#books-list').append(booksHtml);
	};

	$.get(baseUrl, function (data) {
		console.log(data);
		allBooks = data.books;
		render();
	});

	//showing books on the homepage
	//i want these to append to a distinct form each time, so when I go to capture 
	//a specific book later, there is something to refence later as the selector
	// $.ajax({
	// 	method: 'GET',
	// 	url: baseUrl,
	// 	success: function showBooks (data) {
	// 		data.forEach(function (element) {
	// 			//debugger;
	// 			console.log(element._id);
	// 			$(".bookBox").append('<li class="list-group-item book" data-id="' + element._id + '">');
	// 			$(".bookBox").append("<br><p>" + "<b>Contributor:  </b>" + element.contributor + "</p>");
	// 			$(".bookBox").append("<p>" + "<b>Title:  </b>" + element.title + "</p>");
	// 			$(".bookBox").append("<p>" + "<b>Author:  </b>" + element.author + "</p>");
	// 			$(".bookBox").append("<p>" + "<b>Genre:  </b>" + element.genre + "</p><br>");
	// 			$(".bookBox").append("</div>");
	// 		});
	// 	}

	// });

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