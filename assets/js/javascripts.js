$(document).ready( function() {
    console.log("hello jQuery");
    $("#wedding").on("click", function() {
    	console.log("hello click");
    	console.log($("#loader"));
        $("#loader").load("services.html #loader", function() {
  				alert( "Load was performed." );
			}
		);
    });
});