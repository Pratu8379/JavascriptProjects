const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

add.addEventListener("click", (e) => {
  count.innerHTML++;
  setColor();
  e.preventDefault();
});

sub.addEventListener("click", (e) => {
  count.innerHTML--;
  setColor();
  e.preventDefault();
});
resetCount.addEventListener("click", (e) => {
  count.innerHTML = 0;
  setColor();
  e.preventDefault();
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "Yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}
