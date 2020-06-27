
// var lowercase = "abcdefghijklmnopqrstuvwxyz"
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var numbers = "0123456789"
// var specialCharacters = "!@#$%^&*()_+"




// //generate random password ********can generate random password based on length****
// function generate(){
//     var password = "";
//     if (document.generator.lowercase.checked){
//         password += lowercase
//     }
//     if (document.generator.uppercase.checked){
//         password += uppercase
//     }
//     if (document.generator.lowercase.checked){
//         password += numbers
//     }
//     if (document.generator.lowercase.checked){
//         password += specialCharacters
//     }
// }

//     var 




    //possible password values
    var values = "abcdefghijklmnopqrstuvwxyz";
    var value1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var value2 = "0123456789"
    var value3 = "!@#$%^&*()_+"
    
    var length = document.getElementById("Length").value;

    

    // for(var i = 0; i <= length; i++){
    //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    // }


function generate(){
    // //create for loop to choose password characters
    var password = "";
    if (document.lowercase.checked){
        password += lowercase
    
    // }

    // for(var i = 0; i <= passwordLength + passwordLowercase; i++){
    //     password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)))
    // }
    for(var i = 0; i <= length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

}














// //generate random password ********can generate random password based on length****
// function generate(){

//     //set password length/complexity
//     let passwordLength = document.getElementById("length").value;
//     let passwordLowercase = document.getElementById("lowercase").checked;
    
  
//     //possible password values
//     let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
//     let values1 = "abcdefghijklmnopqrstuvwxyz";
//     // let values2 = "0123456789"
    
//     let password = "";
  
//     //create for loop to choose password characters
//     for(var i = 0; i <= passwordLength; i++){
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
//     }
  
  
//     // if (passwordLength) {
//     //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
//     // }
  
//     // for(var i = 0; i <= passwordLength + passwordLowercase; i ++){
//     //     password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//     // }        
                                                
//     //add password to textbox/display area
//     document.getElementById("display").value = password;
  
//   }