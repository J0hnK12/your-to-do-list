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
    let nombre = $("input#text").val();
    
    //Pulls or retrieves data from the browser & puts into text boxes
    $("p#response").text(nombre);
    
    //Save data
    localStorage.setItem("personData", person1);
    localStorage.getItem("personData");
    
    //Add click event listener to the button (Use a for loop here because this happens everytime the user clicks the save button)
    
    
    //jQuery on the alert yes or no, if yes, add new bullet point, else (no), don't create bullet point
    
});
