$(document).ready(function() {
    
    //Get information from input box & put into data object in code (Use arrays)
    let nombre = $("#myInput").val();
    $("#myBtn").click(function() {
		$("<li><input id = 'myInput'></li>").appendTo("ul");	
	});
    
    //Pulls or retrieves data from the browser & puts into text boxes
    $("#myInput").text(nombre);
    
    //Add click event listener to Save button
    for (var i = 0; i < 10; i++) {
        localStorage.setItem("#myInput", input1);
        localStorage.getItem("#myInput");
    }
    
    //If and else statement for the buttons in the alert saying "Okay" (yes) or "Cancel" (no), if the user clicks the okay button, add new bullet point. However, if the user clicks the cancel button, don't create bullet point
    
});
