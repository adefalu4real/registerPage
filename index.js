let signInBtn = document.getElementById("signInBtn");
let signUpBtn = document.getElementById("signUpBtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("title");
let nameInput = document.getElementById("nameInput");
let emailValue = document.getElementById("email");
let password = document.getElementById("password");

function validate() {
  var fullName = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;

  var nameInput = document.getElementById("nameInput").value;
  if (!fullName.test(nameInput)) {
    alert("Please enter full name");
    document.getElementById("nameInput").focus();
    return false;
  } else {
    alert("successful");
    return true;
  }
}

var emailValidation = function () {
  emailValue = email.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailErr = document.getElementById("email-err");
  if (emailValue == "") {
    emailErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailValue)) {
    emailErr.innerHTML = "Email Address must be in valid formate with @ symbol";
  } else {
    emailErr.innerHTML = "";
    return true;
  }
};
email.oninput = function () {
  emailValidation();
};
var passwordValidation = function () {
  passwordValue = password.value.trim();
  validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let passwordErr = document.getElementById("passwordErr");
  if (passwordValue == "") {
    passwordErr.innerHTML = "Password is required";
  } else if (!validPassword.test(passwordValue)) {
    passwordErr.innerHTML =
      "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
  } else {
    passwordErr.innerHTML = "";
    return true;
  }
};
password.oninput = function () {
  passwordValidation();
  //   confirmPasswordValidation();
};

signInBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "0";
  tittle.textContent = "Sign in";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  emailValidation();
  passwordValidation();
});
signUpBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "60px";
  tittle.textContent = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  emailValidation();
  passwordValidation();
  validate();
});
