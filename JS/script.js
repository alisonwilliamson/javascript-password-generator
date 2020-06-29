// defines all the different character variables
var uppercase = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-=+[]{}";



// generates the password
function generatePassword() {
    var password = "";
    var passwordEl = "";
    var length = document.getElementById("length").value;

    // grabs the element from the HTML and checks if the checkbox 
    // is checked, if it is it pulls the correct variable set and 
    // adds it to the password string
    if ( document.getElementById("uppercase").checked ) {
        password += uppercase;
    }

    if ( document.getElementById("lowercase").checked ) {
        password += lowercase;
    }

    if ( document.getElementById("numbers").checked ) {
        password += numbers;
    }

    if ( document.getElementById("symbols").checked ) {
        password += specialChar;
    }

    // if the password string is empty it displays that you must have 
    // at least one character type selected
    if ( password === "" ) {
        passwordEl = "You must select at least one character type.";
    }

    // if password string is not empty it randomly selects characters from the 
    // string to be displayed based on the length the user entered
    else {
        for ( var i = 0; i < length; ++i ) {
            passwordEl += password[Math.floor(Math.random() * password.length)];
        }
    }

    // displays the generated password in the display box
    document.getElementById("display").value = passwordEl;
}