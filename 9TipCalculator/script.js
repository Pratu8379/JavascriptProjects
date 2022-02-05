const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 1000);
};
const calculateTip = (e) => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;
  if (bill === "" || rate === "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please Enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmount = Math.ceil(bill * rate);
    tip.innerHTML = `Tip: Rs. ${tipAmount}`;

    let totalBill = Number(bill) + tipAmount;
    total.innerHTML = `Total Amount : ${totalBill}`;
  }
  e.preventDefault();
};

btn.addEventListener("click", calculateTip);
