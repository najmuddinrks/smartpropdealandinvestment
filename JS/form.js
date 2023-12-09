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
