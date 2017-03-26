/*jslint browser: true*/
/*global $, jQuery*/

//PREVENT DEFAULT
$("#target").submit(function(event) {
        var input = $("#target input").serializeArray();
            window.console.log(input);
        //event.preventDefault(); 
            //window.console.log("prevent default");           
    });

//VALIDATION FUNCTION    
document.getElementById("target").onsubmit = function formValidation() {
        window.console.log("validation function invoked");
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var streetAddress = document.getElementById('streetAddress');
    if (firstName.value.length === 0) {
        firstName.focus();
            return false; 
}   if (inputAlpha(firstName)) {
    return true;
} else {
    return false;
}//inputAlpha firstName
    
}//formValidation

function inputAlpha(inputtext) {
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputtext.value.match(alphaExp)) {
        return true;
    } else {
        return false;
    }
}//inputAlpha

function inputNumeric(inputtext) {
    var numExpr = /^[0-9]+$/;
    if(inputtext.value.match(numExpr)) {
        return true;
    } else {
        return false;
    }
}//inputNumeric