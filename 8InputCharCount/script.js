const count = document.querySelector(".count");
const input = document.querySelector(".input-text");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
