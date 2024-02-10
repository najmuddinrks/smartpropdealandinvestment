function validation(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var mobile = document.getElementById("mobile").value;
    var textarea = document.getElementById("textarea").value;
    var email = document.getElementById("email").value;

    // username
    if(user == ""){
        document.getElementById("username").innerHTML = "** Please fill the correct username";
        return false;
    }
    if((user.length <= 2) ||  (user.length > 20)) {
        document.getElementById("username").innerHTML = "**user length must be between 2 and 20 characters";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML = "**only characters are allowed";
        return false;
    }
   


    // password and confirm password protection
    if (pass == "" || conpass == "") {
        if (pass == "") {
          document.getElementById("Password").innerHTML = "** Please fill the correct Password";
        }
        if (conpass == "") {
          document.getElementById("Confirm").innerHTML = "** Please verify the confirm password";
        }
        return false;
      }
      if ((pass.length <= 5) ||  (pass.length >=20)) {
        document.getElementById("Password").innerHTML = "**password length must be between 5 and 20 characters";
        return false;
      }
      if(pass!=conpass){
        document.getElementById("Password").innerHTML = "**password did not matching !";
        return false;
      }

    // mobile number 
    if(mobile == ""){
        document.getElementById("mobileno").innerHTML = "** Please fill the mobile number";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById("mobileno").innerHTML = "** user must write digits only not for the characters";
        return false;
    }
    if(mobile.length!=10){
        document.getElementById("mobileno").innerHTML = "** mobile number must be 10 digits only";
        return false;
    }
    if((mobile.charAt(0)!=9) && (mobile.charAt(0)!=8) && (mobile.charAt(0)!=7)){
        document.getElementById("mobileno").innerHTML = "** mobile number must be start with 9,8,7 digits only";
        return false;
    }


    // email validation
    if(email == ""){
        document.getElementById("emailid").innerHTML = "** Please fill the correct email id field";
        return false;
    }
    if((email.indexOf('@')) <= 0){
        document.getElementById("emailid").innerHTML = "** @ invalid position";
        return false;
    }
    if((email.charAt(email.length -4)!='.') && (email.charAt(email.length -3)!='.')){
        document.getElementById("emailid").innerHTML = "** . invalid position";
        return false;
    }

    if(email == "" || email.indexOf('@') <= 0 || (email.charAt(email.length -4) != '.' && email.charAt(email.length -3) != '.')){
        document.getElementById("emailid").innerHTML = "** Please fill the correct email id field";
        return false;
    }
    // textarea validation
    if(textarea == ""){
        document.getElementById("textareamsg").innerHTML = "** Please fill the Details";
        return false;
    }
    if(textarea.length <= 20) {
        document.getElementById("textareamsg").innerHTML = "**user length must be between 20 and 100 characters";
        return false;
    }  
    else{
        document.getElementsByClassName("form-focus").active("border border-success");
    }
}
function validation2(){
    var user2 = document.getElementById("user2").value;
    var pass2 = document.getElementById("pass2").value;
    var mobile2 = document.getElementById("mobile2").value;
    var checkbox2 = document.getElementById("Qualification2").value;

    // password and confirm password protection
    if (pass2 == "") {
        if (pass2 == "") {
          document.getElementById("Password2").innerHTML = "** Please fill the correct Password";
        }
     
        return false;
      }
      if ((pass2.length <= 5) ||  (pass2.length >=20)) {
        document.getElementById("Password2").innerHTML = "**password length must be between 5 and 20 characters";
        return false;
      }
      if(pass2!=conpass){
        document.getElementById("Password2").innerHTML = "**password did not matching !";
        return false;
      }

  // username2
  if(user2 == ""){
    document.getElementById("username2").innerHTML = "** Please fill the correct username";
    return false;
}
if((user2.length <= 2) ||  (user2.length > 20)) {
    document.getElementById("username2").innerHTML = "**user length must be between 2 and 20 characters";
    return false;
}
if(!isNaN(user2)){
    document.getElementById("username2").innerHTML = "**only characters are allowed";
    return false;
}
 // mobile number 
 if(mobile2 == ""){
    document.getElementById("mobileno2").innerHTML = "** Please fill the mobile number";
    return false;
}
if(isNaN(mobile2)){
    document.getElementById("mobileno2").innerHTML = "** user must write digits only not for the characters";
    return false;
}
if(mobile2.length!=10){
    document.getElementById("mobileno2").innerHTML = "** mobile number must be 10 digits only";
    return false;
}
if((mobile2.charAt(0)!=9) && (mobile2.charAt(0)!=8) && (mobile2.charAt(0)!=7)){
    document.getElementById("mobileno2").innerHTML = "** mobile number must be start with 9,8,7 digits only";
    return false;
}

        // checkbox
        for(i=0; i<Qualification2.length;i++){
            if(Qualification[i].checked==true)
            return true;
        }
        if(Qualification2!=""){
            document.getElementById("skillsetting").innerHTML = "** please select multiple select";
            return false;
            }

}
$(document).ready(function () {
    //called when key is pressed in textbox
    $("#quantity").keypress(function (e) {
       
       var maxlengthNumber = parseInt($('#quantity').attr('maxlength'));
       var inputValueLength = $('#quantity').val().length + 1;
       if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          
                 return false;
      }
      if(maxlengthNumber < inputValueLength) {
          return false;
      }
     });
  });
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  // *************************************lazyLoading*************************************

