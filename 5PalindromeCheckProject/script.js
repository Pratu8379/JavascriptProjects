const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);
function palindrome() {
  const word = document.querySelector(".input-text").value;
  let revWord = word.split("").reverse().join("");
  revWord.toLowerCase() === word.toLowerCase()
    ? (result.innerHTML = `${word} is Palindrome`)
    : (result.innerHTML = `${word} is not a Palindrome`);
}
