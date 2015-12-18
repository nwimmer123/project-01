

# Read It #
## Book Reviews and Discussion

[heroku link](https://mysterious-basin-2931.herokuapp.com/)

[github link](https://github.com/nwimmer123/project-01)

## Synopsis ##

The purpose of Read It is for friends to be able to share book recommendations and discuss their favorite books in the reviews section.  Users can add any book they think their friends should read. Users can peruse the list of books recommended by their friends and if they would like more information, they can click on it to see more info. When they do so, they will also see reviews left by friends and they will be able to add their own reviews or discussion points.


## Screenshots ##

The Home Page

![alt tag](http://i.imgur.com/JHTeHes.png)

The Show Page

![alt tag](http://i.imgur.com/Uze5y3Y.png)

## Motivation 

I have always wanted to have a way to discuss books and comics with my friends with whom I share similar reading tastes. I am also always seeking out good book recommendations from people I know. Many of my friends who meet these criteria live far away from me. Also, whenever I finish a book I have really enjoyed, I want to share it with others so that I can ta about the different plot points I found intriguing. Therefore, I wanted to make a site where I could do these things.  Once all the planned improvements are complete, then my vision will have been achieved.

## Challenges and Code Samples

One of the greatest challenges I faced was getting the show page to display when an individual book was clicked on. I struggled with figuring out how to get the server to send the data where I wanted it to go. I read the express documentation particularly the part about results and tried a .location .redirect and .render. I decided that render was the way to go, but I could not make it work. I definetley got stuck here for some time. If it weren't for the timely intervention of Daniel the TA I might have gotten even more upset. He helped me format my render correctly and realized that I needed server side handlebars to make it work. The most satisfying aspect was the revelation that I had figured out the correct avenue of attack, which was gratifying.

```
//getting one book
app.get('/api/books/:id', function createSingleBook(req, res) {
	//get book by id and send it to views/show.html
	db.Book.findOne({_id: req.params.id}, function(err, book) {
		console.log(book);
		res.render("show",book);
	});
});
```

## Technology Used ##
* Languages: Javasript, HTML, CSS 
* Frameworks: Moongoose, Node
* Libraries: JQuery, JSON


## Future of the Site ##

There are many planned additions to this site. 

### User name and passwords
* Users will sign up for the site and their screen name will auto populate in all contributor fields.
* Only the users who submitted a book to the site will be allowed to edit or delete the book.

### Book rating system ###
* Users will be able to rank books. Each user will be allowed to rank a book once.
* The rank options will be:  Worst Ever, Bad, Ehhh, Good, GOAT.
* Prior to implementing the ranking system, a user sign in system must be implemented to reduce trolling and excessive up and down voting.
* A detailed graph of all votes per category will be shown via a button click.

### Spoiler Alerts ###
* When a user submits a comment they will have the option to label the comment with a spoiler alert. This will toggle on a red warning in the center of the review box.
* When a user goes to read comments they will be able to toggle spoiler alerts on or off.
* This will allow the site to serve a dual purpose as both a recommendations site and a book discussion site. 

### Nested Comments ###
* Users will be able to respond to other users comments leading to a nested comments section.

### Search Capability ###
* Users will be able to search the book recommendations by the different fields.

### Site Organization ###
* The default setting will be for the books to be displayed based on the date of submission, with the most recent submissions appearing on the top.
* Once a ratings system is in place, then the books will be ranked by highest rankings.

