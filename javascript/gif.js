// var queryURL = "https://api.giphy.com/v1/gifs/search?" +  artist + "api_key=3BDR82I1cifRXx3xo2DDutQ4aWMrP6C2&q=10&limit=25&offset=0&rating=PG-13&lang=en";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//array artists/bands
var topics = ["Camila Cabello", "Tank & Bangas", "Amos Lee", "Phony Ppl", "Lizzo"];
console.log(topics);

// display Artists function re-renders the HTML to display the appropriate content
function displayArtistInfo() {

  var musician = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/translate?api_key=3BDR82I1cifRXx3xo2DDutQ4aWMrP6C2&s=music";
  

  //AJAX call for the artist button that is clicked
  $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
        
 
//div that will hold the artist
var artistDiv = $("<div class='artist'>");

var imgURL = response.Poster;

var image = $("<img>").attr("src", imgURL);

artistDiv.append(image);

$("#artist-view").prepend(artistDiv);

      });
}

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < topics.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of artist-btn to our button
    a.addClass("artist-btn");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

$("#add-artist").on("click", function(event){
  event.preventDefault();
  // This line grabs the input from the textbox
  var artist = $("#artist-input").val().trim();

  // Adding movie from the textbox to our array
  topics.push(artist);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

renderButtons();

$(document).on("click",".artist.btn", displayArtistInfo);

renderButtons();

//create an array that is pulling giphys that i want to pull from api
//loop over the array to make the buttons
//click on each button that hits giphy api with the value of api with a set limit of how many giphys i want
//create a input field that allows you to add to the button array
// giphy's that are pulled populate on page
// create a function click on each giphy to make it move and click to make it stop moving
// be able to type in name into search box that creates a new button to a list that is being populated from an array

