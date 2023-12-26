let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let mainBtn = document.querySelector("#mainBtn");

// filling users with users info from local storage
let users = JSON.parse(localStorage.getItem("users"));

// onClick to operate in case inputs values are not empty
mainBtn.addEventListener("click", function () {
  if (emailInput.value != "" && passwordInput != "") {
    userSearch();
  } else {
    errorMsg.textContent = "All Inputs Are Required";
  }
});

// checking that info entered is found in the array of users and actions that depend on it
function userSearch() {
  for (let i = 0; i <= users.length; i++) {
    if (
      users[i].email == emailInput.value &&
      users[i].password == passwordInput.value
    ) {
      sessionStorage.setItem("name", JSON.stringify(users[i].name));
      window.location = "home.html";
    } else {
      errorMsg.textContent = "Not Found";
    }
  }
}
