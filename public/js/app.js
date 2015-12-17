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

	//addBook button actions
	$("#addBook").on('click', function(e) {
		e.preventDefault();

		//send new book data to server and reload page to display it
		// TODO: please remove console.logs from production versions -jc
		console.log("CLICKed the Add Book Button");
		$("#createBookButton").on('click', function(e) {
			// TODO: please remove console.logs from production versions -jc
			console.log("Clicked on CREATE BOOK button!");
			e.preventDefault();
			var formData = $("#createBook").serialize();
			$.ajax ({
				method: 'POST',
				url: baseUrl,
				data: formData,
				success: function addBook (data){
					// TODO: please remove console.logs from production versions -jc
					console.log(data);
					// TODO: please implement any reload actions within your success callback.  A reload will result if there is a success or not at this point, which is undesirable. -jc
				}
			});
			location.reload();
		});
	});

	//get id of bookBox
	$(".lowerPage").on("click", ".book", function(e) {
		// TODO: please remove console.logs from production versions -jc
		console.log("CLICKED book box");
		var id = $(this).data("id");
		// TODO: please remove console.logs from production versions -jc
		console.log(id);
		// TODO: please remove unused or commented-out code in production versions -jc
		//location.href = "/views/show"; 
		location.href = baseUrl+"/"+id;
	});



 });
