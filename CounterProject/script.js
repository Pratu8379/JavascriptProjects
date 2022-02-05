let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let counter_Number = document.querySelector(".counter-Number");

let val = Number(counter_Number.innerHTML);

btn1.addEventListener("click", function () {
  if (val >= -1) {
    val += 1;
    counter_Number.innerHTML = val;
    counter_Number.style.color = "black";
  } else if (val <= -1) {
    val += 1;
    counter_Number.innerHTML = val;
    counter_Number.style.color = "red";
  }
});
btn2.addEventListener("click", function () {
  if (val <= -1 || val === 0) {
    val -= 1;
    counter_Number.innerHTML = val;
    counter_Number.style.color = "red";
  } else if (val >= -1) {
    val -= 1;
    counter_Number.innerHTML = val;
    counter_Number.style.color = "black";
  }
});
