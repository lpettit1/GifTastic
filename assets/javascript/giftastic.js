$(document).ready(function(){
    // Button Array
    var displayButton = ["Barnaby", "cully", "Jones", "Troy", "sykes"];

    function imgDisplay(){
         // API input   
        $("#imageDisplay").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=2MmyuB1HEPLwkXSFnWnFmBZel1aSzDIB"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            // start and stop gif
            for(var i = 0; i < limit; i++) {

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
                
                var image = $("<img>");
                image.attr("src", response.data[i].image.original_still.url);
                image.attr("data-still", response.data[i].image.original_still.url);
                image.attr("data-animate", response.data[i].image.original_still.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");

                var rating = response.data[i].image.original_still.url;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating)

                $("#imageDisplay").append(displayDiv);

            }

        });
    }
    //to display render buttons
    function rendButtons() {
        $("#buttonDisplay").empty();

        for (var i = 0; i < buttonDisplay.length; i++){

            var newButton = $("<button>")
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input");
            newButton.attr("data-name", buttonDisplay[i]);
            newButton.attr(buttonDisplay[i]);
            $("#buttonDisplay").append(newButton);
        }
    }

    // changing the image state
    function icState() {
        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");

        if(state === "still"){
            $(this).attr("src", animateImage);
            $(this).attr("data-state", "animate");

        }

        else if(state === "still"){
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");

        }
    }


    // click function
    $("#submitPress").on("click", function(){

        var input = $("#input").val().trim();
        from.reset();
        buttonDisplay.push(input);

        rendButton();

        return false;

    })

    rendButton();

    $(document).on("click", "#input", displayImg);
    $(document)>on("click", "gif", icState);

});