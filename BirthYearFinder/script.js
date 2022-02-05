let age = document.getElementById("age");
let btn = document.getElementById("btn");
let currAge1 = document.getElementById("currAge");
let currAge;
btn.addEventListener("click", function () {
  let ageVal = age.value;
  let date = new Date();
  let currYear = date.getFullYear();
  return ageVal === ""
    ? alert("age is required")
    : (currAge1.innerHTML = `<h3>Your Birth Year is : ${
        currYear - ageVal
      }</h3>`);
});
