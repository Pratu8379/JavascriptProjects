const toggleDarkMode = document.querySelector(".toggle-darkmode");

const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");
console.log(darkMode);

// set dark mode
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};

// disable dark mode
OneCardLiteInFormal;
OneCardLiteInformal;

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};

// save dark mode history

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
