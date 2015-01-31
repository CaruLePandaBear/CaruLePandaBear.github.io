$(document).ready( function() {
    console.log("hello jQuery");
    $("#wedding").on("click", function() {
    	console.log("hello click");
        $("#loader").load("services.html");
    });
});