let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let mainBtn = document.querySelector("#mainBtn");
let errorMsg = document.querySelector("#errorMsg");
let users = [];

// filling the array in case info was found in local storage
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

// saving every user in an object and pushing them into an array that will be saved in local storage
function saveInfo() {
  let userInfo = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  users.push(userInfo);
  localStorage.setItem("users", JSON.stringify(users));
}

// changes that happen when user info is valid
function verified() {
  errorMsg.classList.replace("text-danger", "text-success");
  errorMsg.innerHTML = "Great!";
  setTimeout(function () {
    window.location = "index.html";
  }, 2000);
}

// conditions to be checked and their actions onClick
mainBtn.addEventListener("click", function () {
  if (nameInput.value != "" && emailInput.value != "" && passwordInput != "") {
    if (validateName() && validateEmail()) {
      let userExisits = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == emailInput.value) {
          errorMsg.innerHTML = "User Exists";
          userExisits = true;
          break;
        }
      }
      if (!userExisits) {
        saveInfo();
        verified();
      }
    } else {
      errorMsg.textContent =
        "Name Must Exceed 3 Letters And Email Must be Valid";
    }
  } else {
    errorMsg.textContent = "All Inputs Are Required";
  }
});

// validation of inputs value
function validateName() {
  let nameRegex = /.{3,}/i;
  return nameRegex.test(nameInput.value);
}

function validateEmail() {
  let emailRegex = /\w+@\w+.\w{2,6}/gi;
  return emailRegex.test(emailInput.value);
}
