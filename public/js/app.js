$(document).ready(function() {

  console.log('SANITY CHECK!! app.js loaded!');

  var baseUrl = '/api/books';

  $.ajax({
  	method: 'GET',
  	url: baseUrl,
  	success: function showBooks (data) {
  		console.log("I'm trying to get books!!");
  		console.log(baseUrl);
  		data.forEach(function (element) {
			$(".bookBox").append("<br><p>" + "<b>Contributor:  </b>" + element.contributor + "</p>");
			$(".bookBox").append("<p>" + "<b>Title:  </b>" + element.title + "</p>");
			$(".bookBox").append("<p>" + "<b>Author:  </b>" + element.author + "</p>");
			$(".bookBox").append("<p>" + "<b>Genre:  </b>" + element.genre + "</p><br>");
		});
  	}

  });

 });