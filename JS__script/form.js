function validation() {
  // Get form values
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var conpass = document.getElementById("conpass").value;
  var mobile = document.getElementById("mobile").value;
  var textarea = document.getElementById("textarea").value;
  var email = document.getElementById("email").value;

  // Validate username
  if (user == "") {
    document.getElementById("username").innerHTML = "** Please fill in the username field";
    return false;
  }
  if (user.length < 2 || user.length > 20) {
    document.getElementById("username").innerHTML = "** Username must be between 2 and 20 characters";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML = "** Only characters are allowed";
    return false;
  }

  // Validate password and confirm password
  if (pass == "" || conpass == "") {
    document.getElementById("Password").innerHTML = "** Please fill in both password fields";
    return false;
  }
  if (pass.length < 5 || pass.length > 20) {
    document.getElementById("Password").innerHTML = "** Password length must be between 5 and 20 characters";
    return false;
  }
  if (pass != conpass) {
    document.getElementById("Password").innerHTML = "** Passwords do not match";
    return false;
  }

  // Validate mobile number
  if (mobile == "") {
    document.getElementById("mobileno").innerHTML = "** Please fill in the mobile number field";
    return false;
  }
  if (isNaN(mobile) || mobile.length != 10 || ![7, 8, 9].includes(parseInt(mobile.charAt(0)))) {
    document.getElementById("mobileno").innerHTML = "** Invalid mobile number";
    return false;
  }

  // Validate email
  if (email == "") {
    document.getElementById("emailid").innerHTML = "** Please fill in the email field";
    return false;
  }
  if (!email.includes("@") || email.lastIndexOf(".") <= email.indexOf("@")) {
    document.getElementById("emailid").innerHTML = "** Invalid email address";
    return false;
  }

  // Validate textarea
  if (textarea == "") {
    document.getElementById("textareamsg").innerHTML = "** Please fill in the details";
    return false;
  }
  if (textarea.length < 20 || textarea.length > 100) {
    document.getElementById("textareamsg").innerHTML = "** Details must be between 20 and 100 characters";
    return false;
  }
}