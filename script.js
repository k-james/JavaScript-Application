/*jslint browser: true*/
/*global $, jQuery*/

//init
document.getElementById("#target");

$("#target").submit(function (event) {
    'use strict';
    var input = $("#target input").serializeArray();
    window.console.log(input);
        //event.preventDefault(); 
            //window.console.log("prevent default");           
});

function inputAlpha(inputtext) {
    'use strict';
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        window.console.log("inputAlpha-true");
        return true;
    } else {
        inputtext.focus();
        window.console.log("inputAlpha-false");
        return false;
    }
}//inputAlpha

function inputNumeric(inputtext) {
    'use strict';
    var numExpr = /^[0-9]+$/;
    if (inputtext.value.match(numExpr)) {
        window.console.log("inputNumeric-true");
        return true;
    } else {
        inputtext.focus();
        window.console.log("inputNumeric-false");
        return false;
         
    }
}//inputNumeric

function inputEmail(inputtext) {
    'use strict';
    var emailExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputtext.value.match(emailExpr)) {
        window.console.log("inputEmail-true");
        return true;
    } else {
        window.console.log("inputEmail-false");
        return false;
    }
}//inputEmail

//VALIDATION FUNCTION    
document.getElementById("target").onsubmit = function formValidation() {
    'use strict';
    window.console.log("validation function invoked");
    var firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        email = document.getElementById('email'),
        phone = document.getElementById('phone'),
        streetAddress = document.getElementById('streetAddress'),
        postalCode = document.getElementById('postalCode'),
        city = document.getElementById('city'),
        otherAddress = document.getElementById('otherAddress');
    if (firstName.value.length === 0) {
        firstName.focus();
        return false;
    }
    if (inputAlpha(firstName)) {
        if (inputAlpha(lastName)) {
            if (inputEmail(email)) {
                if (inputNumeric(phone)) {
                    if (inputAlpha(streetAddress)) {
                        if (inputNumeric(postalCode)) {
                            if (inputAlpha(city)) {
                                if (inputAlpha(otherAddress)) {
                                    return true;

                                }//inputAlpha otherAddress
                            }//inputAlpha city   
                        }//inputNumeric postalCode    
                    }//inputNumeric streetAddress
                }//inputNumeric phone
            }//inputEmail email
        }//inputAlpha lastName
    }//inputAlpha firstName
    return false;
};//formValidation



//function inputAlphaNumeric(inputtext) {
//    var alphaNumExpr = /^[0-9a-zA-Z]+$/;
//    if (inputtext.value.match(alphaNumExpr)) {
//        window.console.log("inputAlphaNumeric-true");
//        return true;
//    } else {
//        window.console.log("alphaNumExpr-false");
//        return false;
//    }
//}//inputAlphaNumeric

//function inputAddress(inputtext) {
//    var addressExpr = /^[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/;
//    if(inputtext.value.match(addressExpr)) {
//        window.console.log("inputAddress-true");
//        return true;
//    } else {
//        window.console.log("inputAddress-false");
//        return false;
//    }
//}//inputAddress

//function inputLength(inputtext) {
//    var lengthExpr = inputtext.value;
//    if (lengthExpr.length >= lengthExpr.length <= max) {
//        window.console.log("inputLength-true");
//        return true;
//    } else {
//        window.console.log("inputLength-false");
//        return false;
//    }
//}//inputLength
//    
//function inputSelection(inputtext) {
//    if (inputtext.value === "other") {
//        window.console.log("inputSelection-true");
//        return true;
//    } else {
//        window.console.log("inputSelection-false");
//        return false;
//    }
//  //if(this.checked==!true){document.target.otherAddress.disable = true;}  
//}//inputSelection


//-------------------------------------------->>>>
//doughForm


//$("#doughOption").submit(function(event) {
//        var input = $("#target input").serializeArray();
//            window.console.log(input);
//        //event.preventDefault(); 
//            //window.console.log("prevent default");           
//    });


function check() {
    'use strict';
    document.getElementById("form").checked = true;
    window.console.dir("doughOptions-checked");
}

function uncheck() {
    'use strict';
    document.getElementById("form").checked = false;
    window.console.dir("doughOptions-Not Checked");
}







