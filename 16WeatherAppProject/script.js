const api = {
  key: "123",
  base: "345",
};

const search = document.querySelector(".search");

const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput(event) {
  event.prventDefault();
  if (event.type == "click") {
    getData(search.value);
  }
}

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then(displayData);
}

function displayData(response) {
  if (response.cod === "404") {
    const error = document.querySelector(".error");
    error.textContent = "please enter a valid city";
    search.value = "";
  } else {
    const city = document.querySelector(".city");
    city.innerText = `${response.name},${response.sys.country}`;

    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFunction(today);

    const temp = document.querySelector(".temp");
    temp.innerHTML = `Temp : ${Math.round(
      respond.main,
      temp
    )} <span>degree C</sapn>`;
  }
}

function dateFunction(d) {
  let month = ["1"];
  let days = ["days"];
  let day = days[d.getDay()];
  let date = days[d.getDate()];

  let day = days[d.getDay()];

  let day = days[d.getDay()];
}
