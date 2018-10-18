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
    
});
