function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}

const input = document.querySelector(".email");
const button = document.querySelector(".buttonWork");
const buttonDn = document.querySelector("#buttonWork");
const startBtn = document.querySelector(".getStarted");
const startBtn2 = document.querySelector(".getStarted2");
const startBtn3 = document.querySelector("#getStarted3");
const box = document.querySelector(".smallBox_1");
const box2 = document.querySelector(".smallBox2");
const box3 = document.querySelector(".smallBox_3");

button.addEventListener("click", handleClick);
function handleClick() {
  button.style.backgroundColor = "green";
  button.textContent = "success";
  alert("You are welcome");
  input.style.backgroundColor = "green";
}
buttonDn.addEventListener("click", handleClickDn);
function handleClickDn(params) {
  buttonDn.style.backgroundColor = "green";
  buttonDn.textContent = "success";
  alert("You are welcome");
  //   input.style.backgroundColor = "green";
}

input.addEventListener("keydown", checkInput);
function checkInput() {
  button.style.backgroundColor = "green";
  button.textContent = "success";
  // alert("You are welcome");
  //   input.style.backgroundColor = "green";
}

startBtn.addEventListener("mouseover", handleBtn);
function handleBtn() {
  startBtn.style.backgroundColor = "green";
  //   startBtn.style.color = "black";
}

startBtn2.addEventListener("mouseover", handleBtn2);
function handleBtn2() {
  startBtn2.style.backgroundColor = "orange";
}
startBtn3.addEventListener("mouseover", handleBtn3);
function handleBtn3() {
  startBtn3.style.backgroundColor = "green";
}

box.addEventListener("mouseover", boxPage);
function boxPage() {
  box.style.height = "60px";
  box.style.width = "60px";
  box.style.backgroundColor = "orange";
}

box2.addEventListener("mouseover", boxPage2);
function boxPage2() {
  box2.style.height = "60px";
  box2.style.width = "60px";
  box2.style.backgroundColor = "orange";
}

box3.addEventListener("mouseover", boxPage3);
function boxPage3() {
  box3.style.height = "60px";
  box3.style.width = "60px";
  box3.style.backgroundColor = "orange";
}
