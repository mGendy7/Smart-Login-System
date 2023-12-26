// calling the name from the session storage and inserting it as an innerHTML
document.querySelector("#welcomeUser").innerHTML = `Welcome ${JSON.parse(
  sessionStorage.getItem("name")
)}`;

// if logout's clicked session storage resets and page changes
document.querySelector("#logout").addEventListener("click", function () {
  sessionStorage.clear();
  window.location = "index.html";
});
