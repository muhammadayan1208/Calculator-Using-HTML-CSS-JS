let currentInput = "";
const inputField = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      try {
        currentInput = eval(currentInput) || "";
      } catch {
        currentInput = "Error";
      }
    } else if (buttonText === "C") {
      currentInput = "";
    } else {
      currentInput += buttonText;
    }
    inputField.value = currentInput;
  });
});

const themeSwitcher = document.getElementById("themeSwitcher");
themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});
