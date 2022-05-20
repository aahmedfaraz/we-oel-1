const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("password").value.length >= 8) {
    window.location.href = "./index.html";
    localStorage.setItem("star-auth", true);
  } else {
    alert("Make strong Password");
  }
});
