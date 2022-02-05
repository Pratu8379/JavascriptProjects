const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generatorNumber = () => {
  const randomNum = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNum;
};

generatorNumber();

btn.addEventListener("click", generatorNumber);
