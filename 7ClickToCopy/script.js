const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  coupon.select();
  coupon.setSelectionRange(0, 9999);
  document.execCommand("copy");
  btn.textContent = "Copied";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 1000);
  e.preventDefault();
};

btn.addEventListener("click", copyText);
