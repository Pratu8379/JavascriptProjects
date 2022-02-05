const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initalPassword = "";
  upperCase.checked ? (initalPassword += uCase) : "";
  lowerCase.checked ? (initalPassword += lCase) : "";
  pNumber.checked ? (initalPassword += number) : "";
  pSymbol.checked ? (initalPassword += symbol) : "";

  password.value = generatePassword(pLength.value, initalPassword);
});

function generatePassword(l, initalPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initalPassword.charAt(
      Math.floor(Math.random() * initalPassword.length)
    );
  }
  return pass;
}

copy.addEventListener("click", () => {
  if (password.value === "") {
    alert("please generate a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("password is cpoied");
  }
});
