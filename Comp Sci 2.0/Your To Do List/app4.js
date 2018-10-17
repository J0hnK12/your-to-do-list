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
    
    
    //Get information from input box & put into data object in code (Use arrays)
    let nombre = $("myInput").val();
    
    //Pulls or retrieves data from the browser & puts into text boxes
    $("myInput").text(nombre);
    
    //Save data
    localStorage.setItem("personData", person1);
    localStorage.getItem("personData");
    
    //Add click event listener to Create New Bullet Point button
    for (var i = 0; i < 10; i++) {
        
    }
    
    //Add click event listener to Save button
    for (var i = 0; i < 10; i++) {
        
    }
    
    //jQuery on the alert "Okay" (yes) or "Cancel" (no), if the user clicks the okay button, add new bullet point. However, if the user clicks the cancel button, don't create bullet point
    
});
