const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowel);

function vowel() {
  const word = document.querySelector(".input-text").value;
  let vowelArray = ["a", "i", "o", "u", "e"];
  let count = 0;
  let wordArr = word.toLowerCase().split("");
  wordArr.forEach((item) => {
    if (vowelArray.includes(item)) {
      count += 1;
    }
  });
  result.innerHTML = `${word} has ${count} Vowels`;
}
