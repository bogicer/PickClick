document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
      document.getElementById("welcome").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("l").style.display = "none";
      document.getElementById("w").style.display = "block";
    } else {
      document.getElementById("msg").textContent = "Невірний логін або пароль";
    }
  });