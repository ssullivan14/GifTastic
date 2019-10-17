$(document).ready(function() {
    var actorArray = ["Bill Murray" , "Natalie Portman" , "Hillary Duff"];
    console.log(actorArray);

//render actors name to html 
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < actorArray.length; i++) {
        $("buttons-view").append('<button>' + actorArray[i] + "</button>")
    }
}
})