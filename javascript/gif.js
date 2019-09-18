$(document).ready(function() {

//array to add buttons on topics to page
var topics = ["Bill Murray", "Tom Cruise", "Emma Stone", "Jennifer Lawrence", "Natalie Portman"];
console.log(topics);

// Render Actor name buttons to html
function renderButtons() {

  // Deleting the actor buttons so that it doesn't keep repeating the buttons
  $("#buttons-view").empty();

  // For Loop and looks in topics array and adds it and creates a new button
  for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of artist-btn to our button
    a.addClass("actor-btn");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

$("#add-actor").on("click", function(event){
  event.preventDefault();
  // This line grabs the input from the textbox
  var actor = $("#actor-input").val().trim();

  // Adding movie from the textbox to our array
  topics.push(actor);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

renderButtons();

$(document).on("click",".actor.btn", displayActorInfo);

renderButtons();

// Event listener for all button elements
$("button").on("click", function() {
  // In this case, the "this" keyword refers to the button that was clicked
  var person = $(this).attr("button-view");

  // Constructing a URL to search Giphy for the name of the person who said the quote
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=c9HP50rS96QQo4tIYQJKMN5CB5Tk33rx&limit=10"
// Performing our AJAX GET request
$.ajax({
  url: queryURL,
  method: "GET"
})

 // After the data comes back from the API
 .then(function(response) {
  // Storing an array of results in the results variable
  var results = response.data;

  // Looping over every result item
  for (var i = 0; i < topics.length; i++) {

    // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

               // Storing the result item's rating
               var rating = results[i].rating;

               // Creating a paragraph tag with the result item's rating
               var p = $("<p>").text("Rating: " + rating);
 
               // Creating an image tag
               var personImage = $("<img>");
 
               // Giving the image tag an src attribute of a proprty pulled off the
               // result item
               personImage.attr("src", results[i].images.fixed_height.url);
 
               // Appending the paragraph and personImage we created to the "gifDiv" div we created
               gifDiv.append(p);
               gifDiv.append(personImage);
 
               // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
               $("#gifs-appear-here").prepend(gifDiv);
             }
           }
         });
     });

// create an api that will render pictures to the html page
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=c9HP50rS96QQo4tIYQJKMN5CB5Tk33rx&limit=10"

  


// display Artists function re-renders the HTML to display the appropriate content
function displayActorInfo() {

  var actor = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/translate?api_key=3BDR82I1cifRXx3xo2DDutQ4aWMrP6C2&s=music";
  

  
 
//div that will hold the gif
// var actorDiv = $("<div class='actor'>");

// var imgURL = response.Poster;

// var image = $("<img>").attr("src", imgURL);

// actortDiv.append(image);

// $("#actor-view").prepend(actorDiv);

      };
}



//create an array that is pulling giphys that i want to pull from api
//loop over the array to make the buttons
//click on each button that hits giphy api with the value of api with a set limit of how many giphys i want
//create a input field that allows you to add to the button array
// giphy's that are pulled populate on page
// create a function click on each giphy to make it move and click to make it stop moving
// be able to type in name into search box that creates a new button to a list that is being populated from an array
)
