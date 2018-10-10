$(document).ready(function() {
    //Get text from input box and remember
    let nombre = $("input#firstname").val();
    
    //Put text on page
    $("p#response").text(nombre);
    
    //Create new element
    //At the bottom of the page
    $("<p></p>").appendTo("body");
};
