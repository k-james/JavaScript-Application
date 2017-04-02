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
        inputtext.focus();
        window.console.log("inputEmail-false");
        return false;
    }
}//inputEmail

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





//-------------------------------------------->>>>
//doughOption

var doughOption = $("input[name=dough]").click(function (event) {
    'use strict';
    doughOption = $("input[type=radio][name=dough]:checked").val();
    window.console.log(doughOption);
});


//sizeOption
var sizeOption = $("#sizeOption").change(function (event) {
    'use strict';
    sizeOption = $("#sizeOption option:selected").val();
    window.console.log(sizeOption);
    window.console.log(doughOption);
});


//price
var subTotal = sizeOption.change(function (event) {
    'use strict';
    var display = $("input[name=display]");
    if (doughOption === "handToss" && sizeOption === "small") {
        subTotal = "9.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "handToss" && sizeOption === "medium") {
        subTotal = "12.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "handToss" && sizeOption === "large") {
        subTotal = "14.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "thinCrust" && sizeOption === "medium") {
        subTotal = "11.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "thinCrust" && sizeOption === "large") {
        subTotal = "13.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "glutenFree" && sizeOption === "small") {
        subTotal = "10.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "large") {
        subTotal = "16.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "exLarge") {
        subTotal = "19.99";
        display.val(display.val() + subTotal);
    }
    window.console.log(subTotal);
});

//cheeseOption
var cheeseOption = $("#cheeseOption").change(function (event) {
    'use strict';
    var display = $("input[name=display]"),
        extra = 2.99,
        double = 3.99;
    extra = parseFloat(extra);
    double = parseFloat(double);
    subTotal = parseFloat(subTotal);
    cheeseOption = $("#cheeseOption option:selected").val();
    if (cheeseOption === "extra") {
        subTotal = parseFloat(extra + subTotal);
        display.val(display.val() + subTotal);
    }
    if (cheeseOption === "double") {
        subTotal = parseFloat(double + subTotal);
        display.val(display.val() + subTotal);
    }
});

//sauceOption
var sauceOption = $("#sauceOption").change(function (event) {
    'use strict';
    var display = $("input[name=display]"),
        hearty = 0.99,
        bbq = 1.99;
    hearty = parseFloat(hearty);
    bbq = parseFloat(bbq);
    subTotal = parseFloat(subTotal);
    sauceOption = $("#sauceOption option:selected").val();
    if (sauceOption === "hearty") {
        subTotal = parseFloat(hearty + subTotal);
        display.val(display.val() + subTotal);
    }
    if (sauceOption === "bbq") {
        subTotal = parseFloat(bbq + subTotal);
        display.val(display.val() + subTotal);
    }
});

//toppingOptions
var toppingOption = $("input[name=topping]").click(function (event) {
    'use strict';
    var options = [];
    toppingOption = $("input[type=radio][name=topping]:checked").each(function (i) {
        options[i] = $(this).val();
    });
    window.console.log(toppingOption);
});


//-----------------------------------------
//billing card

$("#billingInfo").click(function () {
    'use strict';
    if ($("#billingInfo").attr("checked")) {
        $("#firstName").attr($("#firstName2").val());
        $("#lastName").attr($("#lastName2").val());
        $("#email").attr($("#email2").val());
        $("#streetAddress").attr($("#streetAddress2").val());
        $("#postalCode").attr($("#postalCode2").val());
        $("#city").attr($("#city2").val());
    }
});





