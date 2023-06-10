let signInBtn = document.getElementById("signInBtn");
let signUpBtn = document.getElementById("signUpBtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("title");

signInBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "0";
  tittle.textContent = "Sign in";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
});
signUpBtn.addEventListener("click", function () {
  nameField.style.maxHeight = "60px";
  tittle.textContent = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
});
