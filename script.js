//generate random password ********can generate random password based on length****
function generate(){

    //set password length/complexity
    let passwordLength = document.getElementById("length").value;
    // let passwordLowercase = document.getElementById("lowercase").checked;
    

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    // let values1 = "abcdefghijklmnopqrstuvwxyz";
    // let values2 = "0123456789"
    
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= passwordLength; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }

    document.getElementById("display").value = password;

}

