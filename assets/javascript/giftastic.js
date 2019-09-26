
// Button Array
    var displayButton = ["scooby-doo", "velma Dinkley", "Fred Jones", "Daphne Blake", "Shaggy Rogers"];


$(document).ready(function(){
    for (var i = 0; i < displayButton.length; i++) {
        $("#buttonDisplay").append("<button type='button' onclick='searchGif(\"" + displayButton[i] + "\")' class='btn btn-primary' value=' " + displayButton[i] + "'> " + displayButton[i] + " </button>");
    }
});

function murderButtonClick() {
    var userInput = $("#input").val();
    searchGif(userInput);
}
console.log(murderButtonClick);
//
function submitPress() {
    var userInput = $("#input").val();

    if (userInput) {
        $("#buttonDisplay").append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}
console.log(submitPress);
//
function searchGif(gifName) {
    $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q= " + gifName + " &api_key=2MmyuB1HEPLwkXSFnWnFmBZel1aSzDIB",
            type: "GET",
        })
        .done(function(response) {
            displayGif(response);
        })
    
}
console.log(searchGif);
function displayGif(response) {
    $("#imageDisplay").empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='rating'> Rating: " +(response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still"  class="movImage" style= "width:250px">';
        
        image = '<div class="col-md-4">' + image + "</div>";
        $("#imageDisplay").append(image); 

    }
    
    $(".movImage").on("click", function() {
        var state = $(this).attr("data-state");
        console.log(state);
        if (state == "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
    
}
