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

  //addBook button
  $("#addBook").on('click', function(e) {
	console.log("CLICK");
	$("#createBook").show();
	});


 });