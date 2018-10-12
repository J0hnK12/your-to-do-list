$(document).ready(function() {
    /*//Get text from input box and remember
    let nombre = $("input#firstname").val();
    
    //Put text on page
    $("p#response").text(nombre);
    
    //Create new element
    //At the bottom of the page
    $("<p></p>").appendTo("body");
    
    let person1 = {
        //Key       Value   (Pairs)
        firstName: "John",
        lastName: "Smith",
        email: "jsmith@gmail.com"
    }
    
    person1.lastName
    person1["lastName"]
    
    //Saving to the Browser
    localStorage.setItem("personData", person1);
    localStorage.getItem("personData");*/
    
    //For loop for bullet points
    var ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (var i = 1; i <= Number.POSITIVE_INFINITY; i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
    
    //Get information from input box and put into data object in code (Use arrays)
    let nombre = $("input#text").val();
    
    //Pulls or retrieves data from the browser ands puts into text boxes
    
    
    //Save data
    for (var i = 1; i <= Number.POSITIVE_INFINITY; i++) {
        localStorage.setItem("textData", text);
        localStorage.getItem("textData");
    }
    
    //Add click event listener to the button (Use a for loop here because this happens everytime the user clicks the save button)
    for (var i = 1; i <= Number.POSITIVE_INFINITY; i++) {
        $("button#create").click(function() {
		  $("<h1>Save</h1>").appendTo("body");	
	   });
    }
};
