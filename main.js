const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let hasError = false;

  if (!firstName) {
    document.querySelector(".er-1").classList.add("active");
    firstNameInput.classList.add("er");
    document.querySelector(".f-1 .error-icon").classList.add("active")
    hasError = true;
  }

  if (!lastName) {
    document.querySelector(".er-2").classList.add("active");
    lastNameInput.classList.add("er");
    document.querySelector(".f-2 .error-icon").classList.add("active")
    hasError = true;
  }

  if (!email || !emailRegex.test(email)) {
    document.querySelector(".er-3").classList.add("active");
    emailInput.classList.add("er");
    document.querySelector(".f-3 .error-icon").classList.add("active")
    hasError = true;
  }

  if (!password || !passwordRegex.test(password)) {
    document.querySelector(".er-4").classList.add("active");
    passwordInput.classList.add("er");
    document.querySelector(".f-4 .error-icon").classList.add("active")
    hasError = true;
  }

  if (!hasError) {
    document.querySelectorAll(".error").forEach((e) => {
    e.classList.remove("active");
    });
    document.querySelectorAll("input").forEach((e) => {
      e.value = "";
      e.classList.remove("er")
    });

    document.querySelectorAll(".error-icon").forEach((e) => {
      e.classList.remove("active")
    })
  }
});
