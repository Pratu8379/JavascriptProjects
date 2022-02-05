//variables

const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", openModal);

close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
  modal.style.display = "block";
  e.preventDefault();
}

function closeModal(e) {
  modal.style.display = "none";
  e.preventDefault();
}
